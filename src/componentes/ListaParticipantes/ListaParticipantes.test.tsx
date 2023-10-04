import { render, screen } from "@testing-library/react"
import ListaParticipantes from "."
import { RecoilRoot } from 'recoil';
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes";

jest.mock('../../state/hooks/useListaParticipantes', () => {
	return {
		useListaParticipantes: jest.fn()
	}
})

describe('Lista vazia de participantes', () => {
	beforeEach(() => {
		(useListaParticipantes as jest.Mock).mockReturnValue([])
	})

	test('deve ser renderizada sem elementos', () => {

		render(
			<RecoilRoot>
				<ListaParticipantes />
			</RecoilRoot>
		)

		const itens = screen.queryAllByRole('listitem')
		expect(itens).toHaveLength(0)
	})
})

describe('Lista preenchida de participantes', () => {
	const participantes = ['João', 'João Dois']

	beforeEach(() => {
		(useListaParticipantes as jest.Mock).mockReturnValue(participantes)
	})

	test('deve ser renderizada sem elementos', () => {
		render(
			<RecoilRoot>
				<ListaParticipantes />
			</RecoilRoot>
		)

		const itens = screen.queryAllByRole('listitem')
		expect(itens).toHaveLength(participantes.length)
	})
})