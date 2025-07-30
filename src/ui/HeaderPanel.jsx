import React, { useEffect } from 'react'
import HeaderStyle from '../Styles/Header.module.css'
import Sprite from '../Images/sprite.svg'



function HeaderPanel({ title, value, svgId, background, icon }) {
    const headerPanel = React.createRef();
    useEffect(() => {
        headerPanel.current.style.setProperty('--bg', `url(./background_images/${background.img}_background.jpg)`)
        headerPanel.current.style.setProperty('--panel-color', `${background.color}`)
        headerPanel.current.style.setProperty('--panel-border', `${background.border}`)
    }, [background, headerPanel])
    return (
        <section className={HeaderStyle.header__wrapper}>
            <div className={`${HeaderStyle.header__panel}`} ref={headerPanel}>
                <div className={HeaderStyle.heading}>
                    <h1 className={HeaderStyle.heading__title}>{title}</h1>
                    <small className={HeaderStyle.heading__value}><span>{value} {icon}</span>
                        {svgId}
                    </small>

                </div>
            </div>
        </section>
    )
}

export default HeaderPanel
