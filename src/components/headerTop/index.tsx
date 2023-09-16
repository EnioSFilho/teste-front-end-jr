import Shield from '../../../public/img/ShieldCheck.png'
import Truck from '../../../public/img/Truck.png'
import Credit from '../../../public/img/CreditCard.png'
import "../../../styles/headerTop/styles.scss"


function HeaderTop() {
  return (
    <main className='containerHeader'>
      <div className='firstDivHeader'>
        <div className='buy'>
          <div>
            <img style={{ width: 20, height: 20, display: "flex" }} src={Shield.src} alt="shildcheck" />
          </div>
          <div className='textHeaderTop'>
            <p><span>Compra</span> 100% segura</p>
          </div>
        </div>
        <div className='truck'>
          <div>
            <img style={{ width: 20, height: 20, display: "flex" }} src={Truck.src} alt="Truck" />
          </div>
          <div className='textHeaderTop'>
            <p>Frete grátis <span>acima de R$ 200</span></p>
          </div>
        </div>
        <div className='credit'>
          <div>
            <img style={{ width: 20, height: 20, display: "flex" }} src={Credit.src} alt="CreditCard" />
          </div>
          <div className='textHeaderTop'>
            <p>Parcele <span>suas compras</span></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeaderTop
