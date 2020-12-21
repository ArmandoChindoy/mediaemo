import React from 'react';
import './css/Carousel_item.css';
class Carousel_item extends React.Component{
    render(){
        const {
            image,
            author
        }=this.props
        return(<>
            <div className="carousel-item active">
                <img  className="carousel-item__img" src={image} alt=""></img>
                <div className="carousel-item__description">
                    <div className="carousel-item__description__tittles">
                        <h5 className="carousel-item__description__tittles--title">@{author}</h5>
                    </div>
                </div>
            </div>
        </>);
    }
}
export default Carousel_item;