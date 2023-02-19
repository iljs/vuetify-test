import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './store'

import ApiPlugin from './plugins/api'

import "./assets/scss/styles.scss";


loadFonts()

const app = createApp(App);

app.use(router)
app.use(vuetify)
app.use(store);
app.use(ApiPlugin);
app.mount('#app')
