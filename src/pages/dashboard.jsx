import React , {useEffect, useState} from 'react'

import StatusCard from '../components/statusCard/StatusCard'
import Table from '../components/table/Table'
import Badge from '../components/badge/badge'



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
    "processing": "primary",
    "pending": "warning",
    "Done": "success",
    "Cancled": "danger"
}

const renderOrderHead = (item, index) => (
  <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
  <tr onClick={funcctionName} key={index}>
      <td>{item.formId}</td>
      <td>{item.title}</td>
      <td>{item.department}</td>
      <td>{item.location}</td>
      <td>
          <Badge type={formStatus[item.status]} content={item.status}/>
      </td>
  </tr>
)

    function funcctionName () {
      console.log("Test again");
    } 

  const [total_Acc , setTotal_acc] = useState([])
  const [total_CT , setTotal_CT] = useState([])
  const [total_MT , setTotal_MT] = useState([])
  const [total_forms , setTotal_forms] = useState([])
  const [total_pendingForms , setTotal_pendingForms] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:8080/api/getAllacc").then((response) => {
      setTotal_acc(response.data);

      for(let i = 0 ; i<total_Acc.length;i++){
        if(total_Acc[i].typeacc === "citizen" ){
          setTotal_CT(response.data);

         }
         else if(total_Acc[i].typeacc === "maintainer" ){
          setTotal_MT(response.data);

         }
      }
     
    })
    
  },[total_Acc.length])


  const getForms = async ()=> {
    const response = await fetch ('http://localhost:8080/api/getallForms');

    if(response){
      const json = await response.json();
    setTotal_forms(json);
  
    for(let i = 0 ; i<json.length;i++){
      if(json[i].status === "pending" ){
        setTotal_pendingForms(json);
        
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