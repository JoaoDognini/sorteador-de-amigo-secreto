// Jest

import { fireEvent, render, screen } from "@testing-library/react"
import Formulario from "./Formulario";
import { RecoilRoot } from 'recoil'
import { act } from "react-dom/test-utils";

describe('Comportamento do Formulario.tsx', () => {
	test('Quando input estiver vazio, novos participantes não podem ser adicionados', () => {

		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		)

		// Encontrar no DOM o input
		const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
		// Encontrar o botão
		const botao = screen.getByRole('button');
		// Garantir que o input esteja no documento
		expect(input).toBeInTheDocument();
		// Garantir que o botão esteja desabilitado
		expect(botao).toBeDisabled();
	})

	test('Adicionar participante caso exista nome preenchido', () => {
		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		)

		// Encontrar no DOM o input
		const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
		// Encontrar o botão
		const botao = screen.getByRole('button');

		// Inserir valor no input
		fireEvent.change(input, {
			target: {
				value: 'João',
			},
		})

		// Clicar no botão
		fireEvent.click(botao)

		// Garantir que o input esteja com foco ativo
		expect(input).toHaveFocus()

		// Garantir que o input não tenha valor
		expect(input).toHaveValue('')
	})

	test('Nomes duplicados não podem ser adicionados', () => {
		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		)

		const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
		const botao = screen.getByRole('button');

		fireEvent.change(input, {
			target: {
				value: 'João',
			},
		})
		fireEvent.click(botao)

		fireEvent.change(input, {
			target: {
				value: 'João',
			},
		})
		fireEvent.click(botao)

		const mensagemErro = screen.getByRole('alert');

		expect(mensagemErro.textContent).toBe('Nomes duplicados não são permitidos!')
	})

	test('A mensagem de erro deve sumir após os timers', () => {
		jest.useFakeTimers()
		render(
			<RecoilRoot>
				<Formulario />
			</RecoilRoot>
		)

		const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
		const botao = screen.getByRole('button');

		fireEvent.change(input, {
			target: {
				value: 'João',
			},
		})
		fireEvent.click(botao)

		fireEvent.change(input, {
			target: {
				value: 'João',
			},
		})
		fireEvent.click(botao)

		let mensagemErro = screen.queryByRole('alert');

		expect(mensagemErro).toBeInTheDocument()

		act(() => {
			jest.runAllTimers();
		});

		mensagemErro = screen.queryByRole('alert');
		expect(mensagemErro).toBeNull();
	})
})

