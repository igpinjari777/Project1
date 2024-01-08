import React, { useState,useEffect } from 'react'
import {Link, useNavigate,useParams} from 'react-router-dom' 
import EmployeeService from '../services/EmployeeService'
const AddEmp = () => {
  const [firstName,setFirstName] =useState('')
  const [lastName,setLastName] =useState('')
  const [emailId,setemailId] =useState('')
  const navigate =useNavigate()
  const {id} = useParams();
  const saveOrUpdateEmployee = (e) =>
  {
    e.preventDefault();
    const employee={firstName,lastName,emailId}
   if(id)
   {
     EmployeeService.updateEmployee(id,employee).then((response) =>{
      console.log(response.data)
      navigate('/employees')
     }).catch(error =>
      {
        console.log(error)
      })
   }
   else
   {
    EmployeeService.createEmployee(employee).then((response) => {
      console.log(response.data)
      navigate('/employees')
    }).catch(error => {
      console.log(error)
    })
   }
  }
  useEffect(() => {
    EmployeeService.getEMployeeById(id).then((response) => {
     setFirstName(response.data.firstName)
     setLastName(response.data.lastName)
     setemailId(response.data.emailId)
    }).catch(error =>{
     console.log(error)
    })
   }, [])
  const title = () =>
  {
    if(id)
    {
      return  <h2 className='text-center'>Update Employee</h2>
    }
    else
    {
      return  <h2 className='text-center'>Add Employee</h2>
    }
  }
  return(
    <div>
      <br/>
      <br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 '>
                  {
                    title()
                  }
                  <div className='card-body'>
                     <form>
                        <div className='form-group mb-2'>
                          <label className='form-label'>First Name</label>
                          <input type='text' placeholder='Enter first name'
                                 className='form-control'
                                 value={firstName}
                                 onChange={(e) => setFirstName(e.target.value)}
                          >
                          </input>
                        </div>
                        <div className='form-group mb-2'>
                          <label className='form-label'>Last Name</label>
                          <input type='text' placeholder='Enter last name'
                                 className='form-control'
                                 value={lastName}
                                 onChange={(e) => setLastName(e.target.value)}
                          >
                          </input>
                        </div>
                        <div className='form-group mb-2'>
                          <label className='form-label'>Last Name</label>
                          <input type='text' placeholder='Enter Email Id'
                                 className='form-control'
                                 value={emailId}
                                 onChange={(e) => setemailId(e.target.value)}
                          >
                          </input>
                        </div>
                        <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Save</button>&nbsp;
                        <Link to={'/employees'} className='btn btn-danger'>cancel</Link>
                     </form>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmp