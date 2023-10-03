import { useSetRecoilState, useRecoilValue } from 'recoil'
import { erroState, listaParticipantesState } from '../atom';

export function useAdicionarParticipante() {
	const setListaParticipantes = useSetRecoilState(listaParticipantesState);
	const setErro = useSetRecoilState(erroState);
	const lista = useRecoilValue(listaParticipantesState);
	return (novoParticipante: string) => {
		if (lista.includes(novoParticipante)) {
			setErro('Nomes duplicados não são permitidos!')
			setTimeout(() => {
				setErro('');
			}, 3000)
			return
		}
		return setListaParticipantes(listaAntiga => [...listaAntiga, novoParticipante])
	};
}