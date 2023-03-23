import React from 'react'
import { Link } from 'react-router-dom'
import MedicationIcon from '@mui/icons-material/Medication';
import { useNavigate } from 'react-router-dom';
//import '../CSS/Style.css'
export default function MyNav() {
  const Navigate=useNavigate();// useNavigate() hooks returns a function which is assigned in Navigate constant 
  function loginData()
  {
    Navigate('./LoginForm.js');// redirect to login page when button is clicked 
  }
    return <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary" style={{height:70}}>
          <div className="container-fluid">
            <Link className="navbar-brand text-white" >
             <MedicationIcon></MedicationIcon>Medinious
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/" role="group">
                    <button type="button" class="btn btn-outline-light">Home</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/About.js">
                    <button type="button" class="btn btn-outline-light">About Us</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Contact.js">
                    <button type="button" class="btn btn-outline-light">Contact Us</button>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/Services.js">
                    <button type="button" class="btn btn-outline-light">Our Services</button>
                  </Link>
                </li>
              </ul>
              <form className="d-flex" style={{ height:50}}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
                <button className="btn btn-outline-light" type="submit" onClick={loginData} style={{marginLeft:20, marginRight:20}}>
                  Login 
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
}
