<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response as InertiaResponse;

class AuthController extends Controller
{
    /**
     * @return InertiaResponse
     */
    public function loginForm() : InertiaResponse
    {
        return Inertia::render('Login');
    }

    public function login()
    {

    }

    /**
     * @return InertiaResponse
     */
    public function registerForm() : InertiaResponse
    {
        return Inertia::render('Register');
    }

    public function register()
    {

    }

    public function logout()
    {

    }
}
