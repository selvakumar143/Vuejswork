//local registration 
var child={
	template:'<div>"hello"</div>'
	}
	new Vue({
		el:'#root',
		components:{ 
		 'my':child
		}
		});
		
//globalregister
Vue.component('my1', {
	template: '<div>A custom component!</div>'
	})
new Vue({
	el: '#root1'
	});
//data passing
var data={ counter : 0 }
Vue.component('my2',{
	template:'<button v-on:click="counter += 1">{{counter}}</button>',
	data: function() {
		return {counter : 0}
	}
});
new Vue({
	el:'#root2'
});
	