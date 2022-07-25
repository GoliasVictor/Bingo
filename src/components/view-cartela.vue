<template>
	<div class="cartela">
		<template v-for="(linhas, i) in cartela.numeros" :key="i">
			<template v-for="(numero, j) in linhas" :key="j">
				<span class="container numero-marcado" v-if="i == 2 && j == 2">
					<i class="material-icons">star_outline</i>
				</span>
				<numero-cartela
					v-else
					:modelValue="cartela.numeros[i][j]"
					@update:modelValue="mudarNumero(cartela,$event, i, j)"
					:marcado="false"
				></numero-cartela>
			</template>
		</template>
	</div>
</template>

<script lang="ts">
import {mapMutations} from "vuex";
import { defineComponent } from "@vue/runtime-core";
import Cartela from "../classes/cartela";
import numeroCartela from "./numero/numero-cartela.vue";

export default defineComponent({
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