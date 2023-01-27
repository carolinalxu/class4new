import styles from './Card.module.css';

export default function Card({
    degree ="none",
    color = "purple",
    font="0",
    image="icon/personTwo.png"
}) {
    return(
        <div className={styles.card__container} style={{backgroundColor: color}}>
            {
                color==="#F7B2B7" ?     <img src={'icon/businessicon.png'} width='50' /> :
                color==="#DE639A" ?    <img src={'icon/computericon.png'} width='50' /> :
                                    <img src={image} width='50' />
            }
            {degree}
        </div>
    )
}