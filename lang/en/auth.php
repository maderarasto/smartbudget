<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    'failed' => 'These credentials do not match our records.',

    'rules' => [
        'name' => [
            'required' => 'A name is required',
            'max' => 'A name should be a maximum 255 characters long'
        ],

        'email' => [
            'required' => 'An email is required',
            'email' => 'An email has to be in email format',
            'unique' => 'This email is already in our records',
            'exists' => 'This email does not exist in our records'
        ],

        'password' => [
            'required' => 'A password is required',
            'min' => 'A password should be at least 8 characters long',
            'confirmed' => 'A confirmation password does not match'
        ],
    ],

    'notification' => [
        'register' => [
            'title' => 'Registration succeed',
            'text' => 'Your account has been successfully created and now you can sign in.'
        ],

        'recover_password' => [
            'title' => 'Sending an email succeed',
            'text' => 'Email with URL for resetting your password has been send successfully.'
        ],

        'reset_password' => [
            'title' => 'Password change succeed',
            'text' => 'Your password has been successfully changed and now you can sign in.'
        ]
    ]
];
