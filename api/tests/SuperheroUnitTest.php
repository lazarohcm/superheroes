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

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testCreateSuperhero() {
        $hero = new Superhero();
        $hero->name = 'Clark Kent';

        $hero->save();

        $this->assertNotNull($hero->id);
    }


    public function testIsWorking() {
        $value = true;

        $this->assertTrue($value);
    }

    public function testConnection() {
        try {
            DB::connection()->getPdo();
        } catch (\Exception $e) {
            die("Could not connect to the database.  Please check your configuration.");
        }
    }
}
