import React from 'react';
import './css/Home.css';
import Searcher from "../components/Searcher";
import Carousel from "../components/Carousel";
class Home extends React.Component{
    render(){
        return(
            <>
            <div className="home">
                <Searcher></Searcher>
                <Carousel image="https://images.pexels.com/photos/5008362/pexels-photo-5008362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></Carousel>
            </div>
            </>
        );
    }
}
export default Home;