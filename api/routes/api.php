<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ResourceController;
use App\Http\Controllers\Api\UploadController;

Route::get('/resources', [ResourceController::class, 'index']);

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth.token');
    Route::get('/me', [AuthController::class, 'me'])->middleware('auth.token');
});

Route::middleware('auth.token')->group(function () {
    Route::post('/resources', [ResourceController::class, 'store']);
    Route::delete('/resources', [ResourceController::class, 'clear']);
    Route::put('/resources/{resource}', [ResourceController::class, 'update']);
    Route::delete('/resources/{resource}', [ResourceController::class, 'destroy']);
    Route::post('/uploads/image', [UploadController::class, 'image']);
});

Route::get('/uploads/resources/{filename}', [UploadController::class, 'showResourceImage'])
    ->where('filename', '[^/]+');
