new Vue({
    el: '#desafio',
    data: {
        nome: 'Joselito Junior',
        idade: 33,
        linkImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa1LOns-oq_EK4NWnVNpo2ZvwDi0aAWTw_asjUrukj0Cpgyk1ew_EpmfofAjMtYmUsSko&usqp=CAU'
    },
    methods: {
        multiplicacao: function() {
            return this.idade * 3
        },
        randonNumber: function() {
            return Math.random()
        }

    }
})