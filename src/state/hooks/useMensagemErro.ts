import { erroState } from "../atom";
import { useRecoilValue } from 'recoil';

export function useMensagemErro() {
	const mensagemErro = useRecoilValue(erroState)

	return mensagemErro;
}