import React from 'react'
import type { HeaderNavigationProps } from '../../../types/Header'
import { NAVIGATION_ITEMS } from '../../../fixtures/header.fixture'
import { Link } from 'react-router'

const HeaderNav: React.FC<HeaderNavigationProps> = ({
    items = NAVIGATION_ITEMS,
}) => {

    return (
        <nav className="header-links">
            <ul className="header-menu flex text-2xl gap-5">
                {items.map((item) =>
                    <li key={item.id}>
                        <Link to={item.path} className='link'>
                            {item.label}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )

}

export default HeaderNav
