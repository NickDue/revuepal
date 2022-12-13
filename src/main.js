import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3Google3Login from 'vue3-google-login'
import VueCookies from 'vue-cookies'


const app = createApp(App)
app.use(router)

app.use(VueCookies, {
    expires: '7d'
})

app.use(vue3Google3Login, {
    clientId: '390148989703-qae4dp2p224nvkhsdk1o9sg4s1pgtm7d.apps.googleusercontent.com'
})

app.mount('#app')
