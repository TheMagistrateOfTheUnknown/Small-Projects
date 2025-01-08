<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\History>
 */
class HistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nameplate' =>fake()->regexify('[A-Z]{3}(-)\d{3}'),
            'searchTime'=>fake()->date(),
            'name' =>fake()->randomElement([1,2,3,4,5]),
        ];
    }
}
