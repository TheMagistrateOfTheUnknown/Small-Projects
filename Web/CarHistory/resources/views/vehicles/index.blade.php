<x-guest-layout>
    @if (count($vehicles) == 1)
    <a href="{{route('vehicles.show',$vehicles[0])}}">
    <table>
        <tr>
            <td class="car_data">NAMEPLATE</td>
            <td >{{$vehicles[0]->nameplate}}</td>
            <td rowspan="4"> 
            @if ($image_name = $vehicles[0]->image ?? 'default.jpg')
                <img class="rounded-lg" src="{{ asset("storage/images/$image_name")}}" alt="Cover image">
            @endif
            </td>
        </tr>
        <tr>
            <td class="car_data">BRAND</td>
            <td>{{$vehicles[0]->brand}}</td>

        </tr> <tr>
            <td class="car_data">TYPE</td>
            <td>{{$vehicles[0]->type}}</td>

        </tr> <tr>
            <td class="car_data">FACTORY YEAR</td>
            <td>{{$vehicles[0]->factoryYear}}</td>

        </tr>
    </table>
    </a>
        <h1 class="text-white">INCIDENTS</h1>
        <h1 class="text-white">--------------------------------------------------------</h1>
        @foreach ($incidents as $item)
        <div class="bg-white rounded">

            <a href="{{route('incidents.show',$item)}}">
                <h1>Place : {{$item->place}}</h1>
                <h1>incTime : {{$item->incTime}}</h1>
                <h1>desc : {{$item->desc}}</h1>
                <h1>cars involved :</h1>
                @foreach ($allvehicles as $cars)
                @if (in_array($cars->id,json_decode($item->cars)))
                <a href="{{route('vehicles.show',$cars)}}">
                    <h1>{{$cars->brand}}</h1>
                </a>
                @endif
            </a>
            @endforeach
            <form class="inline-block" method="POST" action="{{ route('incidents.destroy', $item->id) }}">
                @csrf
                @method('DELETE')
                <button type="submit" 
                    class="p-2 bg-red-500 hover:bg-red-900 text-white rounded-lg shadow-sm mt-4"
            
                >DELETE</button>
            </form>
        </div>
        <h1 class="text-white">--------------------------------------------------------</h1>

        @endforeach
            @else
                <h1 class="text-white">CAR IS NOT IN THE DATABASE</h1>
            @endif
</x-guest-layout>