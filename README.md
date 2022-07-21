# Hotkeys helper library

Used in various interactive installations

## Using the library

### Install the library

```bash
npm install @pangenerator/hotkeys
```

### Import the library

```js
import Hotkeys from '@pangenerator/hotkeys'
```

### Configure keys
  
```js
import Hotkeys from './src/hotkeys.js'
      const hotkeys = new Hotkeys([
        { key: 'ArrowUp', meta: true, shift: true, alt: true, ctrl: true, description: 'Fired when Command + Shift + Alt/Option + Control + Arrow Up is pressed', callback: () => { console.log('UP') } },
        { key: '2', description: `Fired when '2' is pressed"`, callback: () => { console.log('2') }},
        { key: 'F', description: `Fired when 'F' is pressed"`, callback: () => { console.log('F') }},
      ])
```
