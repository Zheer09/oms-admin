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
  <tr onClick={funcctionName} key={index}>
      <td>{item.emailaddress}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>0{item.phone_num}</td>
      <td>
          <Badge type={formStatus[item.status]} content={item.status}/>
      </td>
  </tr>
)

    function funcctionName () {
        
    } 

    const [total_CT , setCT_acc] = useState([])
    const [total_Acc , setTotal_acc] = useState([])


  useEffect(() => {
    Axios.get("http://localhost:8080/api/getAllacc").then((response) => {
      setTotal_acc(response.data);

      for(let i = 0 ; i<total_Acc.length;i++){
        if(total_Acc[i].typeacc === "citizen" ){
          setCT_acc(response.data);

         }
      }
     
    })
    
  },[total_Acc.length])

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