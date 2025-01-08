<x-guest-layout>
    <h1 class="text-white">INCIDENT EDITOR</h1> 
    <form class="flex flex-col gap-3"  action="{{route('incidents.update',$incident->id)}}" method="post" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <label class="text-white" for="place">PLACE : </label>
        <input type="text" name="place" id="place"  value="{{ old('place', $incident->place) }}">
        @error('place')
            <div class="text-red-500">PLACE ERROR: {{ $message }}</div>
        @enderror
        <label class="text-white" for="dateTime">DATE : </label>
        @php
            $now = date("Y-m-d");
        @endphp
        <input type="date" name="dateTime" id="dateTime" max="{{$now}}"  value="{{ old('dateTime', $incident->dateTime) }}">
        @error('dateTime')
        <div class="text-red-500">DATE ERROR: {{ $message }}</div>
        @enderror
        <label class="text-white" for="desc">DESCIPTION</label>
        <textarea name="desc" id="desc" cols="30" rows="10">{{ old('desc', $incident->desc) }}</textarea>
        @error('desc')
            <div class="text-red-500">DESCIPTION ERROR: {{ $message }}</div>
        @enderror
        <h1 class="text-white">THE CARS INVOLVED IN THE INCIDENT: </h1>
            <label class="text-white" for="cars">CARS</label>
           @foreach ($vehicles as $car)
               <input type="checkbox" name="cars[]" value={{$car->id}} @checked(in_array($car->id, old('topics') ?? json_decode($incident->cars))) >
               <label class="text-white" for="{{$car->brand.' '.$car->type}}">{{$car->brand.' '.$car->type}}</label>
           @endforeach
        @error('cars')
           <div class="text-red-500">CARS ERROR: {{ $message }}</div>            
       @enderror
       @error('cars.*')
           <div class="text-red-500">CARS ERROR: {{ $message }}</div>            
       @enderror
        <button type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">EDIT</button>
    </form>
</x-guest-layout>