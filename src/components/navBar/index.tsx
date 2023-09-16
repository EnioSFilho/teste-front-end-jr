import '../../../styles/navBar/styles.scss'

function NavBar() {
    return (
        <div className='containerNavBar'>
            <div className='containerInternalNavBar'>
                <div className='line'></div>
                <div className='titleNavBar'>
                    <p>Produtos relacionados</p>
                </div>
                <div className='line'></div>
            </div>
            <div className='itensNavBar'>
                <div className='itemMolecule'>
                    <p style={{color:'#F71963', fontWeight: 700}}>celular</p>
                </div>
                <div className='itemMolecule'>
                    <p>acessórios</p>
                </div>
                <div className='itemMolecule'>
                    <p>tablets</p>
                </div>
                <div className='itemMolecule'>
                    <p>NOTEBOOKS</p>
                </div>
                <div className='itemMolecule'>
                    <p>TVs</p>
                </div>
                <div className='itemMolecule'>
                    <p>Ver todos</p>
                </div>

            </div>

        </div>
    )
}

export default NavBar
