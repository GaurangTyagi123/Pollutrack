import Card from "../ui/Card";
import { useEffect, useState } from "react";
import styles from "../styles/Main.module.css"
import SVG from '../Images/serene_dove..svg';

function Cards({ region }) {
    const [cardData, setCardData] = useState([])
    const [cardLink, setCardLink] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch('./data/card_data.json');
            const data = await res.json();
            if (data.length > 0) {
                const { card_link } = data.at(0).card_link.find(link => link.region == region)
                setCardLink(card_link)
                setCardData(data)
            }
        }
        if (!cardData.length)
            getData()
    }, [cardData, region])

    return (
        <div className={styles.cards__container} id="guidelines">
            {cardData.map(card => {
                return <Card key={card.card_no} Title={card.card_title} link={cardLink} image={card.image_link} />
            })}
        </div>
    )
}

export default Cards
