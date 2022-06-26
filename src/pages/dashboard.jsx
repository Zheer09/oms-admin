import React , {useEffect, useState} from 'react'

import StatusCard from '../components/statusCard/StatusCard'
import Table from '../components/table/Table'
import Badge from '../components/badge/badge'

import SingleForm from '../pages/singleForm';



import { Link } from 'react-router-dom'
import Axios from 'axios'

const Dashboard = () => {


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
        <button className={`badge badge-primary`}><Link to="/singleForm">View</Link></button>
      </td>
  </tr>
)

  const [total_Acc , setTotal_acc] = useState([])
  const [total_CT , setTotal_CT] = useState([])
  const [total_MT , setTotal_MT] = useState([])
  const [total_forms , setTotal_forms] = useState([])
  const [total_pendingForms , setTotal_pendingForms] = useState([])
 

  useEffect(() => {
    getAcc();
},[])
 
  const getAcc = async ()=> {
    const response = await fetch ('http://omsbackend-env-1.eba-h7v7nmn9.us-east-1.elasticbeanstalk.com/api/getAllacc');

    if(response){
      const json = await response.json();
      setTotal_acc(json);
  
      console.log(json.length);
    for(let i = 0 ; i<=json.length;i++){
      if(json[i].typeacc == "citizen" ){

        total_CT.push(json[i])
        // setTotal_CT([...total_CT, json[i]]);
        
       }
       if(json[i].typeacc == "maintainer"){
        total_MT.push(json[i])
        // setTotal_MT([...total_MT, json[i]]);
       }
       
    }
      return json;
  }else{
      console.error('search Terms','Error in request');
      return [];
  }

  }

  const getForms = async ()=> {
    const response = await fetch ('http://omsbackend-env-1.eba-h7v7nmn9.us-east-1.elasticbeanstalk.com/api/getallForms');

    if(response){
      const json = await response.json();
    setTotal_forms(json);
  
    for(let i = 0 ; i<json.length;i++){
      if(json[i].status === "pending" ){
        setTotal_pendingForms([...total_pendingForms, json[i]]);
        
       }
    }
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
      <h2 className="page-header">dashboard</h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            
                  <div className="col-6">
                    {}
                    <StatusCard
                      icon="bx bx-receipt"
                      count={total_forms.length}
                      title="Total Forms"
                    />
                  </div>
                  <div className="col-6">
                    {}
                    <StatusCard
                      icon="bx bxs-user-account"
                      count={total_CT.length}
                      title="Total Citizens"
                    />
                  </div>
                  <div className="col-6">
                    {}
                    <StatusCard
                      icon="bx bx-hard-hat"
                      count={total_MT.length}
                      title="Total Maintainer"
                    />
                  </div>
                  <div className="col-6">
                    {}
                    <StatusCard
                      icon="bx bx-layer"
                      count={total_pendingForms.length}
                      title="Total Forms pending"
                    />
                  </div>

          </div>
        </div>
        
      </div>
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

            <div className="card__footer"><Link to='/forms'>View All</Link></div>
          </div>
         
                
        </div>
    </div>
  )
}

export default Dashboard