# Secret Escapes Take Home Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Deploy: https://bucolic-cupcake-51ed4d.netlify.app/

## ENV (important!)

You will need to add and .env file to run locally. Check `.env.example`.

```
REACT_APP_ENDPOINT={{ ENDPOINT_URL_HERE }}
```

You will then be able to run the app by running the scripts below.

## Available Scripts

As usual, install the packages with

### `npm install`

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Assumptions made

### Results to show

The task says:

```
Search results should show the total number of results
Search results should only include the first 10 sales in the list
```

This seems inconsistent, so I have taken this to mean that the initial results page should show (up to) 10 results, but have included pagination so the user can see the rest. If this is not needed, then the pagination component can easily be removed.

### Empty searches

Empty searches work, and return what the API returns - unfiltered results.

## Possible improvements

### Styling

This has been kept very basic using tailwind just to add a bit of layout. This could be improved considerably, but isn't part of this task.

### Tests

There are no unit tests, but none were required as part of this task.

### Error handling

The error handing is pretty basic. Just spits out a title with the error text. Would be better if we had different handling for different errors, with better information for the user, and logging for us, but was out of the scope of the task.

### SSR

SSR would be good. Could use something like NextJS to have static generation for main pages, then SSR or ISR for search results.


### Meta

Page titles, meta descriptions, other meta data and structured data on the page have not been included as out of scope of this task.

### Images

Images are not optimised! We should be optimising them to be the right size they are loaded at. Out of scope of this task.
