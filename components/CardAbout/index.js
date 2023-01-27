import styles from './CardAbout.module.css'

export default function Card ({
    name="none",
    position="none",
    colourCard="none",
    colourInfo="none",
    font="0",
    fontColour="white",

}) {
    return (
        <div style={{
            backgroundColor: colourCard, 
            fontSize: font,
            color: fontColour, 
        }} className={styles.card__container}>
            <div>
                {
                    name === "beedeen tran" ? <img src={'icon/brandon.jpeg'} width={"100px"} />:
                    name === "brandy tran" ? <img src={'icon/brandon.jpeg'}  width={"100px"} />:
                    name === "brandon tran" ? <img src={'icon/brandon.jpeg'} width={"100px"}/>:
                    <img src={image}/>
                }
            </div>
            <div className={styles.name__area}>
                <div className={styles.name__content}>
                    {name}
                </div>
                    {position}
            </div>
        </div>   
    )
}