import React from 'react'
import type { HeaderNavigationProps } from '../../../types/Header'
import { NAVIGATION_ITEMS } from '../../../fixtures/header.fixture'

const HeaderNav: React.FC<HeaderNavigationProps> = ({
    items = NAVIGATION_ITEMS,
}) => {

    return (
        <nav className="flex justify-center mx-auto whitespace-nowrap">
            <ul className="flex flex-col md:flex-row text-2xl md:text-xl gap-5">
                {items.map((item) =>
                    <li key={item.id}>
                        <a 
                            href={item.path}
                            className='link'               
                            onClick={(e) => {
                                e.preventDefault()
                                const target = document.querySelector(item.path)
                                target?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default HeaderNav
