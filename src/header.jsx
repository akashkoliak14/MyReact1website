import React from 'react';
import './App.css';
function header() {
    
    return (

<nav className='navbar navbar-expand-lg navbar-light bg-warning '>
        <div className='container-fluid w-100' >
          <a className='navbar-brand' href='#'>HOTEL</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' >Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link'>ABOUT US</a>
              </li>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle'  id='navbarDropdown' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  FOOD CATEGORY
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li><a className='dropdown-item' >VEG</a></li>
                  <li><a className='dropdown-item' >NONVEG</a></li>
                
                  <li><a className='dropdown-item' >SEAFOOD</a></li>
                </ul>
              </li>
              <li className='nav-item'>
                <a className='nav-link disabled'>ROOMS</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link disabled'>CONTACT</a>
              </li>
            </ul>
            <form className='d-flex'>
              <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'></input>
              <button className='btn btn-outline-success' type='submit'>Search</button>
            </form>
          </div>
        </div>
      </nav>


);
}


export default header;
