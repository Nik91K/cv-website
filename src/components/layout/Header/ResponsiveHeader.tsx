import Header from '@components/layout/Header/HeaderComponent';
import Sidebar from '@components/layout/Sidebar';
import { useEffect, useState } from 'react';

const ResponsiveHeader = () => {
  const [responsive, setResponsive] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (responsive) {
    return <Sidebar />;
  } else {
    return <Header />;
  }
};

export default ResponsiveHeader;
