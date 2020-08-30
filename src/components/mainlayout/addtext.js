import React, { Component } from 'react'

export default class addtext extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            value:this.props.text,
        }
        
    }
    handleChange = (e) => {
        this.setState({value: e.target.value});
      }
    addText = (text1) => {
        if (text1.length > 0) {
            this.props.addText(text1);
            this.setState({value: ''});
          }
    }
    render() {
        return (
            <div>
                <input id="inputfield" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter text ..." />
                <button className="btn btn-info" onClick={() => this.addText(this.state.value)} style={{background:"none",position:"absolute",top:"103.5%",left:"87%",height:"35px",width:"35px",outline:"none",border:"none"}}><i id="send" className="fa fa-arrow-circle-right"></i></button>
            </div>
        )
    }
}
