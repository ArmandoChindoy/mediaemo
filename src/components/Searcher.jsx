import React from 'react';
import './css/Searcher.css'
import Logo from '../assets/img/logo_platzi_video.png'
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
            <section className="searcher">
                <h1 className="searcher__title">¿Que quieres ver hoy?</h1>
                <input className="searcher__input" type="text" placeholder="Search..."></input>
            </section>
            </>
        );
    }
}
export default Navbar;