import React from "react";
import classes from "./Graph.module.css"
import BoxData from './BoxData/BoxData'

//функцтональная компонента
const Graph = (props) => {

    let DataNow = new Date()/* .toISOString().slice(0,10) */; //текущая дата
    let DataEnd = DataNow;
    DataEnd.setDate(DataNow.getDate() - ((7 * 50) + 7)) //дата -50 недель
    DataEnd = DataEnd.toISOString().slice(0, 10) // Отбрасываем время
    console.log(DataEnd)
    let a = 0
    let graph1 = [] // Массив блоков
    let graph2 = [] // Массив блоков
    let graph3 = [] // Массив блоков
    let graph4 = [] // Массив блоков
    let graph5 = [] // Массив блоков
    let graph6 = [] // Массив блоков
    let graph7 = [] // Массив блоков
    while (a < 357) {
        a++
        if(a <= 51){
            graph1.push(<BoxData key={a} />)
        }
        else if(a<=102){
            graph2.push(<BoxData key={a} />)
        }
        else if(a<=153){
            graph3.push(<BoxData key={a} />)
        }
        else if(a<=204){
            graph4.push(<BoxData key={a} />)
        }
        else if(a<=255){
            graph5.push(<BoxData key={a} />)
        }
        else if(a<=306){
            graph6.push(<BoxData key={a} />)
        }
        else if(a<=357){
            graph7.push(<BoxData key={a} />)
        }


    }



    return (<div>
        <div>
            <div style={{ color: '#C8C7C7', marginTop: -2, position: "absolute", marginLeft: 280 }}>
                Пн.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: 40, position: "absolute", marginLeft: 280 }}>
                Ср.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: 85, position: "absolute", marginLeft: 280 }}>
                Пт.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 340 }}>
                Апр.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 415 }}>
                Май.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 510 }}>
                Июнь.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 610 }}>
                Июль.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 710 }}>
                Авг.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 810 }}>
                Сент.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 895 }}>
                Окт.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 995 }}>
                Нояб.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 1095 }}>
                Дек.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 1195 }}>
                Янв.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 1295 }}>
                Февр.
            </div>
            <div style={{ color: '#C8C7C7', marginTop: -30, position: "absolute", marginLeft: 1395 }}>
                Март.
            </div>
        </div>
        <div>
            <div style={{
                color: '#C8C7C7', marginTop: 170, position: "absolute", marginLeft: 310,
                fontSize: 14
            }}>
                Меньше
            </div>
            <div style={{
                position: "absolute", marginTop: 170, marginLeft: 370,
                width: 20, height: 20,
                backgroundColor: "#EDEDED",
            }}>
            </div>
            <div style={{
                position: "absolute", marginTop: 170, marginLeft: 395,
                width: 20, height: 20,
                backgroundColor: "#ACD5F2",
            }}>
            </div>
            <div style={{
                position: "absolute", marginTop: 170, marginLeft: 420,
                width: 20, height: 20,
                backgroundColor: "#7FA8C9",
            }}>
            </div>
            <div style={{
                position: "absolute", marginTop: 170, marginLeft: 445,
                width: 20, height: 20,
                backgroundColor: "#527BA0",
            }}>
            </div>
            <div style={{
                position: "absolute", marginTop: 170, marginLeft: 470,
                width: 20, height: 20,
                backgroundColor: "#254E77",
            }}>
            </div>
            <div style={{
                color: '#C8C7C7', marginTop: 170, position: "absolute", marginLeft: 500,
                fontSize: 14
            }}>
                больше
            </div>

        </div>

        <div className={classes.container}>
            <div className={classes.blocks} >
                <div className={classes.block} >
                    {graph1}
                </div>
                <div className={classes.block} >
                    {graph2}
                </div>
                <div className={classes.block} >
                    {graph3}
                </div>
                <div className={classes.block} >
                    {graph4}
                </div>
                <div className={classes.block} >
                    {graph5}
                </div>
                <div className={classes.block} >
                    {graph6}
                </div>
                <div className={classes.block} >
                    {graph7}
                </div>
            </div>
        </div>

    </div>
    )
}

export default Graph