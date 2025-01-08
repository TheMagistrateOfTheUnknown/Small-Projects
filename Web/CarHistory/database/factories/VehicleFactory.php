<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    
    public function definition(): array
    {
        return [
            //
            'nameplate' =>fake()->regexify('[A-Z]{3}(-)\d{3}'),
            'brand' =>fake()->randomElement(["BMW","AUDI","VOLKSWAGEN","FORD","FERRARI","MERCEDES","NISSAN","TOYOTA","SUZUKI"]),
            'type' =>fake()->randomElement(["Type A","Type B","Type C","Type D","Type E"]),
            'factoryYear' =>fake()->numberBetween(1950,2023),
            'image'=>NULL
            
        ];
    }
}
