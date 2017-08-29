Vue.component('modal',{
	template:`
		<div class="modal is-active">
			<div class="modal-background"></div>
				<div class="modal-content">
					<div class="box">
						<p>	Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						<strong>Pellentesque risus mi</strong>, 
						tempus quis placerat ut, porta nec nulla.
						Vestibulum rhoncus ac ex sit amet fringilla.	
						</p>
					</div>
				</div>
				<button class="modal-close" @click="$emit('close')"></button>
			</div>`
});
new Vue({
	el:'#root',
		data:{
		showmodal:false
		}
});
/*  */