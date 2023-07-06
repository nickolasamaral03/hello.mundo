import styles from "./Banner.module.css"
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
            <h1 className={styles.titulo}>
            Olá, Mundo!
            </h1>

            <p className={styles.paragrafo}>
            Boas vindas, pessoal! Me chamo Nickolas Brum Amaral e sou estudante de programação da Alura!
            </p>
            </div>
            <div className={styles.imagens}>
            <img className={styles.circuloColorido}
            src={circuloColorido} 
            aria-hidden={true}
            />

            <img
            className={styles.minhaFoto}
            src={minhaFoto}
            alt="Foto do Nickolas sorrindo "
            />
            </div>
        </div>
    )
}