import { useState } from "react";
import { useListaParticipantes } from "../../../state/hooks/useListaParticipantes"
import { useResultadoSorteio } from "../../../state/hooks/useResultadoSorteio";
import Card from "../../Card";
import styles from './Sorteio.module.css';

export default function Sorteio() {
	const participantes = useListaParticipantes();
	const [participanteDaVez, setParticipanteDaVez] = useState('')
	const [amigoSecreto, setAmigoSecreto] = useState('')
	const resultado = useResultadoSorteio();
	const [botaoDesabilitado, setBotaoDesabilitado] = useState(true);

	const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		if (resultado.has(participanteDaVez)) setAmigoSecreto(resultado.get(participanteDaVez)!);
	}

	function onChangeParticipante(evento: React.ChangeEvent<HTMLSelectElement>) {
		evento.target.value === 'Selecione seu nome'
			? setBotaoDesabilitado(true)
			: setBotaoDesabilitado(false);

		setParticipanteDaVez(evento.target.value);
		if (amigoSecreto) setAmigoSecreto('');
	}

	return (
		<Card>
			<section>
				<h2>Quem vai tirar papelzinho?</h2>
				<form className={styles.sorteio_form} onSubmit={sortear}>
					<select
						className={styles.sorteio_select}
						required
						name="participanteDaVez"
						id="participanteDaVez"
						placeholder="Selecione seu nome"
						value={participanteDaVez}
						onChange={evento => onChangeParticipante(evento)}
					>
						<option className={styles.sorteio_select_opcao} key='sorteio_select_vazio'>Selecione seu nome</option>
						{participantes.map(participante => {
							return <option className={styles.sorteio_select_opcao} key={participante}>{participante}</option>
						})}
					</select>
					<p className={styles.sorteio_texto}>Clique em sortear para ver quem é seu amigo secreto!</p>
					<button className={styles.sorteio_botao} disabled={botaoDesabilitado}>Sortear</button>
				</form>
				{amigoSecreto && <p className={styles.sorteio_resultado_amigo} role="alert">{amigoSecreto}</p>}
				<img src="/imagens/aviao.png" alt="Desenho de avião de papel"></img>
			</section>
		</Card>
	)
}
