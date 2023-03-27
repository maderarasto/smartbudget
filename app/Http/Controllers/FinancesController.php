<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class FinancesController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    public function index() {
        return Inertia::render('Finances', [
            'title' => 'Overview'
        ]);
    }
}
