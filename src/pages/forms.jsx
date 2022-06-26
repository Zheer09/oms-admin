import React , {useEffect, useState} from 'react'

import StatusCard from '../components/statusCard/StatusCard'
import Table from '../components/table/Table'
import Badge from '../components/badge/badge'

import { Link } from 'react-router-dom'

const Forms = () => {


  const latestFormss = {
    header: [
        "Form_id",
        "title",
        "department",
        "location",
        "status"
    ],

  }

  const formStatus = {
    "In Progress": "primary",
    "pending": "warning",
    "Done": "success",
    "Cancled": "danger"
}

const renderOrderHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
  <tr key={index}>
      <td>{item.formId}</td>
      <td>{item.title}</td>
      <td>{item.department}</td>
      <td>{item.location}</td>
      <td>
          <Badge type={formStatus[item.status]} content={item.status}/>
      </td>
      <td>
        <button className={`badge badge-primary`}><Link to="/singleForm" state={{fo: item}}>View</Link></button>
      </td>
  </tr>
)


  const [total_forms , setTotal_forms] = useState([])


  const getForms = async ()=> {
    const response = await fetch ('http://omsbackend-env-1.eba-h7v7nmn9.us-east-1.elasticbeanstalk.com/api/getallForms');

    if(response){
      const json = await response.json();
    setTotal_forms(json);
  
   
      return json;
  }else{
      console.error('search Terms','Error in request');
      return [];
  }

  }

  useEffect(() => {
       getForms();
  },[])

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
                bodyData={total_forms}
                renderBody={(item, index) => renderOrderBody(item, index)}            
            />
            
            
            </div>

            
          </div>
         
                
        </div>
    </div>
  )
}

export default Forms