import Header from "../components/layout/Header/index"
import Footer from "../components/layout/Footer/index"
import React from "react"

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#16161a]">
      <Header />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default LayoutPage