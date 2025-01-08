<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Incident>
 */
class IncidentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'place' =>fake()->city(),
            'incTime' =>fake()->date(),
            'desc' =>fake()->text(),
            'cars' =>json_encode(fake()->randomElements(["1","2","3","4","5"],null)),
            
        ];
    }
}
