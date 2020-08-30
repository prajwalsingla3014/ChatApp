import React, { Component } from 'react'
import './mainlayout.css'
import Maintext from "./maintext";
import Addtext from "./addtext";
export default class mainlayout extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      texts:[
        {
          id:0,
          text:"" 
        }
      ],
      nextid:1
    };
  }
  addText = (addtext) => {
    let texts=this.state.texts.slice();
    texts.push({id:this.state.nextid,text:addtext});
    this.setState({
      texts:texts,
      nextid:++this.state.nextid
    });
  }
    render() {
        return (
            <div className="main">
              <img src={this.props.user.avatar} alt={this.props.user.name} id="image" />
              <i className="fa fa-folder"></i>
              <i className="fa fa-camera"></i>
              <i className="fa fa-video-camera"></i>
              <h4 id="username">{this.props.user.name}</h4>
              <h4 id="sentence">{this.props.user.sentence}</h4>
              <div className="content">
                <ul>
                  {
                    this.state.texts.map((text1) => {
                      return <Maintext text1={text1} key={text1.id} id={text1.id} user={this.props.user}/>
                    })
                  }
                </ul>
                <Addtext text=" " addText={this.addText} />
              </div>
            </div>
        )
    }
}
