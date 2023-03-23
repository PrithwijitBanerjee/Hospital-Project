import React from 'react'
import CancerImg from '../images/cancerImg.jpg';
import '../CSS/Style.css';
export default function Middle() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <img src={CancerImg} className="image-fluid fixedImg" alt=" "></img>
                </div>
                <div className='col'>
                    <form className="row g-3 formStyle">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                                First Name
                            </label>
                            <input type="email" className="form-control" id="FName" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">
                                Second Name
                            </label>
                            <input type="password" className="form-control" id="LName" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">
                                Address
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                placeholder="Default  Address"
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">
                                Address 2
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress2"
                                placeholder="Alternate Address"
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">
                                City
                            </label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputState" className="form-label">
                                State
                            </label>
                            <select id="inputState" className="form-select">
                                <option selected="">West Bengal</option>
                                <option>Uttar Pradesh</option>
                                <option>Bihar</option>
                                <option>Gujrat</option>
                                <option>Karnataka</option>
                                <option>Maharastra</option>
                                <option>Madhya Pradesh</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="inputZip" className="form-label">
                                Zip
                            </label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btnStyle" style={{width:300, height:50, fontSize:20}}>
                                Submit Form
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
