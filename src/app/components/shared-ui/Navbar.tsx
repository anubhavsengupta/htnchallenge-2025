

import React from 'react'
import LoginButton from './loginbutton'

function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">🌟 Logo</div>
      <LoginButton />
    </nav>
  )
}

export default Navbar