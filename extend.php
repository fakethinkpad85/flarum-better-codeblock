<?php

namespace fakethinkpad85\BetterCodeblock;

use Flarum\Extend;
use Flarum\Frontend\Document;

$extensionDir = __DIR__;

return [
    (new Extend\Frontend('forum'))
        ->js($extensionDir . '/assets/forum.js'),

    (new Extend\Frontend('admin'))
        ->js($extensionDir . '/assets/admin.js'),
]; 