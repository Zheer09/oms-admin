import React , {useEffect, useState} from 'react'
import Table from '../components/table/Table'
import Badge from '../components/badge/badge'

import Axios from 'axios'

import { Link } from 'react-router-dom'


const CTacc = () => {


  const latestFormss = {
    header: [
        "Email Address",
        "First Name",
        "Last Name",
        "Phone Number",
        "status"
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
  <tr key={index}>
      <td>{item.emailaddress}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>0{item.phone_num}</td>
      <td>
          <Badge type={formStatus[item.status]} content={item.status}/>
      </td>
      <td>
        <button className={`badge badge-primary`}><Link to="/singleForm">View</Link></button>
      </td>
  </tr>
)


    const [total_CT , setCT_acc] = useState([])
    const [total_Acc , setTotal_acc] = useState([])
    const [inx , set_inx] = useState(0)



    useEffect(() => {
      getAcc();
      console.log("slaw")
  },[])

  const getAcc = async ()=> {
    const response = await fetch ('http://omsbackend-env-1.eba-h7v7nmn9.us-east-1.elasticbeanstalk.com/api/getAllacc');

    if(response){
      const json = await response.json();
      setTotal_acc(json);

      console.log(json.length);
    for(let i = 0 ; i<json.length;i++){
      if(json[i].typeacc == "citizen" ){
        total_CT.push(json[i]);
        // setCT_acc([...total_CT, json[i]]);
      
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
                bodyData={total_CT}
                renderBody={(item, index) => renderOrderBody(item, index)}            
            />
            
            
            </div>

            
          </div>
         
                
        </div>
    </div>
  )
}

export default CTacc