import { useEffect, useRef } from 'react'

const Sidebar = () => {

    const hamRef = useRef<HTMLDivElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const hamMenu = hamRef.current
        const offScreenMenu = menuRef.current

        if ( hamMenu && offScreenMenu ) {
            
            const toggleMenu = () => {
                hamMenu.classList.toggle('active')
                offScreenMenu.classList.toggle('active')
            }

            hamMenu.addEventListener('click', toggleMenu)

            return () => {
                hamMenu.removeEventListener('click', toggleMenu)
            }

        }
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <div ref={hamRef} className="">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div ref={menuRef} className="">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident libero earum modi quasi rem aliquam? Vitae sint, rem, perferendis doloribus excepturi in sunt iste debitis atque aspernatur quo saepe!
                </p>
            </div>
        </div>
    )

}

export default Sidebar
