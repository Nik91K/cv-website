import { useState, useEffect } from 'react';
import '@components/layout/Sidebar/style.css';
import HeaderNav from '@components/layout/Header/HeaderNav';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="flex">
      <div
        className="ham-menu z-[801] fixed h-12 w-10 bg-[var(--transparent-color)] pointer top-8 left-5 rounded-sm"
        onClick={() => setOpen(!open)}
      >
        <span
          className={open ? 'ham-menu-span-active' : 'ham-menu-span'}
        ></span>
        <span
          className={open ? 'ham-menu-span-active' : 'ham-menu-span'}
        ></span>
        <span
          className={open ? 'ham-menu-span-active' : 'ham-menu-span'}
        ></span>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[799]"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={`
          p-2 flex flex-col justify-start
          pt-[25px]
          h-full w-full max-w-xs
          fixed top-0
          backdrop-blur-[4px]
          bg-[var(--transparent-color)]
          transition-all duration-300 ease-in-out
          ${open ? 'left-0 z-[800]' : '-left-[450px]'}
        `}
      >
        <div className="mt-10">
          <HeaderNav />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
