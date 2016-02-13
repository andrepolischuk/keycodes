# keycodes [![Build Status][travis-image]][travis-url]

> Key codes and names

[keycodes-cli][keycodes-cli] - CLI for this module.

## Install

```sh
npm install --save keycodes
```

```sh
component install andrepolischuk/keycodes
```

## Usage

```js
import keycodes from 'keycodes';

keycodes('enter'); // 13
keycodes(13); // 'enter'
```

## API

### keycodes(key)

#### key

Type: `string`, `number`

Key name string or key code number.

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/keycodes
[travis-image]: https://travis-ci.org/andrepolischuk/keycodes.svg?branch=master

[keycodes-cli]: https://github.com/andrepolischuk/keycodes-cli
