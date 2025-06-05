import { useState, useEffect } from "react";
const Carousel = () => {
  const [slide, setslide] = useState([]);
  const [crndot, setcrndot] = useState();
  const Slider = (slides, timeout) => {
    let current = -1;
    const loop = () => {
      if (current < slides.length-1 ) {
        current++;
      } else if (current <= slides.length) {
        current=0;
      }  
      setcrndot(current);
      setslide(slides[current]);

      setTimeout(() => {
        loop();
      }, timeout);
    };

    loop();
  };
  let slides = [
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/0256f74fd6721427.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/3041950f2a4398f3.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/782b61df661bbdfb.jpeg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=20",
  ];

  useEffect(() => {
    Slider(slides,3000);
  }, []);

  return (
    <>
      <div className="carosel-wrapper h-auto bg-white relative xs:m-1 flex justify-center items-center flex-col pt-1 sm:m-2 lg:m-1 xl:m-3">
        <div className="carousel-imgage-container flex items-center p-2">
          <picture>
            <img
              src={slide}
              alt=""
              className="xs:rounded-md"
            />
          </picture>
        </div>
        <div className="current-dot-wrapper flex justify-center items-center xs:py-1 my-1">
          {slides.map((cur, index) => (
            <div
              className={`dot border-gray-400 ${
                crndot == index ? " bg-black" : "bg-white"
              } xs:h-1 w-1 m-1 border-2 rounded lg:h-2 lg:w-2 lg:rounded xl:`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
