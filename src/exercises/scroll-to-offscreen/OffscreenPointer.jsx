import React, { useState, useRef, useEffect } from "react";

import "./OffscreenPointer.css";

const OffscreenPointer = ({ children }) => {
  const itemRef = useRef(null);

  const [pointerPos, setPointerPos] = useState(null);

  useEffect(() => {
    const onIntersected = entry => {
      if (entry.isIntersecting) {
        setPointerPos(null);
      } else {
        // determine if item is above or below viewport
        if (entry.boundingClientRect.y <= entry.rootBounds.top) {
          setPointerPos("top");
        } else if (entry.boundingClientRect.y >= entry.rootBounds.bottom) {
          setPointerPos("bottom");
        }
      }
    };

    const observer = new IntersectionObserver(entries =>
      onIntersected(entries[0])
    );

    observer.observe(itemRef.current);
  }, []);

  const handleClick = () => {
    itemRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const getButtonContainerClass = () => {
    let className = "offscreen-pointer__button-container";
    if (pointerPos === "top") {
      className += " offscreen-pointer__button-container--up";
    } else if (pointerPos === "bottom") {
      className += " offscreen-pointer__button-container--down";
    }
    return className;
  };

  return (
    <>
      <div className="offscreen-pointer__item" ref={itemRef}>
        {children}
      </div>
      {pointerPos && (
        <div className={getButtonContainerClass()}>
          <button className="offscreen-pointer__button" onClick={handleClick}>
            Errors are on this page{" "}
            {pointerPos === "top" ? <>&#x2191;</> : <>&#x2193;</>}
          </button>
        </div>
      )}
    </>
  );
};

export default OffscreenPointer;
