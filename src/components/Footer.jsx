import FooterStyles from '../styles/Footer.module.css'
import SVG from '../Images/footer_sprite.svg';
import { FaGithub, FaInstagram, FaLinkedin, FaRedditAlien } from "react-icons/fa";

function Footer() {
    return (
        <div className={FooterStyles.footer}>
            <div className={FooterStyles.logo}>
                <h3 className={FooterStyles.logo__name}>Pollu Track</h3>
                <img src='./icon.ico' className={FooterStyles.logo__image} alt='logo'></img>
            </div>
            <div className={FooterStyles.socials}>
                <a className={FooterStyles.socials__container} href='https://github.com/GaurangTyagi123'>
                    <FaGithub className={`${FooterStyles.socials__svg} ${FooterStyles['socials__svg--github']}`} />
                    <span>github</span>
                </a>
                <a className={FooterStyles.socials__container} href='https://www.linkedin.com/in/gaurang-tyagi-a1b758236/`'>
                    <FaLinkedin className={`${FooterStyles.socials__svg} ${FooterStyles['socials__svg--linkedin']}`} />
                    <span>linkedin</span>
                </a>
                <a className={FooterStyles.socials__container} href='https://www.reddit.com/user/poodsypapa/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button'>
                    <FaRedditAlien className={`${FooterStyles.socials__svg} ${FooterStyles['socials__svg--reddit']}`} />
                    <span>reddit</span>
                </a>
                <a className={FooterStyles.socials__container} href='https://www.instagram.com/gaurangg_tyagii/'>
                    <FaInstagram className={`${FooterStyles.socials__svg} ${FooterStyles['socials__svg--instagram']}`} />
                    <span>instagram</span>
                </a>
            </div>
        </div>
    )
}

export default Footer
