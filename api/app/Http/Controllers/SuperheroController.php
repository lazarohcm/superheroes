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

        try{
            $attributes = array(
                'nickname' => $request->input('nickname'),
                'name' => $request->input('name'),
                'origin' => $request->input('origin'),
                'powers' => $request->input('powers'),
                'catch_phrase' => $request->input('catch_phrase'),
            );
            $hero = $this->model->create($attributes);
            $hero->save();
            return response()->json($hero);
        }catch(\Exception $ex) {
            return response()->json($error);
        }

        return response()->json($error);
    }
}
