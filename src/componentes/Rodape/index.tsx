import { useNavigate } from 'react-router-dom';
import { useListaParticipantes } from '../../state/hooks/useListaParticipantes';
import styles from './Rodape.module.css';

export default function Rodape() {
	const participantes = useListaParticipantes();
	const navegar = useNavigate();

	function iniciar() {
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
