import React from 'react';
import './css/Carousel_item.css';
class Carousel_item_video extends React.Component{
    render(){
        const {
            video,
            author,
            poster
        }=this.props
        return(<>
            <div className="carousel-item active">

                <video className="carousel-item__img"
                onMouseOver={event => event.target.play()} 
                onMouseOut={event => event.target.pause()} 
                src={video}
                poster={poster}
                loop=""
                ></video>
                <div className="carousel-item__description">
                    <div className="carousel-item__description__tittles">
                        <h5 className="carousel-item__description__tittles--title">@{author}</h5>
                    </div>
                </div>
            </div>
        </>);
    }
}
export default Carousel_item_video;