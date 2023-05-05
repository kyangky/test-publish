import { App } from 'vue'
import CimkButton from './CimkButton/index.vue'

export {
  CimkButton
}

const component = [CimkButton]

const CsUI = {
  install(app: App) {
    component.forEach(item => {
      app.component(item.name, item)
    })
  }
}

export default CsUI
