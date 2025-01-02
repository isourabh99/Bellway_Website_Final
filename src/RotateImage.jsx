import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const RotateImage = () => {

  const imgRef = useRef(null);

  useEffect(() => {

    gsap.from(
      imgRef.current,

      {
        // x: 200,
        // rotate: 180,
        // duration: 10,
        // ease: "elastic",
      }
    );
  }, []);

  return (
    <img
      loading="lazy"
      ref={imgRef}
      src="https://static.vecteezy.com/system/resources/previews/020/975/579/non_2x/wordpress-logo-wordpress-icon-transparent-free-png.png"
      alt="WordPress Logo"
      className="w-full lg:w-[60%] hover:scale-105 mt-10 h-auto  transition-all duration-500 ease-in-out "
    />
  );
};

export default RotateImage;
