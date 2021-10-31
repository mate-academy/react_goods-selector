import React from 'react';

export const Title: React.FC = () => (
  <svg
    width="100%"
    height="100px"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path id="path">
      <animate
        attributeName="d"
        from="m550,60 h0"
        to="m550,60 h1100"
        dur="3s"
        begin="4.5s"
        fill="freeze"
        repeatCount="1"
      />
    </path>
    <text fontSize="38px">
      <textPath href="#path">
        CHOOSE YOUR GOODS
      </textPath>
    </text>
  </svg>
);
