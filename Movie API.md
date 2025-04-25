#Movie API
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

