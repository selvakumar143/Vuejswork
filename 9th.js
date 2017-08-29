Vue.component('message',{
	props:['title','body'],
	data(){
		return{
			isVisible:true
		};
	},
	template:`
		<article class="message" v-show="isVisible">
		<div class="message-header">
			{{title}}			
			<button type="button" @click=" isVisible = false">X</button>
		</div>		
		<div class="message-body">
			{{body}}
		</div>
		</article>`
		});new Vue({
	el:'#root'
});
/*  */