import React from "react";
import { connect } from "react-redux";
import Graph from './Graph'
import {calendarDataThunk} from './../../redux/graphReducer'

//Делаю классовую компоненту, чтобы сделатчь запрос
//Контейнерная компонента нужна, чтобы снабдить данными и не засорять презентационную компоненту
class GraphContainer extends React.Component {

    componentDidMount(){
         this.props.calendarDataThunk()
    }



    render() {

        return (
            <div >
                <Graph {...this.props}/>
            </div>

        )
    }
}





let mapStateToProps = (state)=>({
    calendarData: state.graph.calendarData
})




export default connect(mapStateToProps,{calendarDataThunk})(GraphContainer) 