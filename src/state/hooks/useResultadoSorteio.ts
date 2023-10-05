import { useRecoilValue } from "recoil";
import { resultadoAmigoSecreto } from "../atom";

export function useResultadoSorteio() {
	return useRecoilValue(resultadoAmigoSecreto)
}