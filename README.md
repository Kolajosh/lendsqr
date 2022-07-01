# Lendsqr Assessment

This is an implementation of an assessment to demonstrate my reactjs and scss skills.

The design was gotten from here:
https://www.figma.com/file/XWksVnULi4Xpvu8xlDPuA4/Frontend-Testing-(Copy)?node-id=5530%3A0

The task is to create a page which lists all the users from a JSON file of 500 records, and read each user details on demand.
It should look like this:

![Login](https://i.postimg.cc/k4FRRD6Z/image.png)
![UsersPage](https://i.postimg.cc/QtbVxPvZ/image.png)
![User Detail](https://i.postimg.cc/05VrTTpp/image.png)

## Styling

A key criteria for this exercise is how accurately I replicated the designs.
I accessed the Figma file with all the information I needed at https://www.figma.com/file/jiLyWIuduQbsIPlQxTLYnC/Frontend-Testing-(Copy)?node-id=5530%3A0.

I used plain CSS with styled components in React to accomplish this exercise.

## Functionality

The functionality was implemented using React.
Ideally, I supposed to use TypeScript, but JavaScript is fine too.

The areas that are implemented are:

- Login:
  - Clicking the login button navigates to the `/users` route.
  - There were no backend functionality provided, so email and password authentication were not functional
- Users listing:
  - 500 records of users were fetched from a JSON data.
- Pagination:
  - Pagination was implemented.
  - Only the set amount of record to show per page was visible, this was achieved by slicing the array of users per the set amount of users to be displayed on the table.
  - I also implemented ppages navigation on the table.
- User Details
  - For a selected/single user, when the `View Details` button is clicked, a new page is navigated to that reveals more information about that user.

Other notes:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
