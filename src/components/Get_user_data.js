
import React, { Component } from 'react'
import {Form , Button , Image} from 'react-bootstrap'
import axios from 'axios';
import Alert_message from './Alert_message';

export class Get_user_data extends Component {
    constructor(props){
        super(props);
        this.state={
            cityName:"",
            cityData:{},
            displayData:false,
            error:"",
            alertMessage:false

        }
    }
    trackCityName=(e)=>{
        this.setState(
            {
                cityName:e.target.value, 
            }
        )
    }

    getRecivedData=async (e)=>{
     e.preventDefault();
     try{
         const axiosData=await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.c8c3522ba2ff5a610f1fc08e7591854f&q=${this.state.cityName}&format=json`)
         this.setState(
            {
                cityData:axiosData.data[0],
                displayData:true,
                alert:false
            }
         )
     } 
     catch(error){
         this.setState(
             {
                
                    error:error.message,
                    alert:true,
                
             }
         )

     }  
    }
    render() {
        return (
            <div>
                <h1>Cities Explorer</h1> 
<Alert_message alert={this.state.alert}/>
               
             <Form onSubmit={this.getRecivedData}>
          <Form.Group className="mb-3" controlId="formBasicEmail" 	 >
            <Form.Label>City Name</Form.Label>
            <Form.Control type="text" placeholder="Enter City Name" onChange={(e)=>{this.trackCityName(e)}} size={'sm'} />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Explore!
          </Button>
        </Form>
        {this.state.displayData &&
        <div>
            <p>
              {this.state.cityData.display_name}
          </p>
         
            <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.88bdc34a015f169659efd4fa8583736c&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=10`} rounded/>
            <p>
              {`latitude: ${this.state.cityData.lat}, longitude: ${this.state.cityData.lon}`}
            </p>
        </div>
          
    
           
        
        }
      
            </div>
           
            
        )
    }
}

export default Get_user_data

