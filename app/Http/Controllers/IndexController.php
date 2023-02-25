<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class IndexController extends Controller
{
    public function index() {
        return Inertia::render('Index', [
            'bs_col_width' => 4
        ]);
    }
}
