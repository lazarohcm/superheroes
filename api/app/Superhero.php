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

    public function image()
    {
        return $this->hasOne('App\Image');
    }


    public function delete(){
        /**
         * Delete images folder (On testing, only the files are deleted - Couldn't solve it)
         */
        $images_path = storage_path('app/' . $this->id);
        array_map('unlink', glob($images_path."/*.*"));
        if (!file_exists($images_path)) {
            mkdir($images_path, 0755, true);
        }
        return parent::delete();
    }

    public function heroesWithBasicInfo($lastId) {
        return Superhero::with('image')->get()->map(function($image) {
            $image->setRelationship('images', $image->images->take(1));
        })->where('suerpheroes.id', '>', $lastId)->get();
    }

    public function getAll(){
        $heroes = DB::table('superheroes')
            ->leftJoin('images', 'superheroes.id', '=', 'images.superheroes_id')
            ->orderBy('superheroes.name')
            ->take(5)
            ->get();
    }


}
