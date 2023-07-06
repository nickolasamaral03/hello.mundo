import { Route, Routes, useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "componentes/PostModelo"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import './Post.css'
import NaoEncontrada from "paginas/NaoEncontrado"
import PaginaPadrao from "componentes/PaginaPadrao"

export default function Post(){
    const paramatros = useParams()
    const post = posts.find((post) => {
        return post.id === Number(paramatros.id)
    })

    if(!post){
        return <NaoEncontrada/>
    }
    
    return (
        <Routes>
        <Route path="*" element={<PaginaPadrao/>}>
            <Route index element={<PostModelo
            fotoCapa={`/posts/${post.id}/capa.png`}
            titulo={post.titulo}
            // Pegando a estrutura montada do PostModelo e fazendo referencia
            >
            <div className="post-markdown-container">
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
            </div>

        </PostModelo>}/>
        </Route>
        </Routes>
    )
}