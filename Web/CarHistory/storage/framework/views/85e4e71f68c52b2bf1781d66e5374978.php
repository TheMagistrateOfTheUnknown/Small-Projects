<?php if (isset($component)) { $__componentOriginal69dc84650370d1d4dc1b42d016d7226b = $component; } ?>
<?php $component = App\View\Components\GuestLayout::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('guest-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\GuestLayout::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
    <?php if(count($vehicles) == 1): ?>
    <a href="<?php echo e(route('vehicles.show',$vehicles[0])); ?>">
    <table>
        <tr>
            <td class="car_data">NAMEPLATE</td>
            <td ><?php echo e($vehicles[0]->nameplate); ?></td>
            <td rowspan="4"> 
            <?php if($image_name = $vehicles[0]->image ?? 'default.jpg'): ?>
                <img class="rounded-lg" src="<?php echo e(asset("storage/images/$image_name")); ?>" alt="Cover image">
            <?php endif; ?>
            </td>
        </tr>
        <tr>
            <td class="car_data">BRAND</td>
            <td><?php echo e($vehicles[0]->brand); ?></td>

        </tr> <tr>
            <td class="car_data">TYPE</td>
            <td><?php echo e($vehicles[0]->type); ?></td>

        </tr> <tr>
            <td class="car_data">FACTORY YEAR</td>
            <td><?php echo e($vehicles[0]->factoryYear); ?></td>

        </tr>
    </table>
    </a>
        <h1 class="text-white">INCIDENTS</h1>
        <h1 class="text-white">--------------------------------------------------------</h1>
        <?php $__currentLoopData = $incidents; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="bg-white rounded">

            <a href="<?php echo e(route('incidents.show',$item)); ?>">
                <h1>Place : <?php echo e($item->place); ?></h1>
                <h1>incTime : <?php echo e($item->incTime); ?></h1>
                <h1>desc : <?php echo e($item->desc); ?></h1>
                <h1>cars involved :</h1>
                <?php $__currentLoopData = $allvehicles; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cars): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if(in_array($cars->id,json_decode($item->cars))): ?>
                <a href="<?php echo e(route('vehicles.show',$cars)); ?>">
                    <h1><?php echo e($cars->brand); ?></h1>
                </a>
                <?php endif; ?>
            </a>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <form class="inline-block" method="POST" action="<?php echo e(route('incidents.destroy', $item->id)); ?>">
                <?php echo csrf_field(); ?>
                <?php echo method_field('DELETE'); ?>
                <button type="submit" 
                    class="p-2 bg-red-500 hover:bg-red-900 text-white rounded-lg shadow-sm mt-4"
            
                >DELETE</button>
            </form>
        </div>
        <h1 class="text-white">--------------------------------------------------------</h1>

        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <?php else: ?>
                <h1 class="text-white">CAR IS NOT IN THE DATABASE</h1>
            <?php endif; ?>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal69dc84650370d1d4dc1b42d016d7226b)): ?>
<?php $component = $__componentOriginal69dc84650370d1d4dc1b42d016d7226b; ?>
<?php unset($__componentOriginal69dc84650370d1d4dc1b42d016d7226b); ?>
<?php endif; ?><?php /**PATH C:\UNI\Szerver\Laravel-bead\beadando\resources\views/vehicles/index.blade.php ENDPATH**/ ?>