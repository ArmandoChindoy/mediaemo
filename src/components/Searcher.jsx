import React from 'react';
import './css/Searcher.css'
class Navbar extends React.Component{
    render(){
        return(
            <>
            <section className="searcher">
                <h1 className="searcher__title">¿Que quieres ver hoy?</h1>
                <input onKeyDown={event => this.props.search(event)} className="searcher__input" type="text" placeholder="Search..."></input>
            </section>
            </>
        );
    }
}
export default Navbar;