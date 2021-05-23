import React, { Component } from "react"
import { dataAPI } from "../middleware"
import Presentation from "./Presentation"
import { connect } from "react-redux"
export class Container extends Component {
  handleNextPage = (page) => {
    this.props.dataAPI(page + 1)
  }
  render() {
    const { people, dataAPI, DarkTheme, } = this.props
    console.log(DarkTheme)
    return (
      <div>
        <Presentation
          people={people}
          dataAPI={dataAPI}
          handleNextPage={this.handleNextPage}
          DarkTheme={DarkTheme}
         
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    people: state.peopleData.dataReduce,
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {
    dataAPI: (page) => dispatch(dataAPI(page)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)
