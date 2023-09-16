import '../../../styles/HeaderBotton/styles.scss'
import Crown from "../../../public/img/CrownSimple.png"

function HeaderBotton() {
    return (
        <div className="containerHeaderBotton">
            <div className="menuHeaderBotton">
                <div>
                    <a>Todas Categorias</a>
                </div>
                <div>
                    <a>Supermercado</a>
                </div>
                <div>
                    <a>Livros</a>
                </div>
                <div>
                    <a>Moda</a>
                </div>
                <div>
                    <a>Lançamentos</a>
                </div>
                <div>
                    <a>Ofertas do dia</a>
                </div>
                <div className='crown'>
                    <img src={Crown.src} alt="" />
                    <a>Assinatura</a>
                </div>
            </div>
        </div>
    )
}

export default HeaderBotton
