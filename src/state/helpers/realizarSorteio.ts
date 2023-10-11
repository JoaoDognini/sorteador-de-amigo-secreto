import shuffle from 'just-shuffle'

export function realizarSorteio(participantes: string[]) {
	const totalParticipantes = participantes.length;
	const embaralhado = shuffle(participantes);
	const resultado = new Map<string, string>();

	for (let i = 0; i < totalParticipantes; i++) {
		const indiceAmigo = i === (totalParticipantes - 1) ? 0 : i + 1;
		resultado.set(embaralhado[i], embaralhado[indiceAmigo]);
	}

	return resultado
}