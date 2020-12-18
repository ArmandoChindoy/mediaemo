import React from 'react';
import "./css/Layout.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Layout(props){
    return(<>
    <div className="wrapper">
        <Navbar></Navbar>
        {props.children}
        <Footer></Footer>
    </div>
    </>)
}
export default Layout;