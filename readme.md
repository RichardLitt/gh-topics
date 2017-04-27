# gh-topics

[![Build Status](https://travis-ci.org/RichardLitt/gh-topics.svg?branch=master)](https://travis-ci.org/RichardLitt/gh-topics)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Set and get a GitHub repository topics

**NOTE:** GitHub's API does not yet adequately return the `topics` tag. As such, this code will not work, at all. See the note [here](https://developer.github.com/v3/repos/).

**If you think this is not true, ping me immediately by opening an issue. I will make this work.**

## Install

```
npm install --save gh-topics
```

or

```
npm install --global gh-topics
```

## Usage

```js
const ghTopics = require('gh-topics');

ghTopics('RichardLitt/gh-topics');
//=> 'Set and get a GitHub repository topics'
ghTopics('RichardLitt/gh-topics', 'unicorns & rainbows');
//=> 'unicorns & rainbows'
```

## API

### ghTopics(repoName, topics, [options], token)

#### repoName

Type: `string`

The name for the repository to test.

#### topics

Type: `string`

The new topics to set. To set, you must also supply the repoName first.

#### options

None.

#### token

Your GitHub access token, if not set as an env variable or supplied in the CLI.

## CLI

The `gh-topics` command uses [ghauth](https://github.com/rvagg/ghauth) to generate and [locally store](https://github.com/LinusU/node-application-config#config-location) a GitHub API personal token.

You can skip this step by [manually generating a token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/) and setting it as an environment variabled named `GH_DESCRIPTION_TOKEN`.

```
$ gh-topics --help

  Usage
    $ gh-topics

  Examples
    $ gh-topics
    Current topics: Set and get a GitHub repository topics
    $ gh-topics RichardLitt/gh-topics 'ponies and unicorns'
    New topics: ponies and unicorns
```

## Contribute

PRs and [issues](https://github.com/RichardLitt/gh-topics/issues) gladly accepted!

## License

MIT © [Richard Littauer](http://burntfen.com)
