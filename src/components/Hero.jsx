import React from "react";
import Fanta1 from "../assets/fanta1.png";
import Fanta2 from "../assets/fanta2.png";
import Fanta3 from "../assets/fanta3.png";
import { UpdateFollower } from "react-mouse-follower";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Bubbles from "./Bubbles"; 

const SlideRight = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: 100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };
};

const imageVariants = {
  initial: { opacity: 0, x: 100 },
  enter: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  float: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};


const headphoneData = [
  {
    id: 1,
    image: Fanta1,
    title: "Orange Fanta",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$40",
    modal: "Orange",
    bgColor: "#cf4f00",
  },
  {
    id: 2,
    image: Fanta2,
    title: "Cola Zero",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Zero",
    bgColor: "#727272",
  },
  {
    id: 3,
    image: Fanta3,
    title: "Coca Cola",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos iusto minima ad ut id eos ad ut id eos",
    price: "$100",
    modal: "Cola",
    bgColor: "#ac1a00",
  },
];
const Hero = () => {
  const [activeData, setActiveData] = React.useState(headphoneData[0]);
  const bubbles = new Array(20).fill(0);
  const handleActiveData = (data) => {
    setActiveData(data);
  };

  return (
    <>
      <motion.section
        initial={{ backgroundColor: activeData.bgColor }}
        animate={{ backgroundColor: activeData.bgColor }}
        transition={{ duration: 0.8 }}
        className="bg-brandDark text-white min-h-screen"
      >
        {/* Bubble animation background */}
      <Bubbles count={50} speed={6} bubbleSize={0.08} opacity={0.3} />
        {/* navbar components */}
        <Navbar />

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[605px]">
          {/* ______ Headphone Info ______ */}
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px] order-2 md:order-1">
            <div className="space-y-5 text-center md:text-left">
              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    mixBlendMode: "difference",
                    scale: 10,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={SlideRight(0.2)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl xl:text-7xl font-bold font-handwriting text-shadow"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={SlideRight(0.4)}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-sm leading-loose text-white/80"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgColor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -720,
                    scale: 6,
                    backgroundElement: (
                      <div>
                        <img src={activeData.image} />
                      </div>
                    ),
                  }}
                >
                  <motion.button
                    key={activeData.id}
                    variants={SlideRight(0.6)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ color: activeData.bgColor }}
                    className="px-4 py-2 bg-white inline-block font-normal rounded-sm"
                  >
                    Order Now
                  </motion.button>
                </UpdateFollower>
              </AnimatePresence>

              {/* ______ Headphone List Separator ______ */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                className="flex items-center justify-center md:justify-start gap-4 !md:mt-24 !mb-10"
              >
                <div className="w-20 h-[1px] bg-white"></div>
                <p className="uppercase text-sm ">Top Recommendation</p>
                <div className="w-20 h-[1px] bg-white"></div>
              </motion.div>

              {/* Headphone list switcher */}
              {/* Headphone list switcher */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
  className="grid grid-cols-3 gap-8 items-end justify-items-center mt-6"
>
  {headphoneData.map((item) => (
    <UpdateFollower
      key={item.id}
      mouseOptions={{
        backgroundColor: item.bgColor,
        zIndex: 9999,
        followSpeed: 0.5,
        scale: 5,
        text: "View Details",
        textFontSize: "3px",
      }}
    >
      <div
        onClick={() => handleActiveData(item)}
        className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform"
      >
        {/* Equal height image container for alignment */}
        <div className="h-[120px] flex items-end">
          <img
            src={item.image}
            alt={item.title}
            className={`w-[70px] transition-all duration-300 img-shadow ${
              activeData.id === item.id
                ? "opacity-100 scale-110"
                : "opacity-60"
            }`}
          />
        </div>

        {/* Text below image */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-lg font-bold">{item.price}</p>
          {/* Optional: show model name */}
          {/* <p className="text-xs text-white/50">{item.modal}</p> */}
        </div>
      </div>
    </UpdateFollower>
  ))}
</motion.div>

            </div>
          </div>

          {/* ______ Hero Image ______ */}
          <div className="flex flex-col justify-end items-center relative order-1 md:order-2 ">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                variants={imageVariants}
                initial="initial"
                animate={["enter", "float"]}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop",ease: "easeInOut", }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,
                  x: -100,

                  transition: {
                    duration: 0.4,
                  },
                }}
                src={activeData.image}
                alt=""
                className={`img-shadow relative z-10 `}
              />
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeData.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0, ease: easeInOut }}
                exit={{
                  opacity: 0,
                  // scale: 0.9,

                  transition: {
                    duration: 0.4,
                  },
                }}
                className="text-white/5 text-[300px] font-poppins font-extrabold absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
              >
                {activeData.modal}
              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
