new Vue({
	el: '#app',
	data: {
		counter: 0,
		secondCounter: 0
	},
	computed: {
		output: function() {
			return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
		}
	},
	watch: {
		counter: function(value) {
			let vm = this;
			setTimeout(function() {
				vm.counter=0;	
			}, 2000)
		}
	},
	methods: {
		result() {
			return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
		}
	}
});