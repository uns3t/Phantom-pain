
功能分析：

1. 需要在首页随机展示一些正能量（负能量）的话，然后这些话可以在其他页面添加。并且展示语录的时候要用非常艺术感的展现手法，至少自己要看的顺眼。

2. 因为认识的朋友好像也挺感兴趣的，所以还是需要用户管理。不过如果没有用户管理，那自己写的骚话也会很羞耻的被其他人看到了。

3. 便签功能：这个功能不会加入已完成未完成这种无聊的东西，这个功能其实就是一个日记功能。将我的骚话从技术博客中抽离出来。让博客更加纯净

    

架构分析:

有用户管理，那么必然需要登陆鉴权。redux必上，react-router不用多说。想试试nextjs服务器渲染。后端eggjs和koa二选一，数据库mongodb。

页面分析:

1. 首页：包括语录展示，登陆注册的功能
2. 便签列表页面：展示所有便签
3. 便签详细：如果便签类容足够多，那么便签列表就没办法展示所有内容，那么就需要一个单独的页面进行展示
4. 添加骚话的功能，考虑是每个用户都能参与还是，只能admin进行添加
5. admin页面，对首屏语录集进行管理，也可以查看所有用户的注册信息。不提供admin查看其他用户的便签功能

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
