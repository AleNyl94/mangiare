import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom'
import { translations } from './data.js'
import './index.css'
import baren from './assets/baren.jpg'

import Catering from './pages/Catering.jsx'
import Hem from './pages/Hem.jsx'
import Boka from './pages/Boka.jsx'

const Layout = ({ lang, setLang, t }) => (
    <div className="site-wrapper">
      <div className="current-language-display">
        <button className={lang === 'sv' ? 'active-lang' : ''} onClick={() => setLang('sv')}>🇸🇪</button>
        <button className={lang === 'en' ? 'active-lang' : ''} onClick={() => setLang('en')}>🇬🇧</button>
        <span>{lang === 'sv' ? 'Svenska' : 'English'}</span>
      </div>
      <header className="Storbild"
        style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${baren})` 
        }}
      >
        <h1>{t.heroTitle}</h1>
        <h2>{t.heroSubtitle}</h2>
      </header>

      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-nav' : ''}>
          {lang === 'sv' ? 'HEM' : 'HOME'}
        </NavLink>
        <NavLink to="/catering" className={({ isActive }) => isActive ? 'active-nav' : ''}>
          {t.navCatering}
        </NavLink>
        <NavLink to="/boka" className={({ isActive }) => isActive ? 'active-nav' : ''}>
          {t.navBoka}
        </NavLink>
      </nav>

      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footbox">
          <h3>{t.address}</h3>
          <p>Solviksvägen 2C<br />80595 Gävle<br />079 34 46 822</p>
        </div>
        <div className="footbox">
          <h3>{t.hours}</h3>
          <p>{t.hoursText1}</p>
          <p>{t.hoursText2}</p>
        </div>
        <div className="footbox">
          <h3>{t.partners}</h3>
          <p>Gävle camping Engelsberg<br />Svensk cater<br />Arvid Nordqvist<br /> Qopla<br />Salongen 91</p>
        </div>
      </footer>
              <div className="social-icons">
          <a href="https://www.instagram.com/mangiare.se/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src="/instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.facebook.com/p/Mangiare-k%C3%B6k-bar-61585309450122/" target="_blank" rel="noopener noreferrer" className="icon-link">
            <img src="/Facebook.svg" alt="Facebook" />
          </a>
          </div>
    </div>
)

export default function App() {
  const [lang, setLang] = useState('sv')
  const t = translations[lang]


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout lang={lang} setLang={setLang} t={t} />}>
          <Route path="/" element={<Hem t={t} />} />
          <Route path="/catering" element={<Catering t={t} />} />
          <Route path="/boka" element={<Boka t={t} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
