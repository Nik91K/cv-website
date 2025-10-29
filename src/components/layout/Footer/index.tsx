import React from "react"
import type { Footer } from "../../../types/Footer"
import { FOOTER } from "../../../fixtures/footer.fixture"

const Footer: React.FC<Footer> = ({
    id = FOOTER.id,
    socials = FOOTER.socials,
    copyright = FOOTER.copyright,
    quickLinks = FOOTER.quickLinks,
}) => {
    return (
        <footer id={id} className="bg-gray-900 text-gray-300 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Connect With Me</h3>
                        <ul className="flex gap-4">
                            {socials.map((social) => {
                                const Icon = social.icon
                                return (
                                    <li key={social.id}>
                                        <a
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-gray-700 hover:text-[var(--purple-color-hover)] transition-colors duration-300"
                                        >
                                            <Icon size={20} />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.path}
                                        className="link text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:col-span-2 lg:col-span-1">
                        <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
                        <p className="text-gray-400 text-sm">
                            Open to new opportunities and collaborations.
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-6 mt-8">
                    <p className="text-center text-sm text-gray-500">{copyright}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer