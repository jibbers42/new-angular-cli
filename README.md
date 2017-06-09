# NewAngularCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# How to use this project

(This section is from <https://github.com/NathanWalker/angular-seed-advanced>.)

### Setup

*NOTE*: This project was created with: `ng new new-angular-cli --skip-install --routing`

*NOTE*: The following should be done first before you start making any changes and building out your project.

1. `git clone https://github.com/jibbers42/new-angular-cli.git [your-project-name]`
2. `cd [your-project-name]`
3. `git remote set-url origin [your-project-git-repo]` - This will setup `origin` properly.
4. `git remote add upstream https://github.com/jibbers42/new-angular-cli.git` - This will setup `upstream` properly to merge in upstream changes later.
5. `git push` - Go ahead and push up the initial project.
6. Now you have `git` setup and ready to develop your app as well as merge in upstream changes in the future.

### Merging latest upstream changes
1. Update global angular cli to same version as in this project - <https://github.com/angular/angular-cli#updating-angular-cli>
1. `git fetch upstream` - This will fetch latest `upstream`.
2. `git merge upstream/master` - This will merge in upstream changes.
3. Handle any conflicts to get latest upstream into your app.
1. Optional: Delete `node_modules`
1. `npm update`
4. Continue building your app.

You can read more about [syncing a fork here](https://help.github.com/articles/syncing-a-fork/).

### Upadating this project
1. Update global angular cli - <https://github.com/angular/angular-cli#updating-angular-cli>
1. `ng new new-angular-cli --skip-install --routing --directory ngtemp` - Directory `ngtemp` should not exist before running this command.
1. Add this whole section to the README in `ngtemp`.
1. Delete everything in `new-angular-cli` *except* `.git` directory.
1. Copy everything in `ngtemp` to `new-angular-cli` *except* the `.git` directory.
1. git add and commit and push in `new-angular-cli`.
