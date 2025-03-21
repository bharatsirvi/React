import React from "react";
class UserClass extends React.Component {
  constructor(pros) {
    super(pros);
    this.state = {
      user:{}
    };
    console.log("Constructor Called")
  }
   async componentDidMount(){
     const data = await fetch("https://api.github.com/users/bharatsirvi");
     const json = await data.json();
     this.setState({
        user:json
     })
     console.log("componentDidMount Called")
  }
  render() {
    const { name,login } =this.state.user
    
    console.log("Render Called")
    return (


      <div className="user-card">
        <h2>{name}</h2>
        <p> Location : Pali</p>
        <p>{"Contact :"+login+"@gmail.com"}</p>
       
      </div>
    );
  }
}

export default UserClass;
