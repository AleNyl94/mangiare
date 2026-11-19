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
  </>
  )
}