import mat from '../assets/pasta.jpg'
export default function Catering({ t }) {
  return (
    <div className="catering">
      <h1>{t.navCatering}</h1>
      <div className="catering-text">
        <p>{t.cateringText}</p>
        <p>{t.cateringText2}</p>
        <p>{t.cateringText3}</p>
      </div>
      <img src={mat} alt="Pasta" />
      <div className="catering-includes">
        <p>{t.cateringText4}</p>
        <ul>
          <li>{t.cateringText5}</li>
          <li>{t.cateringText6}</li>
          <li>{t.cateringText7}</li>
        </ul>
      </div>
      <a href="mailto:info@mangiare.se" className="mail-link">{t.offert}</a>
    </div>
  )
}