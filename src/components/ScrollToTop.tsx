import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? 'show' : ''}`}
      aria-label="Scroll to top"
    >
      <div className="bg-earth-warm hover:bg-earth-warm/90 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-elegant transition-smooth">
        <ChevronUp className="w-6 h-6" />
      </div>
    </button>
  );
};

export default ScrollToTop;