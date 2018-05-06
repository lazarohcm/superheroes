<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;


class Superhero extends Model
{
    protected $fillable = [
        'id', 'nickname', 'name', 'origin', 'description', 'powers', 'phrase',
    ];


}
