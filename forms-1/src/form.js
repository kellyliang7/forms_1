import React, { Component } from "react";
import countries from "./countries.js";



class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            birthdate: "", 
            country: "",
            dietaryPreference: "",
            reason:"",
            underwater: "",
            marital: "",
            confirm: false,
            completed: false
        }
    }
    handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
       
    }

    checkCompleted = () => {
      const vals = Object.values(this.state)
      return vals.every(el => el !== "" ) 
    }  
    
    formConfirmed = (event) => {
      event.preventDefault()
      this.setState({confirm: this.checkCompleted()})
    }
    
    formCompleted = () => {
      this.setState({completed: true})
    }

    render(){      
      if(!this.state.completed){
        return(
          <div>
              <h1 className="orange">Missions to Mars Registration Form</h1>
            <div>
              <form>
              <label htmlFor= "Name"> Name </label>
              <input onChange={this.handleChange} id="Name" type="text" placeholder="Your Name" name="name" value={this.state.name} />
              <br/> 
              
              <label htmlFor= "Birthday"> Birthday </label>
              <input onChange={this.handleChange} id="Birthday" type="date" name="birthdate" value={this.state.birthdate} min="1900-01-01" max="2018-12-31"/>                
              <br/> 

              <label htmlFor= "country"> Country </label>
              <select onChange={this.handleChange} id="country" name="country" value={this.state.country}>
                  <option value="" disabled></option>
                  {countries.map(country => <option key={country.code} value={country.code}> {country.name} </option>)}
              </select>
              <br/> 
              
              <label htmlFor= "dietaryPreference"> Dietary Preference </label>
              <select onChange={this.handleChange} id= "dietaryPreference" name="dietaryPreference" value={this.state.dietaryPreference}>
                <option value="" disabled></option>
                  <option value="omnivore"> omnviore </option>
                  <option value="vegetarian"> vegetarian </option>
                  <option value="vegan"> vegan </option>
              </select>
              <br/> 

              
              


              <button onClick={this.formConfirmed} id='confirm'>Confirm</button>

              {this.state.confirm ? <div>
              <p>{this.state.name}</p>
              <p>{this.state.birthdate}</p>
              <p>{this.state.country}</p>
              <p>{this.state.dietaryPreference}</p>
              <p>{this.state.reason}</p>
              <p>{'Is this information correct?'}</p>
              <input type='submit' onClick={this.formCompleted} value='Submit' id='submit' />
              {/* <button onClick={this.formCompleted} id='submit'>Submit</button> */}
            </div> : null} 
              </form>

            </div>

          </div>
      )
        } else {
          return <h1>Thank you for submitting!</h1>
      } 
    } 
  }


export default Form; 