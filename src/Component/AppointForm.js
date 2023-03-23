import React from 'react';
import '../CSS/Style.css';
import { useNavigate } from 'react-router-dom';
export default function AppointForm() {
    const navigate=useNavigate();
    const handleNavigation=()=>
    {
        navigate('./RegistrationForm.js');
    }
    return (
        <div className='container-fluid col-md-12'>
            <form className="row g-3 bgStyle" style={{margin:40, padding:40, borderRadius:30}}>
                        <div className="col-md-4">
                            <label htmlFor="FullName" className="form-label">
                            </label>
                            <input type="text" className="form-control" id="FullName" placeholder="Your Name" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="email" className="form-label">
                            </label>
                            <input type="email" className="form-control" id="email" placeholder='Your Email' />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="ContactNo" className="form-label">
                            </label>
                            <input
                                type="tel"
                                className="form-control"
                                id="ContactNo"
                                placeholder="Your Contact Number"
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="AppointDate" className="form-label">
                            </label>
                            <input type="date" className="form-control" id="AppointDate" placeholder='Your Appointment Date' />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="Department" className="form-label">
                            </label>
                            <select id="Department" className="form-select">
                                <option selected="">Select Department</option>
                                <option>Department1</option>
                                <option>Department2</option>
                                <option>Department3</option>
                                <option>Department4</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="Doctor" className="form-label">
                            </label>
                            <select id="Doctor" className="form-select">
                                <option selected="">Select Doctor</option>
                                <option>Doctor1</option>
                                <option>Doctor2</option>
                                <option>Doctor3</option>
                                <option>Doctor4</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-outline-primary" onClick={handleNavigation} style={{width:300, height:50, fontSize:20, borderRadius:20, marginTop:20}}>
                                Make An Appointment
                            </button>
                        </div>
                    </form>
        </div>
    )
}
