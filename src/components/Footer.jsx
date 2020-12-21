import React from 'react';
import './css/Footer.css'
class Footer extends React.Component{
    render(){
        return(
            <>
            <footer className="footer container-fluid">
                <p>Terms &amp; Conditions</p>
                <p>Privacy Declaration</p>
                <p>Help Center</p>
            </footer>
            </>
        );
    }
}
export default Footer;