import React from "react";
import {Link} from "react-router-dom";

const sidebar=()=>{
return(
    <>
        <Link to="home"> Home </Link>
        <Link to="login"> Login </Link>
        <Link to="register"> Register </Link>
    </>
)
}
export default sidebar;