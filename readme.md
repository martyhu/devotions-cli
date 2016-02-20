# devotions-cli

> Daily devotions, delivered to your command line.

[![npm](http://img.shields.io/npm/v/devotions-cli.svg?style=flat)](https://www.npmjs.com/package/devotions-cli)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Build Status](https://travis-ci.org/wayneashleyberry/devotions-cli.svg?branch=master)](https://travis-ci.org/wayneashleyberry/devotions-cli)

In my personal journey to know more scripture, I wanted a new kind of daily
devotion... one for my command line. This little cli will give you a new verse
from the ESV every day.

### Installation

```sh
npm install -g devotions-cli
```

### Usage

```sh
$ devotion
Therefore take up the whole armor of God, that you may be able to withstand in
the evil day, and having done all, to stand firm.
                                                          Ephesians 6:13 (ESV)
```

#### Request an API Key

The devotions cli will use a development API key by default, just to get your
started. Please register for your own API key over
[here](http://www.esvapi.org/signup).

When you have your own API key, the devotions cli can be run as follows:

```sh
$ ESV_API_KEY=1234 devotion
```

#### Thanks

Special thanks to the [ESV Bible Web Service](http://www.esvapi.org/).

#### License

[MIT](http://opensource.org/licenses/MIT) © [Wayne Ashley Berry](https://twitter.com/waynethebrain)
