import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Sharelist from './sharing';
const Productlist = () =>{
    const[product, updateProduct] = useState([]);
    const getProduct = () =>{
        axios.get("http://localhost:1234/product")
        .then(response=>{
            updateProduct(response.data.reverse());
        })
    }
    useEffect(()=>{
        getProduct();
    },[true]);

    const[message , updateMsg] = useState("");
    const Share = (productData) =>{
        axios.post("http://localhost:1234/cart", productData)
        .then(response=>{
            updateMsg(productData.name + " Added in Your Cart !");
        })
    }
    

    return(
        <div className="container mt-4 ">
            <div className='row text-center'>
                <p className='col-lg-12 text-center text-danger'>{message}</p>
                {
                    product.map((pro,index)=>{
                        return(
                            <div className='col-lg-8 mb-4 offset-2 text-center' key={index}>
                                <div className='bg-light p-4 rounded'>
                                    <h5 className='text-primary'> {pro.name} </h5>
                                    <img src={pro.photo} className='rounded' height="300" width="100%"/>
                                    
                                </div>
                               
                                <div className='row mb-3'>
                                    <div className='col-lg-3'>
                                       
                                       <a href="sharing">  <button className='btn btn-grey' onClick={Share.bind(this, pro)} >
                                        <i class="fa fa-share " aria-hidden="true">  </i> </button>
                                       </a>
                       
                                        
                                    </div>    
                                    <div className='col-lg-3' > 
                                        <button className='btn btn-grey'>
                                        <i class="fa fa-pencil-square-o fx-5 " aria-hidden="true"> edit </i>
                                        </button> 
                                   
                                    </div>
                                    <div className='col-lg-3' > 
                                        <button className='btn btn-grey'>
                                        <i class="fa fa-download " aria-hidden="true"> Save </i>
                                        </button> 
                                    
                                    </div>
                                    <div className='col-lg-3' > 
                                        <button className='btn btn-grey'>
                                        <i class="fa fa-comments " aria-hidden="true"> comment </i>
                                        </button> 
                                    </div>
                                    
                                    <div className='row text-left'>
                                        <div className='col-lg-12'>
                                        <p>{pro.details}</p>
                                        </div>
                                   
                                    </div>
                               
                                    
                                   
                                
                                </div>
                            </div>        
                        )
                    })
                }
                
            </div>
        </div>
    )
}
export default Productlist;