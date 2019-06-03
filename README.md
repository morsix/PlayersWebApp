# PlayersWebApp Demo

You can see the live demo of the application [live demo](http://tight-knowledge.surge.sh/)

This project is hosted on [surge](https://surge.sh/)
The API this application consumes is hosted on [Azure](https://playersapi20190603104754.azurewebsites.net/api/values) (pointing to the values controller) 

# PlayersWebApp 
This is an Angular 7 projects which consumes a .Net Core WebApi [PlayersAPI](https://github.com/morsix/PlayersAPI).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

Third-party libraries:

- Bootstrap 4
- Fontawesome 4


# How to run locally
- install npm
- install [Angular CLI](https://github.com/angular/angular-cli) globally
- clone this repo
- run 'npm install'
- run 'ng serve'

# Important
The default port for Angular is :4200 and the dafult port for the .NET CORE API is :44316. If you're using diffrent ports make sure to configure both the applications like this:

- change the API_URL in Angular ('players.service.ts') to match the port of the API

```
private readonly API_URL = 'https://localhost:44316/api/';

```

- change the link in Startup.cs to match the port angular is running on

```
builder => builder.WithOrigins("http://localhost:4200")
                                .AllowAnyHeader()
                                .AllowAnyMethod());
```





