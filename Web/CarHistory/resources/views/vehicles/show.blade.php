<x-guest-layout>
    <x-slot name="title">Cikk: Cikk címe</x-slot> 
    
    @if (Session::has('created_just_now'))
    <h2 class="text-green-500">CREATED</h2>
    @elseif(Session::has('updated_just_now'))
    <h2 class="text-green-500">UPDATED</h2>
    @endif
    <table>
        <tr>
            <td class="car_data">NAMEPLATE</td>
            <td >{{$vehicle->nameplate}}</td>
            <td rowspan="4"> <img src="{{ asset("storage/images/$image_name")}}" alt="Cover image"></td>

        </tr>
        <tr>
            <td class="car_data">BRAND</td>
            <td>{{$vehicle->brand}}</td>

        </tr> <tr>
            <td class="car_data">TYPE</td>
            <td>{{$vehicle->type}}</td>

        </tr> <tr>
            <td class="car_data">FACTORY YEAR</td>
            <td>{{$vehicle->factoryYear}}</td>

        </tr>
    </table>
   <a href="{{route('vehicles.edit',$vehicle->id),}}"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
    >EDIT</a>
</x-guest-layout>