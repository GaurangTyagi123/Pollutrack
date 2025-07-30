import FooterStyles from '../styles/Footer.module.css'
import SVG from '../Images/footer_sprite.svg';

function Footer() {
    return (
        <div className={FooterStyles.footer}>
            <div className={FooterStyles.logo}>
                <h3 className={FooterStyles.logo__name}>Pollu Track</h3>
                <img src='./icon.ico' className={FooterStyles.logo__image} alt='logo'></img>
            </div>
            <div className={FooterStyles.socials}>
                <a className={FooterStyles.socials__container} href='https://github.com/GaurangTyagi123'>
                    <svg className={`${FooterStyles.socials__svg} ${FooterStyles['socials__svg--github']}`}>
                        <use xlinkHref={`${SVG}#icon-github` }></use>
                    </svg>
                    <span>github</span>
                </a>
                <a className={FooterStyles.socials__container} href='https://www.linkedin.com/in/gaurang-tyagi-a1b758236/`'>
                    <svg className={`${FooterStyles.socials__svg} ${FooterStyles['socials__svg--linkedin']}`}>
                        <use xlinkHref={`${SVG}#icon-linkedin` }></use>
                    </svg>
                    <span>linkedin</span>
                </a>
                <a className={FooterStyles.socials__container} href='https://www.reddit.com/user/poodsypapa/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'>
                    <svg className={`${FooterStyles.socials__svg} ${FooterStyles['socials__svg--reddit']}`}>
                        <use xlinkHref={`${SVG}#icon-reddit` }></use>
                    </svg>
                    <span>reddit</span>
                </a>
                <a className={FooterStyles.socials__container} href='https://www.instagram.com/gaurangg_tyagii/'>
                    <svg className={`${FooterStyles.socials__svg} ${FooterStyles['socials__svg--instagram']}`}>
                        <use xlinkHref={`${SVG}#icon-instagram` }></use>
                    </svg>
                    <span>instagram</span>
                </a>
            </div>
        </div>
    )
}

export default Footer
