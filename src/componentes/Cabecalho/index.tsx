import styles from './Cabecalho.module.css';
import logo from '../../../public/imagens/logo.png'
import participante from '../../../public/imagens/participante.png'

export default function Cabecalho() {
  return (
	<header className={styles.cabecalho}>
		<div>
			<img src={logo} alt='Logo do Sorteador' />
			<img src={participante} alt='Desenho de uma pessoa' />
		</div>
	</header>
  )
}
