import '../../../styles/marketItens/styles.scss'
import Device from '../../../public/img/devices.png'
import Market from '../../../public/img/market.png'
import Whiskey from '../../../public/img/whiskey.png'
import Tools from '../../../public/img/tools.png'
import Health from '../../../public/img/health.png'
import Fitness from '../../../public/img/fitness.png'
import Dress from '../../../public/img/dress.png'


function MarketItens() {
    return (
        <div className='containerMarketItens'>
            <div className='containerItens'>

                <div className='teste'>
                    <div className='squareItens'>
                        <img src={Device.src} alt="Device" />
                    </div>
                    <div className='textItens'>
                        <p style={{ color: "#F71963" }}>Tecnologia</p>
                    </div>
                </div>
                <div>
                    <div className='squareItens'>
                        <img src={Market.src} alt="Device" />
                    </div>
                    <div className='textItens'>
                        <p>Supermercado</p>
                    </div>
                </div>
                <div>
                    <div className='squareItens'>
                        <img src={Whiskey.src} alt="Device" />
                    </div>
                    <div className='textItens'>
                        <p>Bebidas</p>
                    </div>
                </div>
                <div>
                    <div className='squareItens'>
                        <img src={Tools.src} alt="Device" />
                    </div>
                    <div className='textItens'>
                        <p>Ferramentas</p>
                    </div>
                </div>
                <div>
                    <div className='squareItens'>
                        <img src={Health.src} alt="Device" />
                    </div>
                    <div className='textItens'>
                        <p>Saúde</p>
                    </div>
                </div>
                <div>
                    <div className='squareItens'>
                        <img src={Fitness.src} alt="Device" />
                    </div>
                    <div className='textItens'>
                        <p>Esportes e Fitness</p>
                    </div>
                </div>
                <div>
                    <div className='squareItens'>
                        <img src={Dress.src} alt="Device" />
                    </div>
                    <div className='textItens'>
                        <p>Moda</p>
                    </div>
                </div>



            </div>


        </div>
    )
}

export default MarketItens
