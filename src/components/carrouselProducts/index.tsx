'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../styles/carrouselProducts/styles.scss';
import ArrowLeft from '../../../public/img/Vectorleft.png';
import ArrowRight from '../../../public/img/Vectorright.png';

type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: string;
};

const getData = async () => {
  const response = await axios.get<{ products: Product[] }>(
    'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'
  );
  return response.data.products;
};

function CarrouselProduts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselOffset, setCarouselOffset] = useState(0); 
  const itemsPerPage = 4;
  
  useEffect(() => {
    setCarouselOffset(currentIndex);
    
    document.documentElement.style.setProperty('--carousel-offset', `${-carouselOffset * (270 + 20)}px`);
  }, [currentIndex]);


  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        setProducts(data);
        setCarouselOffset(0); 
      } catch (error) {
        console.error('Erro ao buscar os dados da API:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className='containerCarrouselProducts'>
      <button
        type='button'
        style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer',position: 'relative', zIndex: 1 }}
        onClick={() => {
          if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setCarouselOffset(carouselOffset - 1); 
          }
        }}
        disabled={currentIndex === 0}
      >
        <img src={ArrowLeft.src} alt='' />
      </button>

      <div className='carrouselProducts'>
        {products.slice(currentIndex, currentIndex + itemsPerPage).map((product, index) => (
          <div className='cardCarrousel' key={index}>
            <div className='imageCard'>
              <img src={product.photo} alt={product.productName} />
            </div>
            <div className='productName'>
              <p>{product.productName}</p>
            </div>
            <div className='discount'>
              <p>R$ 30,90</p>
            </div>
            <div className='price'>
              <p>R$ 28,90</p>
            </div>
            <div className='textPrice'>
              <p>ou 2x de R$ 49,95 sem juros</p>
            </div>
            <div className='freight'>
              <p>Frete grátis</p>
            </div>
            <div className='buttonCard'>
              <a href="/">Comprar</a>
            </div>
          </div>
        ))}
      </div>

      <button
        type='button'
        style={{ border: 'none', backgroundColor: 'transparent', cursor: 'pointer',position: 'relative', zIndex: 1 }}
        onClick={() => {
          if (currentIndex + itemsPerPage < products.length) {
            setCurrentIndex(currentIndex + 1);
            setCarouselOffset(carouselOffset + 1); 
          }
        }}
        disabled={currentIndex + itemsPerPage >= products.length}
      >
        <img src={ArrowRight.src} alt='Arrow' />
      </button>
    </div>
  );
}

export default CarrouselProduts;
