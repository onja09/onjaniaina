import React from 'react'
import Contact from './Pages/Contact/Contact'
import Apropos from './Pages/Apropos/Apropos'
import Partenaire from './Pages/partenaire/Partenaire'
import Service from './Pages/Services/Service'
import Accueil from './Pages/Accueil/Accueil'

const Main = () => {
  return (
    <>
      <Accueil/>
    
      <Service/>
      <Partenaire/>
      <Apropos/>
      <Contact/>
    </>
  )
}

export default Main