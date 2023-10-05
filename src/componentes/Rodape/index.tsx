import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes';
import styles from './Rodape.module.css';
import { useSorteador } from '../../state/hooks/useSorteador';

export default function Rodape() {
	const participantes = useListaParticipantes();
	const navegar = useNavigate();
	const sortear = useSorteador();
	
	function iniciar() {
		sortear();
		navegar('/sorteio');
	}

	return (
		<footer>
			<button
				disabled={participantes.length < 3}
				onClick={() => iniciar()}
			>
				Iniciar brincadeira
			</button>
		</footer>
	)
}
