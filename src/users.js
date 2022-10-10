import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Users() {
  const[user,setUser]= useState([]);
  useEffect(()=>{
    setUser([
      {
        id:"1",
        name:"Tiger Nixon",
        position:"System Architect",
        office:"Edinburgh",
        age:"61",
        startdate:"2011/04/25",
        salary:"$320,800"
      },{
        id:"2",
        name:"Garrett Winters",
        position:"Accountant",
        office:"Tokyo",
        age:"63",
        startdate:"2011/07/25",
        salary:"$170,750"
      }
    ])
  },[])

  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">USERS</h1>
        <Link to={"/createuser"} href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          class="fas fa-download fa-sm text-white-50"></i>Create User</Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                  <th>Action</th>
                </tr>
              </thead>
              {
                user.map((user)=>{
                  return <tbody>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.position}</td>
                    <td>{user.office}</td>
                    <td>{user.age}</td>
                    <td>{user.startdate}</td>
                    <td>{user.salary}</td>
                    <td><Link to={`/users/${user.id}`} className='btn btn-warning mr-2'>View</Link>
                    <Link to={`/users/edituser`} className='btn btn-primary'>Edit</Link></td>
                  </tr>
                </tbody>
                })
              }
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users