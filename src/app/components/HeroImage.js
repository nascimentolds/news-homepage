"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import small from "../../../public/images/image-web-3-mobile.jpg";
import large from "../../../public/images/image-web-3-desktop.jpg";

function HeroImage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adiciona um ouvinte de redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Define o valor inicial do tamanho da tela
    setWindowWidth(window.innerWidth);

    // Remove o ouvinte de redimensionamento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine o caminho da imagem com base no tamanho da tela
  const imagePath = windowWidth <= 768 ? small : large;

  return (
    <div>
      <Image
        src={imagePath}
        alt="Imagem responsiva"
        // width={windowWidth <= 768 ? 400 : 800}
        // height={windowWidth <= 768 ? 400 : 400}
      />
    </div>
  )
}

export default HeroImage;