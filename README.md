There is a config file in `config/index.js` that lists some environmental variables.  All of them have what I would consider somewhat sane defaults.

The mongoose connection is split into a separate file so that we don't have to set our Promises to ES6 promises in each of our models.

You can start the server with nodemon by running `yarn dev`.

## Endpoints ##
All fields are required unless otherwise specified

### POST /user ###
Creates a new user.

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

### POST /article ###
Creates a new article.

`tags` is optional.

#### request ####
```
{
	"text": "new article text",
	"title": "new artice title",
	"userId": "5a3350f12822b4cb8bfe1c77",
	"tags": ["awesome", "article", "coding"]
}
```
#### response ####
```
{
	"__v": 0,
	"text": "new article text",
	"title": "new artice title",
	"userId": "5a3350f12822b4cb8bfe1c77",
	"_id": "5a3351312822b4cb8bfe1c7b",
	"tags": [
		"awesome",
		"article",
		"coding"
	]
}
```

### PUT /article/:id ###
Edits an article

#### request ####
```
{
	"text": "new article text",
	"title": "new artice title",
	"userId": "5a3350f12822b4cb8bfe1c77",
	"tags": ["awesome", "article", "coding"]
}
```
#### response ####
```
{
	"__v": 0,
	"text": "new article text",
	"title": "new artice title",
	"userId": "5a3350f12822b4cb8bfe1c77",
	"_id": "5a3351312822b4cb8bfe1c7b",
	"tags": [
		"awesome",
		"article",
		"coding"
	]
}
```

### DELETE /article/:id ###
Deletes an article

#### response ####
{ "deleted": ":id" }

### GET /article/tags/tag ###
Gets a list of articles by tag

#### response ####
[
  {
    "_id": "5a3350f72822b4cb8bfe1c78",
    "text": "new article text 6",
    "title": "new artice title",
    "userId": "5a3350f12822b4cb8bfe1c77",
    "__v": 0,
    "tags": [
      "awesome",
      "article",
      "coding"
    ]
  },
  {
    "_id": "5a3351012822b4cb8bfe1c79",
    "text": "new article text",
    "title": "new artice title",
    "userId": "5a3350f12822b4cb8bfe1c77",
    "__v": 0,
    "tags": [
      "awesome",
      "article",
      "coding"
    ]
  }
]

## Things to add or consider
* Testing could be more strenous.  There's not much testing, because there's no business logic other than CRUD which can be validated through mongoose.