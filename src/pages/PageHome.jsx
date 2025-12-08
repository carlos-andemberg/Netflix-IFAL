import './PageHome.css';
import BarraDeNavegacao from '../components/BarraDeNavegacao.jsx';
import { useEffect, useState } from 'react';
import CarrosselSimples from '../components/CarrosselSimples.jsx';
import CarrosselNumerado from '../components/CarrosselNumerado.jsx';

function PageHome() {

    let lista = ['Início', 'Séries', 'Filmes', 'Bombando', 'Minha lista', 'Navegar por idiomas'];

    const [imageHorizontal, setImageHorizontal] = useState([]);
    const [imageVertical, setImageVertical] = useState([]);

    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmQ5MDIzYjdhODE1MTUyYjdjNzRmNDJmNDFkZTY5ZSIsIm5iZiI6MTc2NDAwNDI5My4zNTMsInN1YiI6IjY5MjQ5MWM1NWQ0NGM4ZDVhYTMyYWJlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7Rd0lTTiWK8LenHNWBZop-AM051QPbaaR-3euI24NiM'
        }
    };

    useEffect(() => {
        fetch(url, options)
            .then(res => res.json())
            .then(resultadoDaRequisicao => {
                let imagemH = resultadoDaRequisicao.results.map(filme => filme.backdrop_path);
                let imagemV = resultadoDaRequisicao.results.map(filme => filme.poster_path)
                setImageHorizontal(imagemH);
                setImageVertical(imagemV);
            })
            .catch(err => console.error(err));
    }, [url]);

    let urlBase = 'https://image.tmdb.org/t/p/w500';
    let urlBaseDestaque = 'https://image.tmdb.org/t/p/original';
    let urlFull = imageHorizontal.map(aux => (urlBase + aux));
    let urlFullV = imageVertical.map(aux => (urlBase + aux));

    return (
        <div className='page-home'>
            <div className='home-top'>
                <BarraDeNavegacao links={lista} />
            </div>
            <div className='home-mid'>

            </div>
            <div className='home-carrossel'>
                <CarrosselSimples titulo='Top 10' listaDePosteres={urlFull.slice(0, 5)} />
                <CarrosselSimples titulo='Os melhores filme da semana' listaDePosteres={urlFull.slice(5, 10)} />
                <CarrosselNumerado titulo='Top 5 de hoje' listaDePosteres={urlFullV.slice(0,5)}/>
            </div>
        </div>
    );
};

export default PageHome;
