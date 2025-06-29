// const buttonelement = document.querySelector('button');
// const inputelement = document.querySelector('input');
// const listelement = document.querySelector('ul');
// buttonelement.addEventListener('click', function() {
//   const newli = document.createElement('li');
//   newli.textContent = inputelement.value;
//   listelement.appendChild(newli);
//   inputelement.value = '';
// });


// Use Vue.js to create a simple app that allows users to add items to a list.const app = 

// One way to do this is to use vue.js, a progressive JavaScript framework for building user interfaces.
const app = Vue.createApp({
  data() {
    return {
      enteredValue: '',
      items: []
    };
  },
  methods: {
    addItem() {
      this.items.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
});
app.mount('#app');

// Secound way to do this is to use vue.js, a progressive JavaScript framework for building user interfaces.
// Vue.createApp({
//   data() {
//     return {
//       enteredValue: '',  
//       items: []
//     };
//   },
//   methods: {
//     addItem() {
//       this.items.push(this.enteredValue);
//       this.enteredValue = '';
//     }
//   }  
// }).mount('#app');

// Third way to do this is to use vue.js, a progressive JavaScript framework for building user interfaces.
// import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
// createApp({
//   data() {
//     return {
//       enteredValue: '',
//       items: []
//     };
//   },
//   methods: {
//     addItem() {
//       this.items.push(this.enteredValue);
//       this.enteredValue = '';
//     }
//   }
// }).mount('#app');

