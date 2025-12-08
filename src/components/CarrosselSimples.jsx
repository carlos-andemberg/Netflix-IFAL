import './CarrosselSimples.css';

function CarrosselSimples({titulo , listaDePosteres}){
    return(
        <div className='carrossel-simples'>
            <span className='carrossel-title'>{titulo}</span>
            <div className='carrossel-table'>
                {
                    listaDePosteres.slice(0,5).map((aux,index) => <img key={index} className='carrossel-img' src={aux} />)
                }
            </div>
        </div>
    );
};

export default CarrosselSimples;