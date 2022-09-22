import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import sidebar from './Components/sidebar';

const Header = () =>{
    if(localStorage.getItem("vendorid")==null){
        var menu1=<>

                        <li className="nav-item">
                                <Link className="nav-link active" to="/register"><i className="fa fa-suitcase"></i>  sign up </Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link active" to="/login">
                                    <i className="fa fa-lock"></i>  Login</Link>
                        </li> <li className="nav-item">
                                <Link className="nav-link active" to="/sidebar">
                                    <i className="fa fa-lock"></i> </Link>
                        </li>

                    </>
        }else{
            var menu1=<>
                          <li className="nav-item">
                            <Link className="nav-link active" to="cart"><i className="fa fa-shopping-cart"></i> My Cart</Link>
                        </li>
                      
                        <li className="nav-item">
                                <Link className="nav-link active" to="/sidebar"><i className="fa fa-phone"></i></Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link active" to="/myproduct"><i className="fa fa-suitcase"></i> Manage Product</Link>
                        </li>
                        <li className="nav-item justify-content-end">
                                <a className="nav-link">
                                    Welcome - { localStorage.getItem("name") } - 
                                    <i className="fa fa-power-off fa-lg text-warning logout" onClick={logout}> Logout </i> 
                                </a>
                        </li>
                    </>
        }
    
    return(
        <>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success p-3 justify-content-right">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <i class="fa fa-user-plus" aria-hidden="true"></i> Explore
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/"><i className="fa fa-home"></i> Home</Link>
                        </li>
                       
                      
                        {menu1}
                    </ul>
                    </div>
                </div>
            </nav> 
        </>
    )
}


const logout = () =>{
    localStorage.clear(); // clear all data from localStorage
    window.location.href="http://localhost:3000/#/login"; // redirection
	window.location.reload(); // reloading 
}

export default Header;  