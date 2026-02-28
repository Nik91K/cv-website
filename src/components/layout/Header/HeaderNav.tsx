import React from 'react';
import type { HeaderNavigationProps } from '@/types/Header';
import { NAVIGATION_ITEMS } from '@fixtures/header.fixture';
import Link from '@components/common/Buttons/Link';

const HeaderNav: React.FC<HeaderNavigationProps> = ({
  items = NAVIGATION_ITEMS,
}) => {
  return (
    <nav className="flex justify-center mx-auto whitespace-nowrap">
      <ul className="flex flex-col md:flex-row text-2xl md:text-xl gap-5">
        {items.map(item => (
          <li key={item.id}>
            <Link link={item.path} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
