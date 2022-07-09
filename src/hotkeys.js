export default class Hotkeys {

  constructor (keys, info=true) {
    this.keys = []
    if (keys) {
      keys.forEach(key => {
        this.bind(key)
      })
    }
    window.addEventListener('keydown', (e) => { this.process(e) })
    if(info){ this.showInfo() }
  }

  bind (key) {
    key.code = key.key.length == 1 ? (!isNaN(key.key)?'Digit'+key.key:'Key' + (key.key).toUpperCase()) : key.key

    key.meta = key.meta || false
    key.ctrl = key.ctrl || false
    key.alt = key.alt || false
    key.shift = key.shift || false

    this.keys.push(key)
  }

  unbind (key) {
    this.keys = this.keys.filter(k => {
      return k.key !== key.key
    })
  }

  reset () {
    this.keys = []
  }

  process (e) {
    if(e.target.type) return // ignore on input, textarea etc.
    this.keys.forEach((key) => {
      if (e.code === key.code &&
        (key.meta === e.metaKey) &&
        (key.ctrl === e.ctrlKey) &&
        (key.alt === e.altKey) &&
        (key.shift === e.shiftKey)
      ) {
        e.preventDefault()
        key.callback()
      }
    })
  }

  showInfo () {
    // TODO: replace ArrowUp with ↑
    const style = 'border-radius:3px; padding:1px 4px; background:#666; color:#fff; box-shadow:#ccc 1px 1px 0px;'
    const noStyle = ''

    console.group("Hotkeys")
    this.keys.forEach((key) => {
      let text = `${key.meta?'%cCMD%c + ':''}${key.ctrl?'%cCTRL%c + ':''}${key.alt?'%cALT%c + ':''}${key.shift?'%cSHIFT%c + ':''}%c${key.key}%c`
      const styles = Array(text.match(/%c/g).length/2).fill([style, noStyle]).flat()
      console.log(`${text} - ${key.description}`, ...styles)
    })
    console.groupEnd()
  }
}