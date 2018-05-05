# Superheroes Database
    A Superhero Database were you can store information about the superheroes that you like

## Server Requiriments
    * PHP >= 7.1.3
    * OpenSSL PHP Extension
    * PDO PHP Extension
    * Mbstring PHP Extension

## Installing
    Before anything, make sure you copy the contents from the `.env.example` to a file named `.evn` and then palce the informations about your database connection on this file

    After that, you can run the following commands to start the API

    ```sh
        $ composer install
        $ php artisan key:generate
        $ php artisan migrate
        $ php artisan db:seed
        $ php -S localhost:8000 -t public
    ```
