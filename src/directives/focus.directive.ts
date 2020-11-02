import { App, ObjectDirective } from "vue"

const focus: ObjectDirective = {
  mounted(el: HTMLInputElement) {
    el.focus()
  }
}

export default {
  install: (app: App) => {
    app.directive('focus', focus)
  }
}