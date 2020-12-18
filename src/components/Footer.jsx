import React from 'react';
import './css/Footer.css'
import Logo from '../assets/img/logo_platzi_video.png'
class Footer extends React.Component{
    constructor(props){
        super();
        this.state={
            logo:Logo
        }
    }
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