# Harry Potter Movies API

This is a simple API built with Node.js and Fastify, providing information about the Harry Potter movies. 

## Features

- Fetch a list of all Harry Potter movies
- Retrieve a movie by ID

## Technologies Used

- [Fastify](https://www.fastify.io/): A highly performant web framework for Node.js
- [TypeScript](https://www.typescriptlang.org/): Superset of JavaScript for type safety and better tooling
- [@fastify/cors](https://github.com/fastify/fastify-cors): CORS support for the API
- [Node.js](https://nodejs.org/): JavaScript runtime for building server-side applications.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14+ recommended)
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/lumab23/hp-movies-api.git
cd hp-movies-api
```

### Install Dependencies
```sh
npm install
```
OR
```sh
yarn install
```

## Running the Server

### Start the development server
```sh
npm run start:dev
```
OR
```sh
yarn start:dev
```

### Start the server with file watching
```sh
npm run start:watch
```
OR
```sh
yarn start:watch
```

### Build and start the production server
```sh
npm run start:dist
```
OR
```sh
yarn start:dist
```

## API Endpoints

### Get All Movies
**Endpoint:** `GET /api/movies`

**Response:**
```json
{
    "movies": [
        {
            "id": 1,
            "title": "Harry Potter and the Sorcerer’s Stone",
            "year": 2001,
            "runtime": 152,
            "director": "Chris Columbus",
            "writers": ["Steve Kloves"],
            "synopsis": "On his 11th birthday, Harry Potter learns that he is a wizard and is invited to study at Hogwarts School of Witchcraft and Wizardry, changing his life forever.",
            "based_on": "Harry Potter and the Sorcerer’s Stone by J.K. Rowling",
            "genres": ["Fantasy", "Adventure"],
            "rating": 7.7,
            "main_cast": [
                { "actor": "Daniel Radcliffe", "character": "Harry Potter" },
                { "actor": "Emma Watson", "character": "Hermione Granger" },
                { "actor": "Rupert Grint", "character": "Ron Weasley" }
            ],
            "release_date": "2001-11-04",
            "budget": "$125 million",
            "production_companies": ["Warner Bros.", "Heyday Films", "1492 Pictures"]
        },
        ...
    ]
}
```

### Get Movie by ID
**Endpoint:** `GET /api/movies/:id`

**Response (if found):**
```json
{
    "movie": {
        "id": 1,
        "title": "Harry Potter and the Sorcerer’s Stone",
        "year": 2001,
        "runtime": 152,
        "director": "Chris Columbus",
        "writers": ["Steve Kloves"],
        "synopsis": "On his 11th birthday, Harry Potter learns that he is a wizard and is invited to study at Hogwarts School of Witchcraft and Wizardry, changing his life forever.",
        "based_on": "Harry Potter and the Sorcerer’s Stone by J.K. Rowling",
        "genres": ["Fantasy", "Adventure"],
        "rating": 7.7,
        "main_cast": [
            { "actor": "Daniel Radcliffe", "character": "Harry Potter" },
            { "actor": "Emma Watson", "character": "Hermione Granger" },
            { "actor": "Rupert Grint", "character": "Ron Weasley" }
        ],
        "release_date": "2001-11-04",
        "budget": "$125 million",
        "production_companies": ["Warner Bros.", "Heyday Films", "1492 Pictures"]
    }
}
```

**Response (if not found):**
```json
{
    "message": "Not Found."
}
```

## Environment Variables
You can specify the port number by creating a `.env` file and adding:
```env
PORT=3002
```
