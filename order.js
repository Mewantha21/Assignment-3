// Application that usees v-model in order to create reactive content. 
var app1 = new Vue ({
    el: '.order-form',
    data: {
        fname: '',
        lname: '',
        addr: '',
        state: '',
        postcode: '',
        email: ''
    }
})