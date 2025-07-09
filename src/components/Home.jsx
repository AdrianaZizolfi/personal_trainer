import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../layouts/Button";

const Home = () => {
  const h1Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial state
    gsap.set(h1Ref.current, { 
      x: 200, 
      opacity: 0, 
      scale: 0.8,
      rotationX: 45
    });
    
    gsap.set(buttonRef.current, { 
      y: 50, 
      opacity: 0, 
      scale: 0.9
    });

    // Create overlapping glitch text elements
    const createGlitchText = () => {
      const h1Element = h1Ref.current;
      const originalText = h1Element.textContent;
      const glitchElements = [];
      
      // Create multiple overlapping text elements
      for (let i = 0; i < 4; i++) {
        const glitchEl = document.createElement('span');
        glitchEl.textContent = originalText;
        glitchEl.style.position = 'absolute';
        glitchEl.style.top = '0';
        glitchEl.style.left = '0';
        glitchEl.style.width = '100%';
        glitchEl.style.height = '100%';
        glitchEl.style.opacity = '0';
        glitchEl.style.zIndex = '10';
        glitchEl.style.pointerEvents = 'none';
        
        // Different colors for each glitch layer
        const colors = ['#c3d312', '#ff0080', '#00ffff', '#ffffff'];
        glitchEl.style.color = colors[i];
        
        // Add text shadow for more intensity
        glitchEl.style.textShadow = `2px 2px 0px ${colors[i]}`;
        
        h1Element.appendChild(glitchEl);
        glitchElements.push(glitchEl);
      }
      
      return glitchElements;
    };

    // Main animation sequence
    tl.to(h1Ref.current, {
      x: 0,
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 0.8,
      ease: "back.out(1.7)"
    })
    .call(() => {
      // Create and animate glitch text
      const glitchElements = createGlitchText();
      
      glitchElements.forEach((element, index) => {
        // Animate each glitch element with different directions and timings
        const direction = index % 2 === 0 ? 1 : -1; // Alternate directions
        const offset = (index + 1) * 3; // Different offsets for each layer
        
        gsap.timeline({ repeat: 3, yoyo: true })
          .to(element, {
            opacity: 0.8,
            x: direction * offset,
            y: 0, // No vertical movement
            duration: 0.03,
            ease: "none"
          })
          .to(element, {
            opacity: 0.6,
            x: direction * -offset * 0.5,
            y: 0,
            duration: 0.03,
            ease: "none"
          })
          .to(element, {
            opacity: 0.4,
            x: direction * offset * 0.8,
            y: 0,
            duration: 0.03,
            ease: "none"
          })
          .call(() => {
            // Clean up after animation
            setTimeout(() => {
              if (element.parentNode) {
                element.remove();
              }
            }, 100);
          }, [], "+=0.1");
      });
    }, [], "-=0.2")
    .to(buttonRef.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.75)"
    }, "-=0.4");
  }, []);

  return (
    <div className="min-h-screen flex flex-row justify-between md:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center">
        <h1 
          ref={h1Ref}
          className="text-7xl font-semibold md:text-start text-center md:w-2/3 relative overflow-hidden"
          style={{ minHeight: '180px' }}
        >
          TUO IL CORPO, TUE LE REGOLE.
        </h1>

        <div 
          ref={buttonRef}
          className="w-full md:w-2/4 mt-5 flex flex-row justify-center"
        >
          <Button title="Scopri i Piani" />
        </div>
      </div>
    </div>
  );
};

export default Home;