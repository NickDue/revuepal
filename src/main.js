import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCode } from '@fortawesome/free-solid-svg-icons'

library.add(faCode)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
