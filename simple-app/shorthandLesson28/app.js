new Vue({
	el: '#app',
	data: {
		link: 'http://rubix3.io'
	},
	methods: {
		changeLink: function() {
			this.link = 'http://apple.com'
		}
	}
});