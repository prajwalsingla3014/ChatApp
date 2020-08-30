import React, { Component } from 'react'

export default class maintext extends Component {
    render() {
        return (
            <div>
                <h4 id="name1">{this.props.user.name}</h4>
                <i className="fa fa-circle" id="circle1"></i>
                <div className="box1">
                  <p style={{fontFamily:"Acme,sans-serif",marginLeft:"10px",position:"absolute",top:"23%"}}>Hi Ana, How you doing ?</p>
                </div>
                <h4 id="name2">Ana</h4>
                <i className="fa fa-circle" id="circle2"></i>
                <div className="box2">
                  <p style={{fontFamily:"Acme,sans-serif",marginLeft:"10px",position:"absolute",top:"23%"}}>Hi {this.props.user.name}, I am great what about you ?</p>
                </div>
                <h4 id="name3">{this.props.user.name}</h4>
                <i className="fa fa-circle" id="circle3"></i>
                <div className="box3">
                  <p style={{fontFamily:"Acme,sans-serif",marginLeft:"10px",position:"absolute",top:"23%"}}>I want to discuss about the article. When you'll be free ?</p>
                </div>
                <div>
                    <h4 id="name4">{this.props.user.name}</h4>
                    <i className="fa fa-circle" id="circle4"></i>
                    <div className="box4">
                    <p style={{fontFamily:"Acme,sans-serif",marginLeft:"10px",position:"absolute",top:"23%"}}>{this.props.text1.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}
