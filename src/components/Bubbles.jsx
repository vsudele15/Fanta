// Bubbles.jsx
import React from "react";

export function Bubbles({
  count = 300,
  speed = 5,
  bubbleSize = 0.05, // relative to viewport width
  opacity = 0.5,
  repeat = true,
}) {
  const bubbles = new Array(count).fill(0);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((_, i) => {
        const size = `${Math.random() * bubbleSize * 100}vw`;
        const left = `${Math.random() * 100}%`;
        const delay = `${Math.random() * speed}s`;
        return (
          <div
            key={i}
            className="bubble"
            style={{
              "--size": size,
              "--left": left,
              "--speed": `${speed}s`,
              "--opacity": opacity,
              animationDelay: delay,
              animationIterationCount: repeat ? "infinite" : 1,
            }}
          />
        );
      })}
    </div>
  );
}

export default Bubbles;