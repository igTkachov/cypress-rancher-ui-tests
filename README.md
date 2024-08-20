# Rancher and Cypress Tests for MacOS

## Running Rancher via Docker

**Run the Rancher server using Docker**:
```bash
   docker run -d --name rancher-server --privileged -p 80:80 -p 443:443 rancher/rancher:latest
```

## Create a password for logging into the Rancher UI

**Find the container id**
```bash
   docker ps
```
**Retrieve the generated password**
```bash
   docker logs <container-id> 2>&1 | grep "Bootstrap Password:"
```
**Copy the password**
**Access the Rancher UI**
Open https://localhost/ in your browser
**Change the password**
Use the retrieved password to log in. Once logged in change the password to Test!2345678, which is used in the tests to avoid making changes in the repository.

## Installing Cypress

**Install Cypress**
```bash
   npm install cypress --save-dev
```

## Cloning the Repository
```bash
   git clone https://github.com/igTkachov/cypress-rancher-ui-tests
```

## Running Tests

**Navigate to the root directory and run the tests in headless mode**
```bash
cd cypress-rancher-ui-tests
npx cypress run --headless
```
**Running tests via Cypress UI**
```bash
   npx cypress open
```
This will open the Cypress Test Runner UI. From there, you can select and run the tests interactively
