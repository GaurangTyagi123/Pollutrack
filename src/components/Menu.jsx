import MenuStyles from '../styles/Menu.module.css'

function Menu({ region, country }) {

    return (
        <div className={MenuStyles.menu__container}>
            <ul className={MenuStyles.menu__container__list}>
                <a href="#header"><li className={MenuStyles.menu__container__listitem}>Current Weather</li></a>
                <a href="#forecast"><li className={MenuStyles.menu__container__listitem}>Forecast</li></a>
                <a href="#guidelines"><li className={MenuStyles.menu__container__listitem}>Guidelines</li></a>
                <li className={`${MenuStyles['menu__container__listitem--highlight']} ${MenuStyles['u-no_decoration']}`}><span>{country || 'India'}: {region || 'Delhi'}</span></li>
            </ul>
        </div>
    )
}

export default Menu
