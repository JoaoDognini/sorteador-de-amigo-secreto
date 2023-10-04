import { RecoilRoot } from "recoil"
import Configuracao from "."
import { render } from "@testing-library/react"

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
	return { useNavigate: () => mockNavigate }
})

describe('A página de configuração', () => {
	test('Deve ser renderizada corretamente', () => {
		const { container } = render(
			<RecoilRoot>
				<Configuracao />
			</RecoilRoot>
		)

		expect(container).toMatchSnapshot();
	})
})