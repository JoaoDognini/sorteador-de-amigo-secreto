import { RecoilRoot } from "recoil"
import Sorteio from "."
import { fireEvent, render, screen } from "@testing-library/react"
import { useListaParticipantes } from "../../../state/hooks/useListaParticipantes"
import { useResultadoSorteio } from "../../../state/hooks/useResultadoSorteio"
import { act } from "react-dom/test-utils"

jest.mock('../../../state/hooks/useListaParticipantes', () => {
	return {
		useListaParticipantes: jest.fn()
	}
})

jest.mock('../../../state/hooks/useResultadoSorteio', () => {
	return {
		useResultadoSorteio: jest.fn()
	}
})

describe('A página de sorteio', () => {
	const participantes = [
		'João', 'João Dois', 'João Três'
	]

	const resultado = new Map([
		['João', 'João Dois'],
		['João Dois', 'João Três'],
		['João Três', 'João']
	])

	beforeEach(() => {
		(useListaParticipantes as jest.Mock).mockReturnValue(participantes);
		(useResultadoSorteio as jest.Mock).mockReturnValue(resultado);
	})

	test('Todos os participantes podem exibir o seu amigo secreto', () => {
		render(
			<RecoilRoot>
				<Sorteio />
			</RecoilRoot>
		)

		const opcoes = screen.queryAllByRole('option')

		expect(opcoes).toHaveLength(participantes.length + 1);
	})

	test('O amigo secreto é exibido quando solicitado', () => {
		render(
			<RecoilRoot>
				<Sorteio />
			</RecoilRoot>
		)

		const select = screen.getByPlaceholderText('Selecione seu nome');
		
		fireEvent.change(select, {
			target: {
				value: participantes[0]
			}
		})

		const botao = screen.getByRole('button')
		fireEvent.click(botao)

		const amigoSecreto = screen.getByRole('alert')

		expect(amigoSecreto).toBeInTheDocument();
	})

	test('O amigo secreto some após 5 segundos', () => {
		jest.useFakeTimers();

		render(
			<RecoilRoot>
				<Sorteio />
			</RecoilRoot>
		)

		const select = screen.getByPlaceholderText('Selecione seu nome');
		
		fireEvent.change(select, {
			target: {
				value: participantes[0]
			}
		})

		const botao = screen.getByRole('button')
		fireEvent.click(botao)

		act(() => {
			jest.runAllTimers();
		});
		
		const amigoSecreto = screen.queryByRole('alert')
		expect(amigoSecreto).not.toBeInTheDocument();
	})
})
