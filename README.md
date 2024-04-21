# Example of kind of Hexagonal architecture for a react app (Just for experimentation purposes!)

A simple data model and contollers used for a React and console based apps.

## Usage (react version)

### Model and controllers
```
npm install
npm test
```

### React UI
```
cd ./src/apps/react-ui
npm install
npm test
npm start
```

### CLI
```
cd ./src/apps/terminal
npm install
mkdir -p test_data
touch test_data/group.json
npm start -- add --name "Student One" --file test_data/group.json
```