import {useState, useEffect} from 'react';
import filmesData from '../data/filmes.json';
import {Header} from '../components/Header';
import {Footer} from '../components/Footer';

interface Filme {
        id: number;
        nome: string;
        genero: string;
        imagem: string;
    }

export function Home(){
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    
    function loadFilmes(){
        setFilmes(filmesData as Filme[]);
    }
    
    useEffect(() => {
        loadFilmes()
    },[])

    const filmesFiltrados = filmes.filter((filme) =>
        filme.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        filme.genero.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div>
            <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <div className='container'>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th id='image'>imagem</th>
                            <th id='name'>nome</th>
                            <th id='genre'>gênero</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filmesFiltrados.map((filme) => (
                            <tr key={filme.id}> 
                                <td>{filme.id}</td>
                                <td>
                                    <img 
                                        src={filme.imagem} 
                                        alt={`Capa do filme ${filme.nome}`} 
                                        style={{ width: '100px', height: 'auto', display: 'block' }} 
                                    />
                                </td>
                                <td>{filme.nome}</td>
                                <td>{filme.genero}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    )
}