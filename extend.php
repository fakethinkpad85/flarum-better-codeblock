<?php

/*
 * This file is part of fakethinkpad85/flarum-better-codeblock.
 *
 * Copyright (c) 2023 fakethinkpad85.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/assets/forum.js'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/assets/admin.js'),
]; 