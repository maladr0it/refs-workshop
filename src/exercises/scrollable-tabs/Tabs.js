import React, { useState, useLayoutEffect, useRef } from "react";

import "./Tabs.css";

const Tabs = ({ data, initialTabIndex = 0, className }) => {
  const contentRef = useRef(null);
  const [tabIndex, setTabIndex] = useState(initialTabIndex);

  useLayoutEffect(() => {
    contentRef.current.scrollTop = 0;
  }, [tabIndex]);

  return (
    <div className={`tabs__container ${className}`}>
      <nav className="tabs__labels">
        {data.map((item, i) => (
          <span
            key={i}
            className={`tabs__label ${
              tabIndex === i ? "tabs__label--selected" : ""
            }`}
            onClick={() => setTabIndex(i)}
          >
            {item.label}
          </span>
        ))}
      </nav>
      <div className="tabs__content" ref={contentRef}>
        {data[tabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
