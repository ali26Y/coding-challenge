
# Coding Challenge

### Prerequisites
* You'll need to have [node >= 10.16.3](https://nodejs.org/en/) installed in your system.

### To run

* install the dependencies:

```
yarn
```

* Run development server:

```
yarn dev
```

Open the web browser to `http://localhost:8080/`

## To test
To run unit tests:

```
yarn test
```

### To build the production package
```
yarn build
```

### To run the production package
```
yarn start
```

### Browser Support

Application has been tested to be working fine on latest versions of

- Google Chrome
- Mozilla Firefox
- Apple Safari


## Tech Stack


### Main Libraries


1. **React**: Library of choice.
2. **Webpack**: For bundling and productionising.
3. **emotion JS**: For theming and styling (css in JS).
4. **wouter**: A very small routing library less than 1.5kb



## Highlights


> Only functional components, no class based approach.

> Custom React Hook used for fetching Search API data.

> CSS in JS approach. Used CSS global variables for theming.



## What's not been covered / What can be improved


Since the scope of project wasn't too elaborated, have tried to cover basic stuff while being cautious of time.

- Test coverage for the application could be improved.

- The footer and header styles could be improved for mobile use. One reason for this was also the lack of mobile wireframes in the brief.

- Containerising the app at this stage would only have been an overkill.

- Linting could be improved by adding eslint, or prettier.

