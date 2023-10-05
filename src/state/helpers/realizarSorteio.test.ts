import { realizarSorteio } from "./realizarSorteio";

describe('Dado um sorteio de amigo secreto', () => {
	test('Cada participante não sorteie ele mesmo', () => {
		const participantes = [
			'João', 'João Dois', 'João Três', 'Vinicios', 'Natalia', 'Ana'
		]

		const sorteio = realizarSorteio(participantes);

		participantes.forEach(participante => {
			const amigoSecreto = sorteio.get(participante)
			expect(amigoSecreto).not.toEqual(participante)
		})
	})
})