import { listaParticipantesState } from "../atom";
import { useRecoilValue } from 'recoil';

export function useListaParticipantes() {
	return useRecoilValue(listaParticipantesState);
}