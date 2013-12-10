var newGameButton = Backbone.View.extend({

	template: Handlebars.compile(
		'<div>' +
		'<button type="button" class="btn btn-primary">Start New Game</button>' +
		'</div>'
	),

	initialize: function  () {
		socket = io.connect('http://localhost:8080/');
	},

	events: {
		'click .btn-primary': 'newRoom'
	},

	newRoom: function (event){
		var question = Number(prompt('What is 2 + 2?', 'enter answer here'));
		if( question === 4){
			socket.emit('joined', function (data){
				console.log(data.message);
			});
		}
		else {
			console.log('Sorry, you are not allowed in this room');
		}		
	},



	render: function  () {
		this.$el.html(this.template());
		return this;
	}

});