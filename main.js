Vue.component('task-list',{
	template:`
		<div>
		<task v-for="task in tasks">{{task.description}}</task>`,
		data(){
			return {
		tasks:[
			{description: 'store',completed:true},						
			{description: 'shopping',completed:true},						
			{description: 'purchase',completed:false},						
			{description: 'pay',completed:false},						
			{description: 'visting',completed:true}
			]
		};
		}
});

Vue.component('task',{
	template:'<li><slot></slot></li>'
});

new Vue({
	el:'#root'
});