import React from 'react'
import { useParams } from 'react-router-dom'

function Edituser() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control' type={"text"}></input>
                </div>
            </div>
            <div className='col-md-6'>
                <div className='form-group'>
                    <label>Position</label>
                    <input className='form-control' type={"text"}></input>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='form-group'>
                <div className='form-group'>
                    <label>Office</label>
                    <input className='form-control' type={"text"}></input>
                </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='form-group'>
                    <div className='form-group'>
                        <label>Age</label>
                        <input className='form-control' type={"number"}></input>
                    </div>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='form-group'>
                    <label>Start date</label>
                    <input className='form-control' type={"date"}></input>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='form-group'>
                    <label>Phone Number</label>
                    <input className='form-control' type={"number"}></input>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='form-group'>
                    <label>Salary</label>
                    <input className='form-control' type={"number"}></input>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='form-group'>
                    <label>Gender</label>
                    <select className='form-control'>
                        <option>Male</option>
                        <option>Female</option>  
                    </select>
                </div>
            </div>
            <div className='col-md-12'>
                <input type={"submit"} className="btn btn-primary"></input>
            </div>
        </div>
    </div>
  )
}

export default Edituser