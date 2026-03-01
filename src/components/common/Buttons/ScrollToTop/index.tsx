import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { Button } from '@components/ui/button';
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed right-8 bottom-8 pointer"
        >
          <FaArrowUp size={18} />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
