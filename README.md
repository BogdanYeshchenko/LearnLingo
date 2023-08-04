# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

"LearnLingo" is an application of a company that provides online language learning services. The main purpose of the application is to help users find and choose a suitable teacher for their educational needs. The layout is responsive, covering the range from 320px to 1440px, that is, the pages automatically adapt to different device screen sizes.

The structure of the application consists of three pages:

Home page:
On this page, users can familiarize themselves with the benefits of the company and go to the main page of the application.

"Teachers" page:
On this page, users will be able to view the list of teachers available for training. Users can filter teachers by the language of instruction, the level of knowledge of students, and the price per lesson hour. By default, only 4 cards with teachers are displayed on the page, but users can load more cards by clicking on the "Load more" button. Users can also add teachers to their "favorites" by clicking on the button with the "heart" icon. If the user is not authorized, they will be shown a warning that this feature is only available to authorized users.

Private page "Favorites":
This page is only available to authorized users. On it, they can view all the teachers they have added to their "favorites". The page is styled similarly to the "Teachers" page.

### Technical performance:

#### Authorization:

The app will use Firebase for registration, login, current user data, and logout.

#### Forms:

Forms for registration, login and booking a trial class, all fields are mandatory and must be filled out.

#### Database:

Firebase Realtime Database is used to store information about teachers. Information about instructors includes their first name, last name, languages, skill levels, rating, reviews, hourly price, number of classes, avatar URL, class information, terms and experience.

#### Modal windows:

Windows for registration, login, reservation and warning about unauthorized access are implemented as modal windows. They will close when you click on the "cross", on a darkened background or when you press the Esc key.

#### Functionality of the selected:

Authorized users will be able to add and remove teachers to/from their "favorites". The heart button will change color when a teacher is added or removed. Information about the selected teacher will remain even if the user refreshes the page.

#### Functionality "Read more":

Users will be able to reveal additional information about the teacher and view feedback from his students using the "Read more" button.

#### Routing:

The React Router library will be used to navigate between pages.

#### Filtration:

The ability to filter teachers by teaching language, level of knowledge and price per hour will be added.

The project will be deployed on third-party hosting, and the code will be in a GitHub repository along with a README.md containing the project description, core technologies, layout, and terms of reference.

([Link to the mockup from Figma](https://www.figma.com/file/dewf5jVviSTuWMMyU3d8Mc/%D0%9F%D0%B5%D1%82-%D0%BF%D1%80%D0%BE%D1%94%D0%BA%D1%82-%D0%B4%D0%BB%D1%8F-%D0%9A%D0%A6?type=design&node-id=0-1&mode=design&t=jCmjSs9PeOjObYSc-0))

([Link to the technical task](https://docs.google.com/document/d/1ZB_MFgnnJj7t7OXtv5hESSwY6xRgVoACZKzgZczWc3Y/edit))

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
