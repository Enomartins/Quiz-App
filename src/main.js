import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)


Vue.config.productionTip = false

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAXVDSb41ooXvpLgV1wv9kRhRMLeta5wbA",
    authDomain: "quiz-app-project-3f6fa.firebaseapp.com",
    projectId: "quiz-app-project-3f6fa",
    storageBucket: "quiz-app-project-3f6fa.appspot.com",
    messagingSenderId: "877697440761",
    appId: "1:877697440761:web:9a18b731091fee4ea9bb28",
    measurementId: "G-CF42GTZCRV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
