<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Superhero extends Model
{
    protected $fillable = [
        'id', 'nickname', 'name', 'origin', 'powers', 'phrase',
    ];

    /**
     * Get all of the posts for the user.
     */
    public function images()
    {
        return $this->hasMany('App\Image');
    }

    public function getAll(){
        $heroes = DB::table('superheroes')
            ->leftJoin('images', 'superheroes.id', '=', 'images.superheroes_id')
            ->orderBy('superheroes.name')
            ->take(5)
            ->get();
    }


}
