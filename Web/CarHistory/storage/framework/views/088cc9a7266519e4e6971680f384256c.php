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
            <th>Picture</th>
            <th>Nameplate</th>
            <th>Search time</th>
            <th>LINK</th>
          </tr>
          
          <?php $__currentLoopData = $histories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <tr>
                <td>
                     <?php
                    $image = json_decode($item)->image;
                    ?>
                    <img class="rounded-lg pic" src="<?php echo e(asset("storage/images/$image")); ?>" alt="Cover image"></td>
                <td> <h2><?php echo e(json_decode($item)->nameplate); ?></h2></td>
                <td> <h2><?php echo e(json_decode($item)->time); ?></h2></td>
                <td>  <form class="flex flex-col gap-4" action="<?php echo e(route('vehicles.index')); ?>" method="get" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <label for="search" class="text-white bg-red-500 dd" >LINK</label>
                    <input type="text" name="search" id="search" max="7" class="dd" value=<?php echo e(json_decode($item)->nameplate); ?>>
                    <button id=<?php echo e(json_decode($item)->nameplate); ?> type="submit" class="p-2 bg-blue-500 hover:bg-blue-900 text-white rounded-lg shadow-sm">LINK</button>
                </form></td>
            </tr>
      
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </table>
 <?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal69dc84650370d1d4dc1b42d016d7226b)): ?>
<?php $component = $__componentOriginal69dc84650370d1d4dc1b42d016d7226b; ?>
<?php unset($__componentOriginal69dc84650370d1d4dc1b42d016d7226b); ?>
<?php endif; ?><?php /**PATH C:\UNI\Szerver\bead_mutat\resources\views/histories/index.blade.php ENDPATH**/ ?>