<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Image extends Model
{
    protected $fillable = [
        'id', 'superheroes_id', 'name', 'type',
    ];

    /**
     * Get the author that wrote the book.
     */
    public function superhero()
    {
        return $this->belongsTo('App\Superhero');
    }
}
