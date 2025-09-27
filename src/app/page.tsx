'use client'
import { Montserrat } from 'next/font/google';
import { Product, producdDB } from './db';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';

// fonte
const montserratFont = Montserrat({
  variable: "--font--global",
  style: 'normal'
});

export default function Home() {
  // estado tipado
  const [product, setProduct] = useState<Product[]>([]);

  function infoProduct() {
    try {
      Swal.fire({
        icon: 'info',
        title: 'Informações',
        text: `Desenvolvido por CoddeX Developer`,
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro ao buscar dados!',
        text: `Um erro aconteceu ${error}`,
        timerProgressBar: true,
        timer: 2000
      })
    }
  }

  useEffect(() => {
    setProduct(producdDB);
  }, []);

  return (
    <div className={`container ${montserratFont.className}`}>
      <div className="description-page">
        <h1>Conheça a família Macbook.</h1>
        <p>Agora novos modelos M3.</p>
      </div>

      <div className="container-cards">
        {product.map((item, index) => (
          <div className="card-itens" key={index}>
            <Image
              src={item.imageURL}
              width={300}
              height={250}
              alt={item.title}
            />
            <h2>{item.title}</h2>
            <h3>{item.chipset}</h3>
            <p>{item.description}</p>
            <h4>{item.descriptionPrice}</h4>
            <div className="buttons-card">
              <button onClick={() => { infoProduct() }} className='button-info'>Saiba mais</button>
              <Link href={item.price}>
                <button className='button-payment'>Comprar</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
