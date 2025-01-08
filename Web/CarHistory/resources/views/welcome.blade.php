@php
    use App\Models\User;
@endphp
<x-guest-layout>
<h1 class="text-white">On this site you can search for cars that are in the database.
    Type in the nameplate of the car and if there is a car that has the same nameplate than it will show the data.
    The data is the basics of the car with the car's incident list.The closest to day will be the first one.There are some functions that are only available for premium users or admin users.</h1>


<div class="py-6">
    @auth
        
    @php
        $user = User::findOrFail(auth()->user()->id);
        @endphp 
    @if ($user->isAdmin)
    <a
    href="{{ route('vehicles.create') }}"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
    >NEW VEHICLE</a>
    <a
    href="{{ route('incidents.create') }}"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
    >NEW INCIDENT</a>
    <a href="{{route('users.index')}}"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
    >USERS</a>
    @endif
    @endauth
    <a href="{{route('histories.index')}}"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
    >HISTORY</a>
    @if (!auth()->checK())
        
    <a href="{{route('register')}}"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
    >REGISTER</a>
    <a href="{{route('login')}}"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
    >LOGIN</a>
    @endif
</div>
<form class="flex flex-col gap-4" action="{{route('vehicles.index')}}" method="get" enctype="multipart/form-data">
    @csrf
    <label for="search" class="text-white bg-red-500 text-center" >SEARCH BAR</label>
    <input type="text" name="search" id="search" max="7">
    @error('search')
    <div class="text-red-500">Márka hiba: {{ $message }}</div>
    @enderror
    <button type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">SEND</button>

</form>
<form method="POST" action="{{ route('logout') }}">
    @csrf
    <x-dropdown-link :href="route('logout')"
   

            onclick="event.preventDefault();
                        this.closest('form').submit();">
        {{ __('Log Out') }}
    </x-dropdown-link>
</form>

</x-guest-layout>