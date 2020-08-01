new Vue({
        el: '#exercise',
        data: {
            value: '',
			newValue: ''
        },
		methods: {
			showAlert: function() {
				return alert('Button clicked!')
			},
			storeResult: function(event) {
				return this.value = event.target.value;
			},
			submitResult: function(event) {
				return this.newValue = event.target.value;
			}
		}
    });