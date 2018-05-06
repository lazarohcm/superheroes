<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->post('/superhero', 'SuperheroController@store');
    $router->put('/superhero', 'SuperheroController@update');
    $router->delete('/superhero/{hero_id}', 'SuperheroController@delete');
    $router->get('/superhero/{hero_id}', 'SuperheroController@getSuperHero');
    $router->get('/superhero/all/{pagination}', 'SuperheroController@getHeroesWithBasicInfo');
    $router->get('/superhero/image/{hero_id}/{image_id}', 'SuperheroController@getImage');
});