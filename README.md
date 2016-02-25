# keycodes [![Build Status][travis-image]][travis-url]

> Key codes and names

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

## Related

* [keycodes-cli][keycodes-cli] — CLI for this module
* [keycomb][keycomb] — key combinations parser
* [ks][ks] — keyboard shortcuts

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/keycodes
[travis-image]: https://travis-ci.org/andrepolischuk/keycodes.svg?branch=master

[keycodes-cli]: https://github.com/andrepolischuk/keycodes-cli
[keycomb]: https://github.com/andrepolischuk/keycomb
[ks]: https://github.com/andrepolischuk/ks
