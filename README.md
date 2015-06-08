# LinkLog [ ![Codeship Status for smoll/linklog](https://codeship.com/projects/6b657fd0-f015-0132-11e0-3ee07e19cdb4/status?branch=master)](https://codeship.com/projects/84492)

## Usage

Start the server (and db, etc.) with

```
$ meteor
```

## Tests

Tests run in the browser using Meteor's Velocity test framework. Install cucumber dependencies

```
$ cd tests/cucumber
$ npm install
```

then start the server (`meteor`) and navigate to [http://localhost:3000](http://localhost:3000) to view the site. Test passing/failing status will display in the upper-right-hand corner.
