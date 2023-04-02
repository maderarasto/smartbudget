<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

use App\Http\Resources\UserResource;

class FinancesController extends Controller
{
    public function __construct() {
        $this->middleware('auth');
    }

    public function index() {
        return Inertia::render('Finances', [
            'user' => new UserResource(Auth::user()),
            'bsColClass' => 'col-12'
        ]);
    }
}
