import React from "react";
import { Component } from "react";

class EmployeeData extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            "Id" : 1,
            "Name" : "Jayesh",
            "Age" : 32,
            "Phone" : 6353946349,
            "Salary" : 30000,
        },
        this.state1={
            "Id" : 2,
            "Name" : "Dhiraj",
            "Age" : 30,
            "Phone" : 8758490429,
            "Salary" : 35000
        },
        this.state2={
            "Id" : 3,
            "Name" : "Bhagavan",
            "Age" : 35,
            "Phone" : 9909623536,
            "Salary" : 40000,
        }
        
    }
    render(){
    
            return(
                <>
                <h2>Employee Data</h2>
            <div className="maine">
            <div className="container">
            <img src="https://machohairstyles.com/wp-content/uploads/2017/03/professional-hairstyle-for-men-7-1455x1536.jpg" alt="img" className="image"/>
            <h1>Employee id : {this.state.Id}</h1>
            <h1>Employee name : {this.state.Name}</h1>
            <h1>Employee age : {this.state.Age}</h1>
            <h1>Employee Phone No : {this.state.Phone}</h1>
            <h1>Employee salary : {this.state.Salary}</h1>
            </div>

            <div className="container1">
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGBWN4AOYtbSQ/profile-displayphoto-shrink_800_800/0/1535977901404?e=2147483647&v=beta&t=cBB5cMc3pfWU1QWYahxX4jeT8Bzj9xBZ-2mNdaOKWDk" alt="img" className="image"/>
            <h1>Employee id : {this.state1.Id}</h1>
            <h1>Employee name : {this.state1.Name}</h1>
            <h1>Employee age : {this.state1.Age}</h1>
            <h1>Employee Phone No : {this.state1.Phone}</h1>
            <h1>Employee salary : {this.state1.Salary}</h1>
            </div>

            <div className="container2">
            <img src="https://www.titancomputer.services/wp-content/uploads/2024/07/satisfied-charming-man-with-bristle-holding-smartp-2022-12-16-04-11-59-utc-min.jpg" alt="img" className="image"/>
            <h1>Employee id : {this.state2.Id}</h1>
            <h1>Employee name : {this.state2.Name}</h1>
            <h1>Employee age : {this.state2.Age}</h1>
            <h1>Employee Phone No : {this.state2.Phone}</h1>
            <h1>Employee salary : {this.state2.Salary}</h1>
            </div>
            </div>
                </>  
             )
    }
}

export default EmployeeData