<?php

namespace App;

use Mmi\Mvc\RouterConfig;

use function DI\create;

return [
    //router config
    RouterConfig::class                 => create(AppRouterConfig::class),
];