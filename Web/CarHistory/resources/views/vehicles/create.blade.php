<x-guest-layout>
    <h1 class="text-white">NEW VEHICLE</h1>
    <form class="flex flex-col gap-4" action="{{route('vehicles.store')}}" method="post" enctype="multipart/form-data">
        @csrf
        <label class="text-white" for="nameplate">Nameplate : </label>
        <input type="text" name="nameplate" id="nameplate"  value="{{ old('nameplate', '') }}">
        @error('nameplate')
            <div class="text-red-500">NAMEPLATE ERROR: {{ $message }}</div>
        @enderror
        <label class="text-white" for="brand">BRAND : </label>
        <input type="text" name="brand" id="brand"  value="{{ old('brand', '') }}">
        @error('brand')
        <div class="text-red-500">BRAND ERROR: {{ $message }}</div>
        @enderror
        <label class="text-white" for="type">TYPE : </label>
        <input type="text" name="type" id="type"  value="{{ old('type', '') }}">
        @error('type')
        <div class="text-red-500">TYPE ERROR: {{ $message }}</div>
        @enderror
        <label class="text-white" for="factoryYear">FACTORY  YEAR : </label>
        <input type="number" name="factoryYear" id="factoryYear" min="1950" max="2023" value="{{ old('factoryYear', '') }}">
        @error('factoryYear')
        <div class="text-red-500">FACTORY  YEAR ERROR: {{ $message }}</div>
        @enderror
        <label class="text-white" for="attach_image>">PICTURE</label>
        <input type="file" name="attach_image" id="attach_image">
        @error('attach_image')
        <div class="text-red-500">PICTURE ERROR: {{ $message }}</div>
        @enderror
        <button type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">CREATE</button>
    </form>
</x-guest-layout>