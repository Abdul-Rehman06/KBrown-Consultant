<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $username = env('ADMIN_USERNAME', 'admin');
        $password = env('ADMIN_PASSWORD', 'change-me');

        User::query()->firstOrCreate(
            ['username' => $username],
            [
                'name' => 'Admin',
                'email' => env('ADMIN_EMAIL', 'admin@kbrownconsultant.com'),
                'is_admin' => true,
                'password' => Hash::make($password),
            ]
        );
    }
}
