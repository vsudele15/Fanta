// components/ProductCarousel.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Fanta4 from "../../assets/fanta4.png";
import Fanta5 from "../../assets/fanta5.png";
import Fanta6 from "../../assets/fanta6.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";


const products = [
  {
    id: 1,
    title: "Grape Fanta",
    description: "12 cans – $19.99",
    image: Fanta6,
    bgColor: "#7E3D9A",
  },
  {
    id: 2,
    title: "Berry Fanta",
    description: "12 cans – $21.99",
    image: Fanta4,
    bgColor: "#0459C2",
  },
  {
    id: 3,
    title: "Fruit Punch Fanta",
    description: "12 cans – $22.99",
    image: Fanta5,
    bgColor: "#FA4A62",
  },
];

const blobStyle = {
  clipPath: "url(#blob)",
};

const ProductCarousel = () => {
  const [current, setCurrent] = useState(0);
  const product = products[current];
  const blobOrbitRef1 = useRef(null);
  const blobOrbitRef2 = useRef(null);

  useEffect(() => {
  gsap.to(blobOrbitRef1.current, {
    rotate: 360,
    duration: 20,
    repeat: -1,
    ease: "none",
    transformOrigin: "center center",
  });

  gsap.to(blobOrbitRef2.current, {
    rotate: -360,
    duration: 20,
    repeat: -1,
    ease: "none",
    transformOrigin: "center center",
  });
}, []);



  const next = () => setCurrent((prev) => (prev + 1) % products.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section
      className="relative flex flex-col items-center justify-center text-white min-h-[100vh] px-4 overflow-visible"
      style={{ backgroundColor: product.bgColor }}
    >
      {/* SVG Blob Background */}
        {/* Outer Blob Orbiting */}
<div
  ref={blobOrbitRef1}
  className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
>
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <path
      fill="#ffffff33"
      transform="translate(100 100) scale(1)"
      d="M42.9,-75.7C55.7,-66.9,66.3,-55.7,74.4,-42.6C82.4,-29.6,87.9,-14.8,89.3,0.8C90.8,16.5,88.1,32.9,80.6,46.8C73,60.6,60.5,71.9,46.2,78.8C32,85.7,16,88.2,0.1,88C-15.8,87.8,-31.5,84.8,-45.4,77.7C-59.3,70.6,-71.4,59.4,-79.4,45.8C-87.4,32.2,-91.3,16.1,-91.7,-0.2C-92.2,-16.5,-89.1,-33.1,-80.6,-45.9C-72.1,-58.7,-58.2,-67.7,-43.8,-75.6C-29.5,-83.4,-14.8,-90.2,0.1,-90.4C15,-90.7,30.1,-84.4,42.9,-75.7Z"
    />
  </svg>

  {/* Inner Blob orbiting inside */}
  <div
    ref={blobOrbitRef2}
    className="absolute top-1/2 left-1/2 w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2"
  >
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <path
        fill="#ffffff55"
        transform="translate(100 100) scale(0.8)"
        d="M48.8,-62.6C57.1,-51.3,53.3,-30,51.3,-13.2C49.2,3.5,48.9,15.8,44.3,27.4C39.8,38.9,30.9,49.8,19.2,54.9C7.6,60.1,-6.9,59.5,-19.7,54.7C-32.5,49.8,-43.6,40.7,-53.8,28.4C-64,16.1,-73.5,0.8,-74.4,-16.4C-75.2,-33.6,-67.6,-52.5,-53.8,-62.9C-40,-73.2,-20,-75,0.1,-75.2C20.3,-75.3,40.6,-73.9,48.8,-62.6Z"
      />
    </svg>
  </div>
</div>

      <h2 className="text-3xl md:text-5xl font-bold mb-12">Choose Your Flavour</h2>

      {/* Image + Arrows */}
      <div className="flex items-center gap-8">
        <button
          onClick={prev}
          className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full hover:bg-white/20 transition"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <AnimatePresence mode="wait">
          <motion.img
            key={product.id}
            src={product.image}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="w-[180px] md:w-[240px] drop-shadow-xl"
          />
        </AnimatePresence>

        <button
          onClick={next}
          className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full hover:bg-white/20 transition"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Text */}
      <div className="mt-10 text-center space-y-2">
        <h3 className="text-2xl font-bold">{product.title}</h3>
        <p className="text-white/80">{product.description}</p>
      </div>
    </section>
  );
};

export default ProductCarousel;
