<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class IndexController extends Controller
{
    public function index() : InertiaResponse
    {
        return Inertia::render('Index', [
            'bs_col_class' => 4
        ]);
    }
}
