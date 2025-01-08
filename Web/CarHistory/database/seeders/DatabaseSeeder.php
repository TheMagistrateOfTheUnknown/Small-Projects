<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use App\Models\User;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([HistorySeeder::class]);
        $this->call([IncidentSeeder::class]);
        $this->call([UsersSeeder::class]);
        $this->call([VehicleSeeder::class]);
        $user = User::create([
          'name' => fake()->name(),
          'email' => fake()->unique()->safeEmail(),
          'password' => Hash::make('password'),
          'isAdmin' =>True,
          'isPremium' =>True,
          'email_verified_at' => now(),
          'remember_token' => Str::random(10),
        ]);
      //$this->call([TopicSeeder::class]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
