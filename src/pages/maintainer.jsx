import React , {useEffect, useState} from 'react'
import Table from '../components/table/Table'
import Badge from '../components/badge/badge'

import Axios from 'axios'

import { Link } from 'react-router-dom'


const MTacc = () => {


  const latestFormss = {
    header: [
        "Email Address",
        "First Name",
        "Last Name",
        "Phone Number",
        "Job Title"
    ],

  }

  const formStatus = {
    "pending": "warning",
    "approved": "success",
    "Cancled": "danger"
}

const renderOrderHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
  <tr onClick={funcctionName} key={index}>
      <td>{item.emailaddress}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>0{item.phone_num}</td>
      <td>{item.jobTitle}</td>
  </tr>
)

    function funcctionName () {
      console.log("Test again");
    } 

    const [total_MT , setCT_acc] = useState([])
    const [total_Acc , setTotal_acc] = useState([])


    useEffect(() => {
      getAcc()
  },[])

  const getAcc = async ()=> {
    const response = await fetch ('http://omsbackend-env-1.eba-h7v7nmn9.us-east-1.elasticbeanstalk.com/api/getAllacc');

    if(response){
      const json = await response.json();
      setTotal_acc(json);
  
    for(let i = 0 ; i<json.length;i++){
      if(json[i].typeacc === "maintainer" ){
        setCT_acc(json);
        
       }
    }
      return json;
  }else{
      console.error('search Terms','Error in request');
      return [];
  }

  }

  return (
    <div>
      
      <div className="col-12">
          <div className="card">
            <div className="card__header">
              <h3>Latest Forms</h3>
            </div>
            <div className="card__body"> 
            
            <Table
                headData={latestFormss.header}
                renderHead={(item, index) => renderOrderHead(item, index)}
                bodyData={total_MT}
                renderBody={(item, index) => renderOrderBody(item, index)}            
            />
            
            
            </div>

            
          </div>
         
                
        </div>
    </div>
  )
}

export default MTacc