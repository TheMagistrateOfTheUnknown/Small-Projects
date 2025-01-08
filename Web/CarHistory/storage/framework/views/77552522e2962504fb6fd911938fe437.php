<?php if (isset($component)) { $__componentOriginal69dc84650370d1d4dc1b42d016d7226b = $component; } ?>
<?php $component = App\View\Components\GuestLayout::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('guest-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\GuestLayout::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
    <table>
        <tr>
            <td class="car_data">PLACE</td>
            <td><?php echo e($incident->place); ?></td>
        </tr>
        <tr>
            <td class="car_data">TIME</td>
            <td><?php echo e($incident->incTime); ?></td>
        </tr>
        <tr>
            <td class="car_data">DESC</td>
            <td><?php echo e($incident->desc); ?></td>
        </tr>
    </table>
    <h1 class="text-white">The cars involved</h1>
    <div class="p-2 bg-red-500">
    <table>
        <?php $__currentLoopData = $cars; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $car): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if(in_array($car->id,json_decode($incident->cars))): ?>
            <tr>
                <td class="car_data">NAMEPLATE</td>
                <td ><?php echo e($car->nameplate); ?></td>
                <?php
                    $image_name = $car->image ?? 'default.jpg';
                ?>
                <td rowspan="4"> <img src="<?php echo e(asset("storage/images/$image_name")); ?>" alt="Cover image"></td>

            </tr>
            <tr>
                <td class="car_data">BRAND</td>
                <td><?php echo e($car->brand); ?></td>

            </tr> <tr>
                <td class="car_data">TYPE</td>
                <td><?php echo e($car->type); ?></td>

            </tr> <tr>
                <td class="car_data">FACTORY YEAR</td>
                <td><?php echo e($car->factoryYear); ?></td>
                
            </tr>
            <?php endif; ?>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </table>
        
    </div>
    <a href="<?php echo e(route('incidents.edit',$incident->id)); ?>"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
        >EDIT </a>
        
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal69dc84650370d1d4dc1b42d016d7226b)): ?>
<?php $component = $__componentOriginal69dc84650370d1d4dc1b42d016d7226b; ?>
<?php unset($__componentOriginal69dc84650370d1d4dc1b42d016d7226b); ?>
<?php endif; ?><?php /**PATH C:\UNI\Szerver\bead_mutat\resources\views/incidents/show.blade.php ENDPATH**/ ?>