<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ResourceItem extends Model
{
    protected $table = 'resources';

    protected $fillable = [
        'title',
        'description',
        'icon',
        'image_url',
        'payment_link',
        'category',
        'is_featured',
        'featured_order',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'featured_order' => 'integer',
    ];
}

