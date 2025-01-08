<x-guest-layout>
    <table>
        <tr>
            <td class="car_data">PLACE</td>
            <td>{{$incident->place}}</td>
        </tr>
        <tr>
            <td class="car_data">TIME</td>
            <td>{{$incident->incTime}}</td>
        </tr>
        <tr>
            <td class="car_data">DESC</td>
            <td>{{$incident->desc}}</td>
        </tr>
    </table>
    <h1 class="text-white">The cars involved</h1>
    <div class="p-2 bg-red-500">
    <table>
        @foreach ($cars as $car)
        @if (in_array($car->id,json_decode($incident->cars)))
            <tr>
                <td class="car_data">NAMEPLATE</td>
                <td >{{$car->nameplate}}</td>
                @php
                    $image_name = $car->image ?? 'default.jpg';
                @endphp
                <td rowspan="4"> <img src="{{ asset("storage/images/$image_name")}}" alt="Cover image"></td>

            </tr>
            <tr>
                <td class="car_data">BRAND</td>
                <td>{{$car->brand}}</td>

            </tr> <tr>
                <td class="car_data">TYPE</td>
                <td>{{$car->type}}</td>

            </tr> <tr>
                <td class="car_data">FACTORY YEAR</td>
                <td>{{$car->factoryYear}}</td>
                
            </tr>
            @endif
            @endforeach
        </table>
        
    </div>
    <a href="{{route('incidents.edit',$incident->id)}}"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
        >EDIT </a>
        
</x-guest-layout>