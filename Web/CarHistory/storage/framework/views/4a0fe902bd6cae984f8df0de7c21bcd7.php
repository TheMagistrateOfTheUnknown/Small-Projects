<?php if (isset($component)) { $__componentOriginal69dc84650370d1d4dc1b42d016d7226b = $component; } ?>
<?php $component = App\View\Components\GuestLayout::resolve([] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? (array) $attributes->getIterator() : [])); ?>
<?php $component->withName('guest-layout'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag && $constructor = (new ReflectionClass(App\View\Components\GuestLayout::class))->getConstructor()): ?>
<?php $attributes = $attributes->except(collect($constructor->getParameters())->map->getName()->all()); ?>
<?php endif; ?>
<?php $component->withAttributes([]); ?>
     <?php $__env->slot('title', null, []); ?> Cikk: Cikk címe <?php $__env->endSlot(); ?> 
    
    <?php if(Session::has('created_just_now')): ?>
    <h2 class="text-green-500">CREATED</h2>
    <?php elseif(Session::has('updated_just_now')): ?>
    <h2 class="text-green-500">UPDATED</h2>
    <?php endif; ?>
    <table>
        <tr>
            <td class="car_data">NAMEPLATE</td>
            <td ><?php echo e($vehicle->nameplate); ?></td>
            <td rowspan="4"> <img src="<?php echo e(asset("storage/images/$image_name")); ?>" alt="Cover image"></td>

        </tr>
        <tr>
            <td class="car_data">BRAND</td>
            <td><?php echo e($vehicle->brand); ?></td>

        </tr> <tr>
            <td class="car_data">TYPE</td>
            <td><?php echo e($vehicle->type); ?></td>

        </tr> <tr>
            <td class="car_data">FACTORY YEAR</td>
            <td><?php echo e($vehicle->factoryYear); ?></td>

        </tr>
    </table>
   <a href="<?php echo e(route('vehicles.edit',$vehicle->id),); ?>"
    class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm mt-4"
    >EDIT</a>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal69dc84650370d1d4dc1b42d016d7226b)): ?>
<?php $component = $__componentOriginal69dc84650370d1d4dc1b42d016d7226b; ?>
<?php unset($__componentOriginal69dc84650370d1d4dc1b42d016d7226b); ?>
<?php endif; ?><?php /**PATH C:\UNI\Szerver\Laravel-bead\beadando\resources\views/vehicles/show.blade.php ENDPATH**/ ?>