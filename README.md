# Movie App

The Movie App is a web application built with Node.js, Express.js, EJS, and MongoDB. It allows users to list movies, add new movies, edit existing movies, delete movies, and log every request to a log file using middleware.

## Video
Watch a video demonstration of the Movie App to see its features in action:

https://github.com/abdallagaber/movie-app/assets/48131968/b48a74d8-2392-4791-97d5-c08e689e673c



## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Routes](#routes)
- [Middleware](#middleware)
- [Database](#database)
- [Frontend](#frontend)
- [Styling](#styling)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you can run the Movie App, make sure you have the following prerequisites installed on your system:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/abdallagaber/movie-app.git
   ```

2. Change to the project directory:

   ```bash
   cd movie-app
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and set the following environment variables:

   ```
   PORT=3000
   MONGODB_URI=your-mongodb-uri
   ```

   Replace `your-mongodb-uri` with your MongoDB connection URI.

5. Start the application:

   ```bash
   npm start
   ```

   The Movie App will be accessible at `http://localhost:3000` by default.

## Usage

- Access the Movie App in your web browser at `http://localhost:3000`.

- Use the navigation menu to list movies, add new movies, edit existing movies, and delete movies.


## Project Structure

The Movie App project structure is organized as follows:

- `public/` - Stores static assets like CSS.
- `routes/` - Defines the application's routes and controllers.
- `models/` - contains files that define the structure and behavior of data models used to interact with a database.
- `views/` - Contains the EJS templates for rendering HTML.
- `package.json` - Defines project dependencies and scripts.
- `app.js` - The main entry point of the application.

## Routes

1. **List All Movies**
    - **URL:** `/`
    - **HTTP Method:** GET
    - **Description:** Displays a list of all movies.

2. **Add New Movie Form**
    - **URL:** `/add`
    - **HTTP Method:** GET
    - **Description:** Presents a form for adding a new movie with details like title, genre, year, and rating.

3. **Save New Movie**
    - **URL:** `/`
    - **HTTP Method:** POST
    - **Description:** Handles the submission of the "Add New Movie" form and creates a new movie record.

4. **Edit Movie Form**
    - **URL:** `/edit/:id`
    - **HTTP Method:** GET
    - **Description:** Displays an edit form for modifying an existing movie's details.

5. **Update Movie**
    - **URL:** `/edit/:id`
    - **HTTP Method:** PUT
    - **Description:** Handles the submission of the "Edit Movie" form and updates the movie's data.

6. **Delete Movie**
    - **URL:** `/:id`
    - **HTTP Method:** DELETE
    - **Description:** Allows users to delete a specific movie from the database.

## Middleware

Middleware is used for logging requests to a log file.

## Database

The Movie App uses MongoDB for database storage. Mongoose is used as the ODM (Object-Document Mapping) library to interact with MongoDB. The database schema for movies is defined in `models/movie.js`.

## Frontend

The frontend of the Movie App is built using EJS templates, allowing dynamic rendering of HTML pages. The views are located in the `views/` directory.

## Styling

Styling is applied using CSS, and the stylesheet is located in the `public/css` directory. You can customize the styles as needed.


## Contributing

Contributions are welcome! If you would like to contribute to the Movie App project, please fork the repository, make your changes, and submit a pull request.


