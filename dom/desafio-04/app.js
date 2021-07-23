new Vue({
	el: '#desafio',
	data: {
		setEfeito: 'c3',
		setLargura: 'largura',
		userEfeito: 'c1',
		setGirar: 'girar',
		aplicarGirar: true,
		cor: 'yellow',
		progressWidth: 0,
		background1: 'c1'
	},
	computed: {
		meuEstilo() {
			return{
				backgroundColor: this.cor,
				width: this.progressWidth + 'px'
			}
		}
	},
	watch: {
		setEfeito(){
			setTimeout(() =>{
				this.setEfeito == 'c1' ? this.setEfeito = 'c2' : this.setEfeito = 'c1'
			}, 1000)
		},

		progressWidth(){
			setTimeout(() => {
				this.progressWidth < 400? this.progressWidth++ : this.progressWidth = 400
			}, 1)
		}
	},
	methods: {
		iniciarEfeito() {
			this.setEfeito = 'c1'
		},
		iniciarProgresso() {
			this.progressWidth = 1
		}
	}
})