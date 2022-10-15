[![Contributors][contributors-shield]][contributors-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/bjvalmaseda-dev/ce-api">
    <img src="docs/ce_logo.png" alt="Logo" height="80">
  </a>

  <h3 align="center">CE Task API</h3>

  <p align="center">
    An API for Cuban Engineer technical test (Middle Level)
    <br /> 
    <br />
    <a href="https://ce-api.up.railway.app/">View Demo</a>   
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is an API to support the application created for the React Developer technical test for Cuban Engineer. This permit save in a MongoDB all the task, this API support the following actions: 

* Create a task
* Update a task
* Delete a task

### Built With

* [![Node.js][node]][node-url]
* [![Express][express]][express-url]
* [![Docker][docker]][docker-url]



<!-- GETTING STARTED -->
## Getting Started

You can run this project on locally for testing

### Prerequisites

To run this API you need to hace installed:
* docker and docker-compose (*if not have a mongoDB instance*)
* node and yarn

### Installation

1. Clone the repo
   ```sh
   $ git clone https://github.com/bjvalmaseda-dev/ce-api   ```

2. Copy `.env.example` to `.env`
    ```sh
    $ cp .env.example .env
    ```
3. Edit `.env` and define your enviroments variables  

    `DB_USER`: User for MongoDB container

    `DB_PASSWORD`: Password for MongoDB container
    
    `MONGO_DB_URI`: URI for MongoDB connection
    
4. Setting up a MongoDB container (*skip if you have another MongoDB instace*)
   ```sh
   $ docker-compose up -d
   ```
5. Build the app and run
   ```sh
   $ yarn build && yarn start

*To watch change in any file you can run `yarn dev`*


## Testing

To run integrations test run:
```sh
$ yarn test
```
*To specific a test DATABASE you can use the environment variable `MONGO_DB_URI`*
*To make e2e test with the frontend you need to run the app in testing mode executing `yarn start:test`*



<!-- USAGE EXAMPLES -->
## Usage

To use the API you need to know the API endpoints

### API Reference

##### Get all tasks

```http
  GET /api/tasks
```

##### Create task

```http
  POST /api/items/
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `content` | `string` | **Required**. The text content for a task |

##### Update task

```http
  PUT /api/items/:id
```

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| `id`      | `string` | **id**. The id for the task to update             |
| `content` | `string` | **Required**. The text content for a task updated |

##### Delete task

```http
  DELETE /api/items/:id
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| `id`      | `string` | **id**. The id for the task to delete |






<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

Bárbaro Javier Valmaseda - [@bjvalmaseda](https://twitter.com/bjvalmaseda)

Project Link: [https://github.com/bjvalmaseda-dev](https://github.com/bjvalmaseda-dev/ce-api)



<!-- MARKDOWN LINKS & IMAGES -->

<!-- BADGES -->
[express]: https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white
[node]: https://img.shields.io/badge/Node%20JS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[docker]: https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white

<!-- IMAGES -->
[logo]: docs/ce_logo.png

<!-- LINKS -->
[docker-url]: https://www.docker.com/
[express-url]: https://expressjs.com/
[node-url]: https://nodejs.org/
