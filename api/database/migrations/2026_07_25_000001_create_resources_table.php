<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('icon', 64);
            $table->string('image_url', 2048)->nullable();
            $table->string('payment_link', 2048);
            $table->string('category', 32);
            $table->boolean('is_featured')->default(false);
            $table->unsignedInteger('featured_order')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};

