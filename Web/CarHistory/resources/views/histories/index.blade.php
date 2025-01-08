<x-guest-layout>
    <table>
        <tr>
            <th>Picture</th>
            <th>Nameplate</th>
            <th>Search time</th>
            <th>LINK</th>
          </tr>
          
          @foreach ($histories as $item)
            <tr>
                <td>
                     @php
                    $image = json_decode($item)->image;
                    @endphp
                    <img class="rounded-lg pic" src="{{ asset("storage/images/$image")}}" alt="Cover image"></td>
                <td> <h2>{{json_decode($item)->nameplate}}</h2></td>
                <td> <h2>{{json_decode($item)->time}}</h2></td>
                <td>  <form class="flex flex-col gap-4" action="{{route('vehicles.index')}}" method="get" enctype="multipart/form-data">
                    @csrf
                    <label for="search" class="text-white bg-red-500 dd" >LINK</label>
                    <input type="text" name="search" id="search" max="7" class="dd" value={{json_decode($item)->nameplate}}>
                    <button id={{json_decode($item)->nameplate}} type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">LINK</button>
                </form></td>
            </tr>
      
        @endforeach
    </table>
</x-guest-layout>