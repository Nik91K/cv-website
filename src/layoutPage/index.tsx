import Header from "../components/layout/Header/index"
import Footer from "../components/layout/Footer/index"
import React from "react"
import ScrollToTopButton from "../components/common/Buttons/ScrollToTop"

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#16161a]">
      <Header />
      <main className="w-full">
        <ScrollToTopButton />
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LayoutPage