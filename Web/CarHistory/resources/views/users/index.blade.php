<x-guest-layout>
    <h1 class="text-white">USER LISTING</h1>
    <table>
        <tr>
            <th>NAME</th>
            <th>PREMIUM</th>
            <th>CHANGE</th>
        </tr>
    @foreach ($users as $user)
            <tr>
                <td>{{$user->name}}</td>
                @if ($user->isPremium)
                    <td>YES</td>                    
                @else
                    <td>NO</td>                    
                @endif
                <td>
                    <form class="flex flex-col gap-3"  action="{{route('users.update',$user->id)}}" method="post">
                        @csrf
                        @method('PUT')
                        <button type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">Change</button>
                    </form>
                </td>
            </tr>
    
    @endforeach
</table>
<div>{{$users->links()}}</div>    
</x-guest-layout>