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
		<footer className={styles.rodape}>
			<button 
				className={styles.rodape_botao}
				disabled={participantes.length < 3}
				onClick={() => iniciar()}
			>
				Iniciar<br />brincadeira!
			</button>
			<img src='/imagens/sacolas.png' alt='Desenho de sacolas de compras' />
		</footer>
	)
}
