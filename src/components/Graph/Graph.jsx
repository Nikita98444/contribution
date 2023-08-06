import React from "react";
import classes from "./Graph.module.css"
import BoxData from './BoxData/BoxData'

//функцтональная компонента
const Graph = (props) => {

    let DataNow = new Date()/* .toISOString().slice(0,10) */; //текущая дата
    let DataEnd = DataNow;
    DataEnd.setDate(DataNow.getDate() - 7 * 50) //дата -50 недель
    DataEnd = DataEnd.toISOString().slice(0, 10) // Отбрасываем время
    console.log(DataEnd)
    let a = 0
    let graph = [] // Массив блоков
    while (a < 51) {
        a++
        graph.push(<BoxData />)
    }



    return (
            <div className={classes.container}>
                <div className={classes.blocks} >
                    <div className={classes.block} >
                        {graph}
                    </div>
                    <div className={classes.block} >
                        {graph}
                    </div>
                    <div className={classes.block} >
                        {graph}
                    </div>
                    <div className={classes.block} >
                        {graph}
                    </div>
                    <div className={classes.block} >
                        {graph}
                    </div>
                    <div className={classes.block} >
                        {graph}
                    </div>
                    <div className={classes.block} >
                        {graph}
                    </div>


                </div>
            </div>
    )
}

export default Graph