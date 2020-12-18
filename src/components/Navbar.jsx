import React from 'react';
import './css/Navbar.css'
import Logo from '../assets/img/logo_platzi_video.png'
import { Link } from 'react-router-dom';
class Navbar extends React.Component{
    constructor(props){
        super();
        this.state={
            logo:Logo
        }
    }
    render(){
        return(
            <>
            <header className="header container-fluid">
                <img src={this.state.logo} alt=""></img>
                <div className="header__menu">
                    <details open>
                        <summary>
                            <i className=" fas fa-user"></i>
                        </summary>
                        <ul>
                            <li><Link to="/" >Pics</Link></li>
                            <li><Link to="/login" >Log-In</Link></li>
                        </ul>
                    </details>
                </div>
            </header>
            </>
        );
    }
}
export default Navbar;