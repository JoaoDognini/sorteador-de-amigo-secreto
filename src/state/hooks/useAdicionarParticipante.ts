import { useSetRecoilState, useRecoilValue } from 'recoil'
import { erroState, listaParticipantesState } from '../atom';

export function useAdicionarParticipante() {
	const setListaParticipantes = useSetRecoilState(listaParticipantesState);
	const setErro = useSetRecoilState(erroState);
	const lista = useRecoilValue(listaParticipantesState);
	
	return (novoParticipante: string) => {
		const repetido = lista.find(participante => participante.toLowerCase() === novoParticipante.toLowerCase())

		if (!!repetido) {
			setErro('Nomes duplicados não são permitidos!')
			setTimeout(() => {
				setErro('');
			}, 3000)
			return
		}
		return setListaParticipantes(listaAntiga => [...listaAntiga, novoParticipante])
	};
}