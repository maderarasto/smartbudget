<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Repositories\Interfaces\UserRepositoryInterface;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Password;
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
    public function loginForm(Request $request) : InertiaResponse
    {
//        die(var_dump($request));
        return Inertia::render('Login', [
            'bsColClass' => 'col-9 col-sm-7 col-md-5 col-lg-4 col-xl-4 col-xxl-3',
            'urls' => [
                'login' => route('login'),
                'register' => route('register'),
                'password.recover' => route('password.recover')
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
                'email' => __('auth.failed')
            ]);
        }

        # After successfully log in then redirect user
        return redirect()->intended(route('finances.index'));
    }

    /**
     * @return InertiaResponse
     */
    public function registerForm() : InertiaResponse
    {

        return Inertia::render('Register', [
            'bsColClass' => 'col-9 col-sm-7 col-md-5 col-lg-4 col-xl-4 col-xxl-3',
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
            'name.required' => __('auth.name.required'),
            'name.max' => __('auth.name.max'),

            'email.required' => __('auth.email.required'),
            'email.email' => __('auth.email.email'),
            'email.unique' => __('auth.email.unique'),

            'password.required' => __('auth.password.required'),
            'password.min' => __('auth.password.min'),
            'password.confirmed' => __('auth.password.confirmed')
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

    public function recoverPasswordForm() : InertiaResponse
    {
        return Inertia::render('RecoverPassword', [
            'bsColClass' => 'col-9 col-sm-7 col-md-5 col-lg-4 col-xl-4 col-xxl-3',
            'urls' => [
                'login' => route('login'),
                'password.recover.submit' => route('password.recover.submit')
            ]
        ]);
    }

    public function recoverPassword(Request $request) : RedirectResponse
    {
        $inputData = $request->only([
            'email'
        ]);

        $validator = Validator::make($inputData, [
            'email' => 'required|email|exists:users',
        ], [
            'email.required' => __('auth.email.required'),
            'email.email' => __('auth.email.email'),
            'email.exists' => __('auth.email.exists'),
        ]);

        if ($validator->fails())
        {
            return redirect()->back()->withErrors($validator);
        }

        $status = Password::sendResetLink($inputData);

        return $status !== Password::RESET_LINK_SENT ?
            back()->withErrors(['email' => $status]) :
            redirect()->route('login')->with(['recover_password' => $status]);
    }

    public function resetPasswordForm(Request $request) : InertiaResponse|RedirectResponse
    {
        $inputData = $request->only([
            'token',
            'email',
        ]);

        if (empty($inputData['token']) || empty($inputData['email']))
        {
            return redirect()->route('login');
        }

        return Inertia::render('ResetPassword', [
            'bsColClass' => 'col-9 col-sm-7 col-md-5 col-lg-4 col-xl-4 col-xxl-3',
            'urls' => [
                'login' => route('login'),
                'password.reset.submit' => route('password.reset.submit')
            ]
        ]);
    }

    public function resetPassword(Request $request) : RedirectResponse
    {
        $inputData = $request->only([
            'token',
            'email',
            'password',
            'password-confirmation'
        ]);

        $validator = Validator::make($inputData, [
            'password' => 'required|min:8|confirmed'
        ], [
            'password.required' => __('auth.password.required'),
            'password.min' => __('auth.password.min'),
            'password.confirmed' => __('auth.password.confirmed')
        ]);

        if ($validator->fails())
        {
            return back()->withErrors($validator);
        }

        $status = Password::reset($inputData, function (User $user, string $password) {
            $user->forceFill([
                'password' => $password
            ]);

            $user->save();
            event(new PasswordReset($user));
        });

        return $status === Password::PASSWORD_RESET
            ? redirect()->route('login')->with('status', $status)
            : back()->withErrors(['email' => [$status]]);
    }

    /**
     * @return RedirectResponse
     */
    public function logout() : RedirectResponse
    {
        Auth::logout();
        return redirect()->intended(route('login'));
    }
}
