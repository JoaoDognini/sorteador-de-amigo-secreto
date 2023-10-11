import { useListaParticipantes } from '../../state/hooks/useListaParticipantes';
import styles from './ListaParticipantes.module.css';

export default function ListaParticipantes() {
	const participantes: string[] = useListaParticipantes();
	return (
		<ul className={styles.lista}>
			{participantes.map(participante => <li className={styles.lista_item} key={participante}>{participante}</li>)}
		</ul>
	)
}
