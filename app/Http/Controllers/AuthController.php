<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
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

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function login(Request $request) : RedirectResponse
    {
        # Obtain credentials
        $remember = $request->get('remember', false);
        $credentials = $request->only([
            'email',
            'password',
        ]);

        # Attempt to log in
        # Check for errors and return them
        if (!Auth::attempt($credentials, $remember)) {
            return redirect()->back()->withErrors([
                'email' => 'These credentials do not match our records.'
            ]);
        }

        # After succesfully log in then redirect user
        return redirect()->intended('finances.index');
    }

    /**
     * @return InertiaResponse
     */
    public function registerForm() : InertiaResponse
    {
        return Inertia::render('Register');
    }

    /**
     * @return void
     */
    public function register()
    {
        # Obtain input
        # Validate input values
        # if there are validation errors then return them
        # Create user with given input
        # Redirect user after creating user succeed.
    }

    /**
     * @return void
     */
    public function logout()
    {

    }
}
