The mongoose connection is split into a separate file so that we don't have to set our Promises to ES6 promises in each of our models.

## Config options ##
There is a config file in `config/index.js` that lists some environmental variables.  All of them have what I would consider somewhat sane defaults.

* DB_URL - This is the host name of the database.  This defaults to `localhost`.
* DB_NAME - The name of the mongo db.  This defaults to `workast`.
* API_KEY - The API key that we're going to compare against for all incoming requests.  This defaults to `ABC123`.
* PORT - the port that the server will actually run on.  This defaults to 8080.

## Starting the server
1.  You'll need to have mongo running.
2.  Set the environmental variables above, assuming the defaults don't work for you.
3.  Run `yarn install` to install the dependencies.
4.  If you want pre-loaded data, run `yarn load-fixture-data`
4.  Start the server in dev mode by running `yarn dev` or in production mode by running `yarn start`

## Authorization ##
All endpoints require an API key inside of the `authorization` header field.  An example via curl might be

```
curl --request GET \
  --url http://localhost:8080/article/5a33ed485b0befd065c19cce \
  --header 'authorization: ABC123'
```

## Endpoints ##
All fields are required unless otherwise specified.

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

`userId` must be a valid userId.

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
  "_id": "5a341784ba9227db32ef965c",
  "userId": "5a341784ba9227db32ef965b",
  "title": "Article 0",
  "text": "Text for article 0",
  "__v": 0,
  "tags": [
    "article",
    "tech",
    "workast",
    "slack",
    "discord",
    "chat",
    "hipchat",
    "spark"
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
```
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
```

#### GET /articles ####
Gets a list of all articles

#### response ####
```
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
```

## Things to add or consider
* Testing could be more strenous.  There's not much testing, because there's no business logic other than CRUD which can be validated through mongoose.
* Usually we'd have a `Bearer` token in the `Authorization` header, but for now we're just sticking the normal token there.
* There is no validation of uniqueness on names or article titles.  It wasn't in the requirements, but if I was going to add it, I'd have it as some sort of validation in the controller, or as a pre-save hook in mongoose in the model.