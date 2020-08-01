new Vue({
	el: '#exercise',
	data: {
		name: 'Nick Hernandez',
		age: 27,
		image: 'https://miro.medium.com/max/1400/1*OrjCKmou1jT4It5so5gvOA.jpeg'
	},
	methods: {
		generateRandom: function() {
			return Math.random()
		}
	}
})