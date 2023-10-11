import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Sorteio from "./componentes/paginas/Sorteio";
import Configuracao from "./componentes/paginas/Configuracao";

function App() {
	return (
		<BrowserRouter>
			<RecoilRoot>
				<Routes>
					<Route path="/" element={<Configuracao />} />
					<Route path="/sorteio" element={<Sorteio />} />
				</Routes>
			</RecoilRoot>
		</BrowserRouter>
	);
}

export default App;
