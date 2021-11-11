# Yarn workspaces for React + NestJs (Typescript/ExpressJs)
A simple attempt to being able to share code between backend and frontend.
The main goal is to have class-validator to validate data on the backend and use the same validation on the frontend

# Install 
```
yarn 
```

# Run the React App (localhost:3000)
```
yarn web
```

# Run the Nest App (localhost:4815)
```
yarn backend
```

# Common
Common doesn't need to be run.
When running the web app, a custom config via craco takes care of that.
While running the nest js app, yarn backend takes care of running tsc -watch on the common project.

### Known Issues 
Obviously there should be a way of building the common lib while running the backend without having to use two commands.

### TODO
Add React Native app

### Author 
Jesus Yepes 
jesus@jesusyepes.com 

