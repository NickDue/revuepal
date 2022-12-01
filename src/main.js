import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3Google3Login from 'vue3-google-login'


const app = createApp(App)
app.use(router)

app.use(vue3Google3Login, {
    clientId: '233140959345-menk63bocnigdq74ngn6sukjqvc05t8q.apps.googleusercontent.com'
})

app.mount('#app')
