<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use \App\Http\Controllers\AuthController;
use \App\Http\Controllers\IndexController;
use \App\Http\Controllers\FinancesController;

Route::get('/', [ IndexController::class, 'index']);

Route::group([
    'prefix' => 'auth',
], function () {
    Route::group(['middleware' => 'guest'], function () {
        Route::get('/login', [AuthController::class, 'loginForm'])->name('login');
        Route::post('/login', [AuthController::class, 'login'])->name('login.submit');
        Route::get('/register', [AuthController::class, 'registerForm'])->name('register');
        Route::post('/register', [AuthController::class, 'register'])->name('register.submit');
        Route::get('/recover-password', [AuthController::class, 'recoverPasswordForm'])->name('recover-password');
        Route::post('/recover-password', [AuthController::class, 'recoverPassword'])->name('recover-password.submit');
    });

    Route::group(['middleware' => 'auth'], function () {
        Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
    });
});

Route::group([
    'prefix' => 'finances',
    'as' => 'finances.'
], function () {
    Route::get('/', [FinancesController::class, 'index'])->name('index');
});
