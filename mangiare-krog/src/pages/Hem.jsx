import dekorBild from '../assets/dekor.jpg';

export default function Home({ t }) {
  return (
  <>
    <div className="content">
      <div className="Textbox">
        <p>{t.aboutText1}</p>
        <p>{t.aboutText2}</p>
        <p>{t.aboutText3}</p>
      </div>
      <div className="Picbox">
        <img src={dekorBild} alt="Mangiare interior" />
      </div>
    </div>
    <div className="button-container">
      <button onClick={() => window.open('/meny.pdf', '_blank')} className="mail-link">
        {t.menu}
      </button>
    </div>
  </>
  )
}