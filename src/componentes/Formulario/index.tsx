import { useRef, useState } from "react"
import { useAdicionarParticipante } from "../../state/hooks/useAdicionarParticipante";
import { useMensagemErro } from "../../state/hooks/useMensagemErro";

export default function Formulario() {
	const [nome, setNome] = useState('');
	const inputRef = useRef<HTMLInputElement>(null)
	const adicionarNaLista = useAdicionarParticipante();
	const mensagemErro = useMensagemErro();

	function adicionarParticipante(evento: React.FormEvent<HTMLFormElement>) {
		evento.preventDefault();

		adicionarNaLista(nome)
		setNome('');
		inputRef.current?.focus()
	}

	return (
		<form onSubmit={evento => adicionarParticipante(evento)}>
			<input
				value={nome}
				onChange={evento => setNome(evento.target.value)}
				ref={inputRef}
				type="text"
				placeholder="Insira os nomes dos participantes"
			/>
			<button disabled={!nome}>Adicionar</button>
			{mensagemErro && <p role="alert">{mensagemErro}</p>}
		</form>
	)
}