import Footer from "../components/layout/Footer/index"
import React from "react"
import ScrollToTopButton from "../components/common/Buttons/ScrollToTop"
import ResponsiveHeader from "../components/layout/Header/ResponsiveHeader"

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#16161a]">
      <ResponsiveHeader />
      <main className="w-full">
        <ScrollToTopButton />
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LayoutPage