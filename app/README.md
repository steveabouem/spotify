# MY SPOTIFY

## Overview

This is a quick front end layout for a spotify search application. It allows the user to log in using his Spotify profile information, perform artist search, and view said artist's various albums. 

## Setup

It couldn't be simpler:)

1. Clone/download this repo

2. Create your own Spotify Api **client-id** and **client-secret** [here](https://developer.spotify.com/dashboard/) 

3. Create /src/secrets/index.js, in which you will copy the following:
```index.js
export const clientSecret = "6581bfc3b4a34a698df7855b146f641c", 
client_id = "YOUR CLIENT ID",
client_secret = "YOUR CLIENT SECRET";
```
4. cd into *app* and install all dependencies ``npm i

5. Start the application ``npm start

6. Enjoy

## Preview

## Notes
Beware of the cache. Your session's token expires after a period of time. If ever you get an error message while login, it most likely is due to the expired token kept in cache. Simply erase cache from browser history, or even better, navigate incognito.