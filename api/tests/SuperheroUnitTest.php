<?php

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Superhero;
use Illuminate\Support\Facades\DB;

class SuperheroUnitTest extends TestCase
{
    private $model;

    function __construct(?string $name = null, array $data = [], string $dataName = '')
    {
        parent::__construct($name, $data, $dataName);
    }



    public function testCreateSuperhero() {
        $hero = new Superhero();
        $hero->nickname = 'Superman';

        $hero->save();

        $this->assertTrue($hero->exists);
        $hero =  Superhero::orderBy('id', 'desc')->first();
        $hero->delete();

    }

    public function testCreateSuperherowithImage() {
        $call = $this->post('api/superhero',
            ['nickname' => 'Hero test',
                'images' => [
                    $this->getHeroImage('hero.jpg'),
                    $this->getHeroImage('hero2.jpg'),
                ]
            ]);

        $jsonHero = json_decode($call->response->content());
        $hero =  Superhero::find($jsonHero->id);
        $this->assertNotNull($hero->images());

    }

    public function testUpdateSuperhero() {
        $hero =  Superhero::orderBy('id', 'desc')->first();

        $hero->name = 'Clark Kent';

        $hero->save();
        $this->assertNotNull($hero->updated_at);
    }

    public function testGetAllHeroes() {
        $heroes = Superhero::with('images')->orderBy('name')->take(5)->get();
        $this->assertNotEquals(0, count($heroes));
    }

    public function testDeleteSuperhero() {
        $hero =  Superhero::orderBy('id', 'desc')->first();
        $hero->delete();

        $this->assertFalse($hero->exists);
    }



    //Validation is not satisfied
    public function testCreateSuperheroError() {
        $this->post('api/superhero')->seeStatusCode(422);
    }


    public function testIsWorking() {
        $value = true;

        $this->assertTrue($value);
    }

    function getHeroImage($name = null) {
        return array(
            'src' => 'data:image/jpeg;base64,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',
            'filename' => $name,
            'filetype' => 'image/jpeg'
        );
    }

}
