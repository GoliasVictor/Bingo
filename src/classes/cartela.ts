export default class Cartela {
	numeros: (number | null)[][]
	constructor(
		numeros? : [][]
	) {
		if (numeros) {
			this.numeros = numeros;
		}
		else {
			const LV = [null, null, null, null, null];
			const CartelaVazia = [LV,LV,LV,LV,LV];
			this.numeros = CartelaVazia;
		}

	}

}