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
    }

    public function testUpdateSuperhero() {
        $hero =  Superhero::orderBy('id', 'desc')->first();

        $hero->name = 'Clark Kent';

        $hero->save();
        $this->assertNotNull($hero->updated_at);
    }

    public function testDeleteSuperhero() {
        $hero =  Superhero::orderBy('id', 'desc')->first();
        $hero->delete();

        $this->assertFalse($hero->exists);
    }


    public function testIsWorking() {
        $value = true;

        $this->assertTrue($value);
    }

//    public function testConnection() {
//        try {
//            DB::connection()->getPdo();
//        } catch (\Exception $e) {
//            die("Could not connect to the database.  Please check your configuration.");
//        }
//    }
}
