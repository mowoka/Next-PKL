import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const Layout = (props: LayoutProps) => {
  const { children } = props
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
