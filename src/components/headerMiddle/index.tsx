import '../../../styles/headerMiddle/styles.scss'
import LogoVtex from '../../../public/img/logo.png'
import Box from '../../../public/img/Box.png'
import Heart from '../../../public/img/Heart.png'
import User from '../../../public/img/UserCircle.png'
import Cart from '../../../public/img/ShoppingCart.png'

function HeaderMiddle() {
  return (
    <div className='containerMiddle'>
      <div className='secondDivHeader'>
        <div className='logoHeader'>
            <img src={LogoVtex.src} alt="LogoVtex" id='logo'/>
        </div>
        <div className='searchMachine'>
            <input type="search" placeholder="O que você está buscando?" />
            <button type='button' className='glass'></button>
        </div>

        <div className='groupImages'>
            <div>
                <img src={Box.src} alt="Box" />
            </div>
            <div>
                <img src={Heart.src} alt="Heart" />
            </div>
            <div>
                <img src={User.src} alt="User" />
            </div>
            <div>
                <img src={Cart.src} alt="cart" />
            </div>
        </div>
      </div>      
    </div>
  )
}

export default HeaderMiddle
