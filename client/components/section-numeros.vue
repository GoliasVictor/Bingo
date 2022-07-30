<template>
	<section>
		<div class="header-section">
			<h2>Numeros Sorteados</h2>
			<div
				id="input-novo-numero"
				:class="{ invalido: !novoNumeroValido, tools: true }"
			>
				<input
					type="number"
					max="99"
					min="0"
					placeholder="00"
					v-model="novoNumero"
				/>
				<button @click='criarNovoNumero'>
					<i class="material-icons">add</i>
				</button>
			</div>
		</div>
		<div id="numeros">
			<numero-sorteado
				:valor="numero"
				:invalido="true"
				v-for="(numero, i) in numeros"
				:key="i"
				@excluir="removerNumero"
			></numero-sorteado>
		</div>
	</section>
</template>
 
<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import numeroSorteado from "./numero/numero-sorteado.vue";
export default Vue.extend({
	components: { numeroSorteado },
	data: () => ({ novoNumero: "" }),
	computed: {
		
		novoNumeroValido() {
			var nNum =  this.novoNumero;
			let number = <number>new Number(this.novoNumero);
			return (
				!isNaN(number) &&
				nNum != "" &&
				0 <= number &&
				number <= 99 &&
				!this.$store.state.numeros.includes(nNum)
			);
		},
		...mapState(["numeros"])
	},
	methods: {
		...mapMutations(["removerNumero"]),
		criarNovoNumero() {
			if (this.novoNumeroValido) {
				this.$store.commit("novoNumero", this.novoNumero);
				this.novoNumero = "";
			}
		},	
	},
});
</script>
 
<style  scoped >
#input-novo-numero > button {
	width: var(--tamanho);
	height: var(--tamanho);
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	transition-duration: 200ms;
}

#input-novo-numero > input {
	font-size: 20px;
	text-align: center;
	width: 100px;
	height: var(--tamanho);
	border: solid var(--color);
	box-sizing: border-box;
	border-radius: 12px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border-right: none;
	transition-duration: 200ms;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.invalido {
	--color: red;
}
.invalido input {
	color: red;
}
.invalido button {
	color: white;
}
#numeros {
	width: 100%;
	min-height: calc(var(--tamanho) + 20px);

	background: var(--color);
	border-radius: 12px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
}
section {
	display: grid;
	gap: var(--tamanho);
}
</style>