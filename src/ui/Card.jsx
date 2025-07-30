import CardStyles from '../styles/Card.module.css'

function Cards({ Title, link, image }) {
  return (
    <div className={CardStyles.card}>
      <img alt='card__image' className={CardStyles.card__image} src={image.split("public/")[1]}></img>
          <h3 className={CardStyles.card__title}>{Title}</h3>
      <a className={CardStyles.card__button} href={link} target='_blank' rel='noreferrer'><span>Click here</span></a>
    </div>
  )
}

export default Cards
