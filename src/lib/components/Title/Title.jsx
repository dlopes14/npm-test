import React from "react";
import style from "./Title.module.css"

const Title = (props) => {
    return(
        <>
            <h1 className={style['title']}>{props.titulo}</h1>
        </>
    )
}

export {Title}