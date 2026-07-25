<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class UploadController extends Controller
{
    public function image(Request $request)
    {
        $request->validate([
            'image' => ['required', 'file', 'mimes:jpg,jpeg,png,webp', 'max:4096'],
        ]);

        $file = $request->file('image');
        $ext = $file->getClientOriginalExtension();

        $name = Str::uuid()->toString() . '.' . $ext;
        $dir = public_path('uploads/resources');
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }

        $file->move($dir, $name);

        return response()->json([
            'url' => '/api/uploads/resources/' . $name,
        ]);
    }

    public function showResourceImage(string $filename)
    {
        $safe = basename($filename);
        $path = public_path('uploads/resources/' . $safe);

        if (!is_file($path)) {
            abort(404);
        }

        return response()->file($path, [
            'Cache-Control' => 'public, max-age=31536000',
        ]);
    }
}
