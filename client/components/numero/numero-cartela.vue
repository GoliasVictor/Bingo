<template>
	<input
		:class="classObject"
		contenteditable="true"
		@input="onInput"
		:value="modelValue"
		@keydown="onInput"
	/>
</template>

<script>
export default {
	props: ["modelValue", "marcado", "invalido"],
	emits: ["update:modelValue"],
	data: () => ({
		antigo: { valor: 0, start: 0, end: 0 },
	}),

	computed: {

		classObject: function () {
			return {
				container: true,
				"numero-marcado": this.marcado || false,
				"numero-invalido": this.invalido || false,
			};
		},
	},
	created() {
		this.antigo.valor = this.valor;
	},
	methods: {
		onInput(e) {
			const t = e.target;

			if (t.value == this.antigo.valor) return;
			let newValue = new Number(t.value);
			if (
				t.value != "" &&
				(isNaN(newValue) ||
					0 >= newValue ||
					newValue >= 100 ||
					t.value.length > 2)
			) {
				t.value = this.antigo.valor;
				t.selectionStart = this.antigo.start;
				t.selectionEnd = this.antigo.end;
			} else {
				this.antigo = {
					valor: t.value,
					start: t.selectionStart,
					end: t.selectionEnd,
				};
				this.$emit("update:modelValue", t.value);

			}
		},
	},
};
</script>

<style >
.container {
	background-color: white;
	border: none;
	text-align: center;
	font-size: inherit;
}
.container.numero-marcado {
	background-color: hsl(206deg 61% 50%);
	color: white;
}
.container.numero-completo {
	background-color: hsl(120deg 61% 50%);
	color: white;
}
</style>
