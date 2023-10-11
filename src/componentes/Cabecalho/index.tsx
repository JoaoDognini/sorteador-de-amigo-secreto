import styles from './Cabecalho.module.css';

export default function Cabecalho() {
	return (
		<header className={styles.cabecalho}>
			<div className={styles.imagem_logo} role='img' aria-label='Logo do Sorteador' />
			<img className={styles.imagem_participante} src='/imagens/participante.png' alt='Desenho de uma pessoa' />
		</header>
	)
}
