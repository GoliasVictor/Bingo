<template>
	<span class="container" @click="$emit('excluir',valor)"> 
		<span>{{valor}}</span>
		<i class="material-icons">delete</i>
	</span>
</template>

<script> 
export default {
	props:["valor"],

	data:function(){
		return {
			onHover:false
		}
	},
}
</script>

<style scoped>
	i{
		color: white;
		display: none;
	}

	.container{
		transition-duration: 200ms;
	}
	.container:hover{
		background-color: red;
		cursor: pointer;		
	}
	.container:hover i{
		display: block;
	}
	.container:hover span{
		display: none
	}
</style>