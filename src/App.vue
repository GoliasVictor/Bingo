<template>
  <main-page></main-page>
</template>

<script >
import mainPage  from './components/main-page.vue';


export default {
	components: { mainPage },  
  
  name: 'App',

}
</script>

<style>
:root{
  --color: #D3E2FF;
  --tamanho: 50px; 
  font-family: roboto;
}
h2{
  font-weight: normal;
  font-size: 36px;
}
button{
  background-color: var(--color);
  border: none;
  border-radius: 12px;
  padding: 1em;
}
#app{
  width: 100vw;
}
@property --color {
  syntax: '<color>';
  inherits: true;
  initial-value: #000;
}

.tools {
	display: flex;
}
.container{
	width: var(--tamanho);
	height: var(--tamanho);
	border-radius: 12px;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
	margin: calc( var(--tamanho) / 5);
}

.container i {
  font-size: 1.5em;
}


</style>
