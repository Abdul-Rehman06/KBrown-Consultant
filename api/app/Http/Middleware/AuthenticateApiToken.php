<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Models\User;

class AuthenticateApiToken
{
    public function handle(Request $request, Closure $next): Response
    {
        $header = $request->header('Authorization');

        if (!$header || !preg_match('/^Bearer\s+(.+)$/i', $header, $matches)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $token = $matches[1];
        $tokenHash = hash('sha256', $token);

        $user = User::query()
            ->whereNotNull('api_token')
            ->where('api_token', $tokenHash)
            ->where('is_admin', true)
            ->first();

        if (!$user) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $request->setUserResolver(fn () => $user);

        return $next($request);
    }
}

