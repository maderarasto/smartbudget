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

    'failed' => 'Tieto údaje sa nezhodujú s našimi záznamami.',

    'rules' => [
        'name' => [
            'required' => 'Meno je povinné',
            'max' => 'Meno by malo mať maximálne 255 znakov',
        ],

        'email' => [
            'required' => 'Email je povinný',
            'email' => 'E-mail musí byť vo formáte e-mailu',
            'unique' => 'Tento e-mail už existuje v našich záznamoch',
            'exists' => 'Tento e-mail neexistuje v našich záznamoch',
        ],

        'password' => [
            'required' => 'Heslo je povinné',
            'min' => 'Heslo by malo mať aspoň 8 znakov',
            'confirmed' => 'Potvrdzovacie heslo sa nezhoduje',
        ],
    ],

    'notification' => [
        'register' => [
            'title' => 'Registrácia bola úspešná',
            'text' => 'Váš účet bol úspešne vytvorený a teraz sa môžete prihlásiť.',
        ],

        'recover_password' => [
            'title' => 'Odoslanie e-mailu bolo úspešné',
            'text' => 'E-mail s URL na obnovenie hesla bol úspešne odoslaný.'
        ],

        'reset_password' => [
            'title' => 'Zmena hesla bola úspešná',
            'text' => 'Vaše heslo bolo úspešne zmenené a teraz sa môžete prihlásiť.'
        ]
    ]
];
