new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        alertNotify(){
            alert("Voce clicou")
        },
        salvadata(event){
            this.valor = event.target.value
        }
    }
})