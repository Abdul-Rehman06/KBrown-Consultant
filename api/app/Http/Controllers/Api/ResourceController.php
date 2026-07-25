<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ResourceItem;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ResourceController extends Controller
{
    public function index(Request $request)
    {
        $query = ResourceItem::query();

        if ($request->filled('category')) {
            $query->where('category', $request->string('category')->toString());
        }

        if ($request->filled('featured')) {
            $featured = filter_var($request->query('featured'), FILTER_VALIDATE_BOOLEAN);
            $query->where('is_featured', $featured);
        }

        $query->orderByRaw('CASE WHEN featured_order IS NULL THEN 1 ELSE 0 END, featured_order ASC');
        $query->orderBy('created_at', 'desc');

        $limit = $request->integer('limit');
        if ($limit && $limit > 0 && $limit <= 50) {
            $query->limit($limit);
        }

        return response()->json($query->get());
    }

    public function store(Request $request)
    {
        $data = $this->validatePayload($request);
        $resource = ResourceItem::create($data);

        return response()->json($resource, 201);
    }

    public function update(Request $request, ResourceItem $resource)
    {
        $data = $this->validatePayload($request);
        $resource->fill($data);
        $resource->save();

        return response()->json($resource);
    }

    public function destroy(ResourceItem $resource)
    {
        $resource->delete();

        return response()->json(['ok' => true]);
    }

    public function clear()
    {
        ResourceItem::query()->delete();

        return response()->json(['ok' => true]);
    }

    private function validatePayload(Request $request): array
    {
        return $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'icon' => ['required', 'string', 'max:64'],
            'image_url' => ['nullable', 'string', 'max:2048'],
            'payment_link' => ['required', 'string', 'max:2048'],
            'category' => ['required', 'string', Rule::in(['eBook', 'Guide'])],
            'is_featured' => ['sometimes', 'boolean'],
            'featured_order' => ['nullable', 'integer', 'min:0', 'max:9999'],
        ]);
    }
}
