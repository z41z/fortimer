export const Timer = class {
  constructor() {
    this.timers = {}
    return this
  }
  add(options = {}) {
    let { name, func, repeat = false, duration = 1e3 } = options
    this.remove(name)
    this.timers[name] = options
    if (repeat) {
      this.timers[name].timer = setInterval(() => {
        func()
      }, duration)
      return
    }
    this.timers[name].timer = setTimeout(() => {
      func()
    }, duration)
  }
  remove(name) {
    if (this.timers[name]) {
      if (this.timers.repeat) {
        clearInterval(this.timers[name].timer)
      } else {
        clearTimeout(this.timers[name].timer)
      }
      delete this.timers[name]
    }
  }
  getAll() {
    return this.timers
  }
  removeAll() {
    Object.keys(this.timers).forEach(name => {
      this.remove(name)
    })
  }
}