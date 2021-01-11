import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'


Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHcqc4lBRVd5G_lHYKNTs9s7Noy15Yo9s",
  authDomain: "user-app-1a35c.firebaseapp.com",
  databaseURL: "https://user-app-1a35c.firebaseio.com",
  projectId: "user-app-1a35c",
  storageBucket: "user-app-1a35c.appspot.com",
  messagingSenderId: "25862439640",
  appId: "1:25862439640:web:5d80d6d82ce28c84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
