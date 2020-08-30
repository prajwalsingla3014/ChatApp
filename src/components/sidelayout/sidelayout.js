import React, { Component } from 'react'
import './sidelayout.css'
import Faker from 'faker'
import MainLayout from "../mainlayout/mainlayout"
import Main from "../mainlayout/main";
import '../mainlayout/main.css'
export default class sidelayout extends Component {
    constructor(props)
    {
      super(props)
      this.state={
        active:false,
        users:[],
        selectedId:' ',
        item:' '
      }
    }
    componentWillMount = async () => {
        for(let i=0;i<6;i++)
        {
          const user={
            id:Faker.random.number(),
            name:Faker.name.firstName(),
            avatar:Faker.internet.avatar(),
            time:Faker.date.weekday(),
            text:Faker.lorem.word(),
            sentence:Faker.lorem.sentence()
          }
          await this.setState(prevState => ({
            users:[...prevState.users,user]
          }))
        }
      }
      renderUsers = (user) => {
        return (
          <div>
            <div className="container-second">
                <img src={user.avatar} alt={user.name} id="image" />
                <h4 id="name"><button className="btn" onClick={() => this.setIdHandler(user.id)} style={{fontSize:'16px',marginTop:'-5px',width:'60%',background:"none",border:"none",outline:"none"}}>{user.name}</button></h4>
                <h4 id="time">{user.time}</h4>
                <h4 id="text">{user.text}</h4>
            </div>
          </div>
        )
      }
      setIdHandler = (id) => {
        let itemIndex=this.state.users.findIndex(user => user.id === id);
        console.log(itemIndex);
        let item;
        if(itemIndex !==-1)
        {
            item=this.state.users[itemIndex];
            this.setState({selectedId:id,item,active:true});
        }
        else
        {
            this.setState({selectedId:'',item:'',active:false});
        }
    }
    render() {
        return (
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <div className="sidelayout">
                    <img src={this.state.users[0].avatar} alt={this.state.users[0].name} id="image" />
                    <div className="search">
                      <input type="text" placeholder="Search" />
                      <i className="fa fa-search"></i>
                    </div>
                    <i className="fa fa-ellipsis-v"></i>
                  </div>
                  {this.state.users.map(user => this.renderUsers(user))}
                </div>
                <div className={this.state.active ? "none" : "col-8"}>
                  <Main />
                </div>
                <div className={this.state.active ? "col-8" : "none"}>
                  {this.state.selectedId ? <MainLayout user={this.state.item}/> : null}
                </div>
              </div>
            </div>
        )
    }
}
