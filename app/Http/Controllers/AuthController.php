<?php

namespace App\Http\Controllers;

use App\Repositories\Interfaces\UserRepositoryInterface;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;


class AuthController extends Controller
{
    protected UserRepositoryInterface $userRepository;

    public function __construct(UserRepositoryInterface $repository)
    {
        $this->userRepository = $repository;
    }

    /**
     * @return InertiaResponse
     */
    public function loginForm() : InertiaResponse
    {
        return Inertia::render('Login', [
            'bs_col_class' => 'col-9 col-sm-6 col-md-5 col-lg-4 col-xl-3',
            'urls' => [
                'login' => route('login'),
                'register' => route('register')
            ]
        ]);
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
        return redirect()->intended(route('finances.index'));
    }

    /**
     * @return InertiaResponse
     */
    public function registerForm() : InertiaResponse
    {
        return Inertia::render('Register', [
            'urls' => [
                'login' => route('login'),
                'register' => route('register')
            ]
        ]);
    }

    /**
     * @return void
     */
    public function register(Request $request) : RedirectResponse
    {
        # Obtain input
        $inputData = $request->only([
            'name',
            'email',
            'password',
            'password_confirmation'
        ]);

        # Validate input values
        $validator = Validator::make($inputData, [
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed'
        ], [
            'name.required' => 'A name is required',
            'name.max' => 'A name should be a maximum 255 characters long',

            'email.required' => 'An email is required',
            'email.email' => 'An email has to be in email format',
            'email.unique' => 'An email is already in our records',

            'password.required' => 'A password is required',
            'password.min' => 'A password should be at least 8 characters long',
            'password.confirmed' => 'A confirmation password does not match'
        ]);

        # if there are validation errors then return them
        if ($validator->fails())
        {
            return redirect()->back()->withErrors($validator);
        }

        # Create user with given input
        $this->userRepository->create($inputData);

        # Redirect user after creating user succeed.
        return redirect()->intended(route('login'));
    }

    /**
     * @return void
     */
    public function logout() : RedirectResponse
    {
        Auth::logout();
        return redirect()->intended(route('login'));
    }
}
