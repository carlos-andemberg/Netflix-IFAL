import './CarrosselNumerado.css';

function CarrosselNumerado({titulo , listaDePosteres}){
    return(
        <div className='carrossel-numerado'>
            <span className='carrossel-title'>{titulo}</span>
            <div className='carrossel-table'>
                {
                    listaDePosteres.slice(0,5).map((aux,index) =><div key={index} className='union'><span className='number'>{index+1}</span><img className='carrossel-img' src={aux} /></div>)
                }
            </div>
        </div>
    );
};

export default CarrosselNumerado;