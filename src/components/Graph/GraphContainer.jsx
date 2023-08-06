import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Graph from './Graph'

//Делаю классовую компоненту, чтобы сделатчь запрос
//Контейнерная компонента нужна, чтобы снабдить данными и не засорять презентационную компоненту
class GraphContainer extends React.Component {

    componentDidMount(){
        
    }



    render() {

        return (
            <div >
                <Graph />
            </div>

        )
    }
}





let mapStateToProps = (state)=>({
    calendarData: state.graph.calendarData
})




export default compose(
    connect(mapStateToProps,{}),
)(GraphContainer) 