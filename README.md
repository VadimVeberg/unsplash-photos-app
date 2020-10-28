# [Unsplash Photos App](https://unsplash-photos.ru/)
This is my diploma work on Skillbox course "JavaScript".

## React, Redux and React-router
That's the base of my app. No class components, **React hooks** everywhere instead. Redux store combined by few reducers accroding to each page of app and one global reducer for user authentication. Some actions are global, some are local for current page, see more at [actions](https://github.com/VadimVeberg/unsplash-photos-app/tree/master/src/actions), [reducers](https://github.com/VadimVeberg/unsplash-photos-app/tree/master/g/reducers), [store](https://github.com/VadimVeberg/unsplash-photos-app/tree/master/src/store). Routing between pages is orginized with react-router.

## Feed
I've made infinity feed that updates before you scroll down. If you have normal internet connection and don't scroll feed very fast, you will not see loading spinner below. This component also save it scroll position in store before you switching to big photo page, so when you go back to feed you will appear exactly in place where you have been. See how I did that in [feed-page.js](https://github.com/VadimVeberg/unsplash-photos-app/blob/master/src/components/pages/feed-page.js), [feed-app-content.js](https://github.com/VadimVeberg/unsplash-photos-app/blob/master/src/components/feed-app-content/feed-app-content.js).

## Unsplash API
Unsplash-photos-app get photos from unsplash.com using unsplash API. I also have made OAuth, so registered users can like photos. See [auth-page.js](https://github.com/VadimVeberg/unsplash-photos-app/blob/master/src/components/pages/auth-page.js), [userActions.js](https://github.com/VadimVeberg/unsplash-photos-app/blob/master/src/actions/UserActions.js). App token stores in localStorage and sets everytime when you refreshing or opening any page of app. See [GlobalActions.js](https://github.com/VadimVeberg/unsplash-photos-app/blob/master/src/actions/GlobalActions.js).

## Patterns
For combining a lot of React components together in one app I used React patterns. For example, **Array as children** [feed-page.js](https://github.com/VadimVeberg/unsplash-photos-app/blob/master/src/components/pages/feed-page.js) (line 59), **Function as Children** [feed-page.js](https://github.com/VadimVeberg/unsplash-photos-app/blob/master/src/components/pages/feed-page.js) (line 106), **Render Callback** [feed-item.js](https://github.com/VadimVeberg/unsplash-photos-app/blob/master/src/components/feed-item/feed-item.js) (line 28) etc.

## Styled Components
I've used Styled-components library to create styles dynamically depending of current redux store. So you can find [logActionButton](https://github.com/VadimVeberg/unsplash-photos-app/blob/master/src/components/logActionButton/logActionButton.js) component that changes styles themself by value of property 'type'. And for example if you have bad internet connection, photos in feed will load in pre-render colored containers. Height of containers calculating dynamically from server response. 

## Adaptive
Layout of this app is fully adaptive. I used some components from **Reactstrap** library to make this.

## Error handling
If you have bad internet connection, my app will show you error message and suggest you to try load content again. I've made that using "error" properties in redux store and conditional rendering. 
<img src="https://vadimveberg.ru/assets/img/git_readme/Error_handling.png" width="550px" alt="Error handling">

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
