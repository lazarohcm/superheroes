<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Superhero;
use Illuminate\Support\Facades\DB;

class SuperheroController extends Controller
{
    protected $model;

    public function __construct(Superhero $superhero = null)
    {
        if($superhero != null) {
            $this->model = $superhero;
        }
    }

    public function store(Request $request) {
        $error = $this->validate($request, [
            'name' => 'max:255',
            'nickname' => 'required|max:255'
        ]);

        return response()->json($error);
    }
}
