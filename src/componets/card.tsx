import React, { FC } from "react";

const pippo = "https://www.topolino.it/wp-content/uploads/2019/12/pippointera.png";
const pluto = "https://www.topolino.it/wp-content/uploads/2019/12/plutointera.png";
const paperino = "https://www.topolino.it/wp-content/uploads/2019/11/paperinointera_360.png";

const getImgRandom = () => {
    const random = Math.random();

    return  random < 0.3 ? pippo 
            : random < 0.6 ? paperino 
            : pluto;
}

type CardProps ={name:string, imgIndex: number}

const Card: FC<CardProps> = (props: CardProps) =>{

    const {name, imgIndex} = props;
    const images = [pippo,pluto,paperino]

    return(
        <div className="card">
            <h1>{name}</h1>
            <img src={images[imgIndex]} alt={name} />
        </div>
    )
}


export default Card;