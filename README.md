# Superheroes Database
A Superhero Database were you can store information about the superheroes that you like

## Server Requiriments
 * PHP >= 7.1.3
 * OpenSSL PHP Extension
 * PDO PHP Extension
 * Mbstring PHP Extension

## Installing
Before anything, make sure you copy the contents from the `.env.example` to a file named `.env` and then palce the informations about your database connection on this file

After that, you can run the following commands to start the API

```sh
$ composer install
$ php artisan key:generate
$ php artisan migrate
$ php artisan db:seed
$ php -S localhost:8000 -t public
```
The API is now running on the address http://localhost:8000 of your local server


## Assumptions
* On the technical requirements, there was nothing about using a javascript framework, so I decided to use Lumen as API and Angular for the front, 
as I feel more comfortable using this strategy (I really hope it is not a problem).

* To create a hero, at least a nickname should be provided (Some heroes might not have a name, origin or known powers)
    
