There is a config file in `config/index.js` that lists some environmental variables.  All of them have what I would consider somewhat sane defaults.

You can start the server with nodemon by running `yarn dev`.

## Endpoints ##

### POST /user ###
#### request ####
```
{
	"name": "shawn",
	"avatar": "https://i.imgur.com/hMVrRKv.png"
}
```
#### response ####
```
{
	"__v": 0,
	"name": "shawn",
	"avatar": "https://i.imgur.com/hMVrRKv.png",
	"_id": "5a3342d612681dc8fcf82187"
}
```