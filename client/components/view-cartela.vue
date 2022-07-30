<template>
	<div class="cartela">
		<template v-for="(linhas, i) in cartela.numeros">
			<template v-for="(numero, j) in linhas">
				<span class="container numero-marcado" :key="'star-'+i+'-'+j" v-if="i == 2 && j == 2">
					<i class="material-icons">star_outline</i>
				</span>
				<numero-cartela
					v-else
					:key="i+'-'+j"
					:modelValue="cartela.numeros[i][j]"
					@update:modelValue="mudarNumero(cartela,$event, i, j)"
					:marcado="false"
				></numero-cartela>
			</template>
		</template>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapMutations} from "vuex";
import Cartela from "../classes/cartela";
import numeroCartela from "./numero/numero-cartela.vue";

export default Vue.extend({
	components: { numeroCartela },
	props: {
		cartela: {
			type: Cartela
		},
	},
	data: () => ({
		test: 3,
	}),
	created() {
		console.log(this.cartela);
	},
	methods: {
		...mapMutations(["mudarNumero"]),
	},
});
</script>

<style>
.cartela {
	display: grid;
	grid-template-columns: repeat(5, auto);
	width: min-content;

	background: var(--color);
	border-radius: 12px;
	margin: var(--tamanho);
}
</style>