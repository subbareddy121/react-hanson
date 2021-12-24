import React, { Component } from 'react'



class Feedform extends Component {
    constructor(){
        super();
          this.state = {
              name:'',
              dept:'',
              rating:'',
              text:[]
              
            }
    }
    handlename=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handledept=(event)=>{
        this.setState({
            dept:event.target.value
        })
    }
    handlerating=(event)=>{
        this.setState({
            rating:event.target.value
        })
    }
 

  textmsg=(event)=>{
    event.preventDefault()
      const tempObj={
          name:this.state.name,
          dept:this.state.dept,
          rating:this.state.rating
      }
      const tempArr=this.state.text;
      tempArr.push(tempObj)
      this.setState({
        name:'',
        dept:'',
        rating:'',
        text:[...tempObj]
      })
  }
  
    render() {
        return (
            <div id='main'>
            <h1>Employee Feedback Form</h1>
            <form onSubmit={this.handlesubmit}>
            <label for="fname">Name :</label>
            <input type="text" id='fname' name='fname' value={this.state.name} onChange={this.handlename} /> <br/> <br/> 

            <label for="dept">Department :</label>
            <input type="text" id='dept' name='dept' value={this.state.dept} onChange={this.handledept} /> <br/><br/> 

            <label for="rank">Ranking :</label>
            <input type="number" id='rank' name='rank' value={this.state.rating} onChange={this.handlerating}/> <br/><br/> 
            <button onClick={ this.textmsg } id='submit'>Submit</button>

          </form>
         ,<div> 
          {
              this.state.text.map((value,index)=>{
                  return{
                    
                  }
              })
          }
          </div>
         </div>
            
        )
    }
}
export default Feedform;


