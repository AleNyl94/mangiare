
export default function Boka({ t }) {
  return (
    <div className="contact-content">
      <div className="contact">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactSubtitle}</p>
        <a href="mailto:info@mangiare.se" className="mail-link">{t.emailUs}</a>
          
        <h3>{t.phone}</h3>
        <p>079 34 46 822</p>
          
        <h3>{t.findUs}</h3>
        <p>{t.findUsText}</p>
        <a className="links" href="https://www.iphone.fskab.se/xt/Regiontrafik/251214_260614/Regiontrafik_95_251214_260614.pdf" target="_blank" rel="noopener noreferrer">Buss 95</a>
        <a className="links" href="https://www.uber.com/se/sv/">Uber</a>
      </div>
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.6671966432723!2d17.29119231985027!3d60.7309514997883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4660c37de75c6405%3A0x2d8513080dc59a61!2sSolviksv%C3%A4gen%202c%2C%20805%2095%20G%C3%A4vle!5e0!3m2!1ssv!2sse!4v1780036267801!5m2!1ssv!2sse" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          width="100%" 
          height="300"
          style={{ border: 0, borderRadius: '8px' }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}