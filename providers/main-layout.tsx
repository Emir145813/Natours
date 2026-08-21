"use client"
import React from 'react'
import TanstackProvider from './tanstack-provider'

function MainLayout({children} : {children : React.ReactNode}) {
  return (
    <TanstackProvider>
      {children}
    </TanstackProvider>
  )
}

export default MainLayout