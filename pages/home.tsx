import CarrouselProduts from '@/components/carrouselProducts'
import HeaderBotton from '@/components/headerBotton'
import HeaderMiddle from '@/components/headerMiddle'
import HeaderTop from '@/components/headerTop'
import ImageBunner from '@/components/imageBunner'
import MarketItens from '@/components/marketItens'
import NavBar from '@/components/navBar'
import React from 'react'

function Home() {
  return (
   <>
   <HeaderTop/> 
   <HeaderMiddle/>  
   <HeaderBotton/>
   <ImageBunner/>
   <MarketItens/>
   <NavBar/>
   <CarrouselProduts/>
   </>
  )
}

export default Home
