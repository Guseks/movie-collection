# Movie Collection App 
This application provides a way for the user to find new movies they might be interested in. It also enables the user to keep a list of movies that they have watched or want to watch. The application enables the user to find movies based on genre. The application uses the TMDB API.

## Installation and setup
The app just takes a couple of easy steps to setup. Before that make sure you have the following installed:
- Node
- Npm

To install dependencies run the following command:

```bash
npm install
```

After this the app can be run in development mode by running:
```bash
npm run dev
```

### Connecting to backend and external API
- Make sure to provide the address to the backend as a environment variable.
- The movie data is gathered from the TMDB API.
  - Create an account on their website. There you can get a API key. 
- Use the following environment variables to access the movie info: 
  - VITE_BASE_API_URL = https://api.themoviedb.org/3/
  - VITE_IMAGE_URL = https://image.tmdb.org/t/p/w500

### Deployment
The app can be deployed to a desired cloud provider. I used vercel for my deployment of my frontend but feel free to use another cloud provider.

## Features
- Discover movies by genre
- Store interesting movies in a list for future viewing
- Select multiple genres to show movies containing either one of the genres selected. 

## Design
The application consists of three main pages. 
- Home page
- Discover page
- My Movies Page

### Home

- Home page which shows a list of movies from romance and drama. The layout is dependent on the screen size. 
  - Either a movie carousel is shown or a list of the movies
- The movies are displayed using their poster together with the movie information to create movie cards. 
### Discover

- A menu for selecting genres and other options.
- A display area for the movies that are returned from the API.
  
### My Movies
Shows the list of movies received from the backend. The movies are storied in a database, which is handled by the backend. 
