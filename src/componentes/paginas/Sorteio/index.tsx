import { useState } from "react";
import { useListaParticipantes } from "../../../state/hooks/useListaParticipantes"
import { useResultadoSorteio } from "../../../state/hooks/useResultadoSorteio";

export default function Sorteio() {
	const participantes = useListaParticipantes();
	const [participanteDaVez, setParticipanteDaVez] = useState('')
	const [amigoSecreto, setAmigoSecreto] = useState('')
	const resultado = useResultadoSorteio();

	const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
		evento.preventDefault();
		if (resultado.has(participanteDaVez)) setAmigoSecreto(resultado.get(participanteDaVez)!);
	}

	return (
		<section>
			<form onSubmit={sortear}>
				<select
					required
					name="participanteDaVez"
					id="participanteDaVez"
					placeholder="Selecione seu nome"
					value={participanteDaVez}
					onChange={evento => setParticipanteDaVez(evento.target.value)}
				>
					{participantes.map(participante => {
						return <option key={participante}>{participante}</option>
					})}
				</select>
				<button>Sortear</button>
			</form>
			{amigoSecreto && <p role="alert">{amigoSecreto}</p>}
		</section>
	)
}
