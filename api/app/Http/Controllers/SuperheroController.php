<?php

namespace App\Http\Controllers;

use App\Image;
use Illuminate\Http\Request;
use App\Superhero;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;


class SuperheroController extends Controller
{
    protected $model;

    public function __construct(Superhero $superhero = null)
    {
        if ($superhero != null) {
            $this->model = $superhero;
        }
    }

    public function store(Request $request)
    {
        $error = $this->validate($request, [
            'name' => 'max:255',
            'nickname' => 'required|max:255|min:3|nullable'
        ]);

        try {
            $hero = new Superhero();
            $hero->nickname = $request->input('nickname');
            $hero->name = $request->input('name');
            $hero->origin = $request->input('origin');
            $hero->powers = $request->input('powers');
            $hero->phrase = $request->input('catch_phrase');
            $hero->save();
            $images = $request->input('images');
            //Each hero will have an folder to store their images

            if (!file_exists(storage_path('app/' . $hero->id))) {
                mkdir(storage_path('app/' . $hero->id), 0755, true);
            }
            foreach ($images as $image) {
                $this->storeImage($image, $hero->id);
            }
            return response()->json($hero);
        } catch (\Exception $ex) {
            return response()->json($error);
        }
    }

    public function getImage(Request $request, $hero_id, $image_id)
    {
        try {
            $image = Image::find($image_id);
            $content = file_get_contents(storage_path('app/' . $hero_id . '/' . $image->name));
            return response($content)
                ->header('Content-Type', 'image/' . $image->type)
                ->header('Content-Disposition', "inline; filename='$image->name'")
                ->header('Cache-Control', 'max-age=60, must-revalidate');

        } catch (\Exception $ex) {
            return response($ex->getMessage(), 500);
        }

    }

    private function storeImage($image, $hero_id)
    {
        $base64 = $image['src'];
        $data = explode(',', $base64);
        $filepath = storage_path('app/' . $hero_id . '/' . $image['filename']);
        $file = fopen($filepath, "wb");
        fwrite($file, base64_decode($data[1]));
        $imageModel = new Image();
        $imageModel->name = $image['filename'];
        $imageModel->type = $image['filetype'];
        $imageModel->superhero_id = $hero_id;
        $imageModel->save();
        fclose($file);
        return true;
    }
}
