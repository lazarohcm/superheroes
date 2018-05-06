# Superheroes Database
A Superhero Database were you can store information about the superheroes that you like

## Server Requiriments
 * PHP >= 7.1.3
 * OpenSSL PHP Extension
 * PDO PHP Extension
 * Mbstring PHP Extension

## Installing
Got to the folder of the project and inside the `api` folder, follow those steps: 

Before anything, make sure you copy the contents from the `.env.example` to a file named `.env` and then place all information about your database connection on this file

After that, you can run the following commands to start the API

```sh
$ composer install
$ php artisan key:generate
$ php artisan migrate
$ php artisan db:seed
$ php -S localhost:8000 -t public
```
The API is now running on the address http://localhost:8000 of your local server

## Running
*Assuming that you already have npm installed (If not, you can check it [here](https://www.npmjs.com/get-npm))*.

Now run:
```
npm install -g @angular/cli
```

Got to the folder of the project and inside the `app` folder, follow those steps:

On your terminal, run: 
```
npm install
```

And finally, run:
```
ng serve
```

That is it, if you visit the addres `http://localhost:4200/`, you should now be seeing the application home page



## Assumptions
* On the technical requirements, there was nothing about using a javascript framework, so I decided to use Lumen as API and Angular for the front, 
as I feel more comfortable using this strategy (I really hope it is not a problem).

* To create a hero, at least a nickname should be provided (Some heroes might not have a name, origin or known powers)
* Also at least one image should be provided
    
