# Upraised quiz web application
##### _developed by: Piyush Negi_
#
#

[Upraised Quiz application](https://negibaba.github.io/quiz-app/) is a simple online quiz application with internal scoring system.

## Features

- Designed and developed with Mobile first approach.
- Uses mock API to fetch and list the multiple choice questions.

## Technologies

This web application uses these different technologies:

- [ReactJS](https://reactjs.org) - Lightweight and Fast Front end library.
- [MaterialUI](https://mui.com/) - Front end styling library
- [Redux](https://redux.js.org/) - A Predictable State Container for JS Apps
- [Mock API](https://mockapi.io/projects) - An online platform that serves different endpoints and custom data.
- [VS Code](https://code.visualstudio.com) - One of the best code editors.

## Local Development


Clone the repo using the link or GitHub CLI

Install the dependencies and devDependencies and start the local server and head to the given server link.

```sh
cd quiz-app
npm i
npm start
```

#### For production environments...

Since the application is deployed in github pages the developer needs to look into the custom scripts *predeploy* and *deploy* to serve their own custom purposes.

Add the following scripts to the package.json(if not present)

```sh
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```

and then deploy using this command

```sh
npm run deploy
```
