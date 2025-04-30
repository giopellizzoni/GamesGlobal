# Movie API

This document outlines the task of creating a REST API to list movies stored in a database and then displaying this data in a React application using Material-UI (MUI).

To keep this task simple, we will require the following to be developed & designed:

1. An Asp.Net API with a single endpoint that allows users to get a list movies stored in a database. For now, you can load the file from Disk.
2. A React UI frontend that loads the same movie data and primarily focuses on rendering the movie data. It should include the following features: Genre filtering & Title search functionality.
3. An architectural design showing the AWS services you will use to achieve this.

Please let me know if you need any further assistance or have any additional requirements.

## Data

Below is the JSON representation of the movie data:

```json
{
  "movies": [
    {
      "title": "The Shawshank Redemption",
      "year": 1994,
      "genre": ["Crime", "Drama"],
      "director": "Frank Darabont",
      "actors": ["Tim Robbins", "Morgan Freeman"],
      "rating": 9.3
    },
    {
      "title": "The Godfather",
      "year": 1972,
      "genre": ["Crime", "Drama"],
      "director": "Francis Ford Coppola",
      "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
      "rating": 9.2
    },
    {
      "title": "The Dark Knight",
      "year": 2008,
      "genre": ["Action", "Crime", "Drama"],
      "director": "Christopher Nolan",
      "actors": ["Christian Bale", "Heath Ledger", "Gary Oldman"],
      "rating": 9.0
    },
    {
      "title": "Inception",
      "year": 2010,
      "genre": ["Action", "Adventure", "Sci-Fi"],
      "director": "Christopher Nolan",
      "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
      "rating": 8.8
    }
  ]
}
```

## Project Structure

The repository contains the following projects:

1. **Movie API (Backend)**:

- A RESTful API built with ASP.NET Core.
- Provides a single endpoint to fetch movie data.
- Movie data is loaded from a JSON file stored on disk.

2. **Movie UI (Frontend)**:

- A React application using Material-UI (MUI) for styling.
- Displays the movie data fetched from the API.
- Includes features for filtering movies by genre and searching by title.

## Setup Instructions

### Backend (Movie API)

1. Navigate to the `backend/Movie.Service/src/MovieService.API` project directory.
2. Ensure the JSON file containing movie data is placed in the appropriate directory as specified in the code.
3. Run the command on console `dotnet run`.

### Frontend (Movie UI)

1. Navigate to the `frontend/movie-client` project directory.
2. Install dependencies using:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. The application will be available at on terminal.

## AWS Architecture Design

To deploy this application on AWS, the following services can be used:

![aws diagram](./Movies%20List.png)

## Future Enhancements

- Implement additional filtering and sorting options.
- Implementing pagination
- Deploy the application to AWS for production use.
- Write unit and integration tests for both the API and UI.

## Contact

For any questions or assistance, feel free to reach out.
