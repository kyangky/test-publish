import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 验证组件可用性
import CsUI from './components'

const app = createApp(App)
app.use(CsUI)
app.mount('#app')
