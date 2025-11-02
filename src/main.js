/**
 * @fileoverview This is the main entry point for the Vue application.
 * It imports the root component `App.vue` and the main stylesheet,
 * then creates a new Vue app instance and mounts it to the DOM element with the id 'app'.
 */
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

createApp(App).mount('#app')
