<template>
	<main>
		<section-sorteados></section-sorteados>
		<section-cartela></section-cartela>
	</main>
</template>
<script lang="ts">
import Vue from 'vue'
import SectionCartela from '../components/section-cartela.vue'
import sectionSorteados from '../components/section-numeros.vue'

export default Vue.extend({
	components: { sectionSorteados, SectionCartela },	
})
</script>
<style >
	*{
		margin: 0;
		padding: 0;
	}

	main{
	
		margin: 80px 160px ;
		display: grid;
		gap: var(--tamanho);
	}

	.header-section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
</style>