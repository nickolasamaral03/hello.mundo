import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import styles from './SobreMim.module.css'
import fotoSobreMim from 'assets/minha_foto.jpg'

export default function SobreMim(){
    return(
        <PostModelo
        fotoCapa={fotoCapa}
        titulo='Sobre Mim'
            >

        <h3 className={styles.subtitulo}>
            Olá, eu sou Nickolas!
        </h3>

        <img
             src={fotoSobreMim}
             alt="Foto de Nickolas"
             className={styles.fotoSobreMim}
        />


<p className={styles.paragrafo}>
            Oi, tudo bem? Eu sou Nickolas, aluno da Alura e estou feliz de te ver por aqui.
</p>

<p className={styles.paragrafo}>
           Minha história na programação começa 7 meses atrás, quando estava confuso em qual área progredir em minha carreira. Porém fiquei impressionado e admirado nos desenvolvedores e isso me cativou!
</p>

<p className={styles.paragrafo}>
        Comecei a estudar programação logo depois, com algumas aulas no Youtebe e então, me dei conta que a Web não é só aquilo que usuário vê, mas sim, muito mais vasta 
</p>
<p className={styles.paragrafo}>
        Assim, comecei a estudar no Youtube e logo após na Alura com possibilidades de aprender muito já que é uma plataforma muita completa
</p>
<p className={styles.paragrafo}>
        E com 7 meses de estudo, tem uma noção boa já de JavaScript e React Js, além de CSS e HTML. Pretendo estudar Node Js ainda!
</p>
<p className={styles.paragrafo}>
        Irei começar a faculdade de Ciências da Computação no meio desse ano, após ter uma boa nota no Enem, com esse curso superior, meu conhecimento sobre computadores se tornará mais completo!
</p>
        </PostModelo>
        )
}