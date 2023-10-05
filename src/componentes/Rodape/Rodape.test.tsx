import { fireEvent, render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import Rodape from "."
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"

const mockNavigate = jest.fn();
const mockSorteio = jest.fn();

jest.mock('../../state/hooks/useListaParticipantes', () => {
	return {
		useListaParticipantes: jest.fn()
	}
})

jest.mock('react-router-dom', () => {
	return { useNavigate: () => mockNavigate }
})

jest.mock('../../state/hooks/useSorteador', () => {
	return { useSorteador: () => mockSorteio }
})

describe('Quando não existem participantes suficientes', () => {
	beforeEach(() => {
		(useListaParticipantes as jest.Mock).mockReturnValue([])
	})
	test('Brincadeira não pode ser iniciada', () => {
		render(
			<RecoilRoot>
				<Rodape />
			</RecoilRoot>
		)

		const botao = screen.getByRole('button')
		expect(botao).toBeDisabled();
	})
})

describe('Quando existem participantes suficientes', () => {
	const participantes = ['João', 'João Dois', 'João Três']

	beforeEach(() => {
		(useListaParticipantes as jest.Mock).mockReturnValue(participantes)
	})

	test('Brincadeira pode ser iniciada', () => {
		render(
			<RecoilRoot>
				<Rodape />
			</RecoilRoot>
		)

		const botao = screen.getByRole('button')
		expect(botao).not.toBeDisabled();
	})

	test('A brincadeira foi iniciada', () => {
		render(
			<RecoilRoot>
				<Rodape />
			</RecoilRoot>
		)

		const botao = screen.getByRole('button')
		fireEvent.click(botao)

		expect(mockNavigate).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
		expect(mockSorteio).toHaveBeenCalledTimes(1);
	})
})