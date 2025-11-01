import React from "react";

type LinkProps = {
    label: string,
    link: string,
    className?: string,
}

const Link: React.FC<LinkProps> = ({
    className = '',
    link,
    label,
}) => {
    return (
        <a 
            href={link}
            className={`link ${className}`}               
            onClick={(e) => {
                e.preventDefault()
                const target = document.querySelector(link)
                target?.scrollIntoView({ behavior: 'smooth' })
            }}
        >
            {label}
        </a>
    )
}

export default Link
