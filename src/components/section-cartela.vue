<template>
	<section>
		<div class="header-section">
			<h2>Numeros Sorteados</h2>
			<div class="tools">
				<button @click="novaCartela">Nova Cartela</button>
				<button @click="TogleView" id="mudar-vizualizacao">
					<span class="material-icons">{{
						compactView ? "window" : "grid_on"
					}}</span>
				</button>
			</div>
		</div>
		<div class="cartelas" :view="compactView ? 'compact' : 'normal'">
			<view-cartela	
				v-for="(c, i) in cartelas"
				:key="i"
				:cartela="c"
			></view-cartela>
		</div>
	</section>
</template>

<script>
import ViewCartela from "./view-cartela.vue";
import { defineComponent } from "@vue/runtime-core";
import { mapState } from 'vuex'

export default defineComponent({
	data:()=>({
		compactView: false,
	}),
	computed: mapState([
		'cartelas'
	]),

	methods: {
		
		novaCartela() {
			this.$store.commit("novaCartela")
		},
		TogleView() {
			this.compactView = !this.compactView;
		},
	},
	components: { ViewCartela },
});
</script>

<style scoped>
.header-section button {
	font-size: 16px;
	height: var(--tamanho);
}
.cartelas {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
/* .cartelas[view='normal']{

} */
.cartelas[view="compact"] {
	--tamanho: 25px;
	font-size: 10px;
}
#mudar-vizualizacao {
	margin-left: 10px;
	height: var(--tamanho);
	width: var(--tamanho);
	padding: 0.5em;
	font-size: 10px;
}
</style>