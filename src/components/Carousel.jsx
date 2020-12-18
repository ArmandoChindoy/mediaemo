import React from "react";
class Carousel extends React.Component{
    constructor(props){
        super();
        this.state={
            image:props.image
        }
    }
    render(){
        const {
            image
        }=this.state;
        return(
        <>
            <section className="carousel container">
                <div className="carousel__container">
                    <div className="carousel-item active">
                        <img  className="carousel-item__img" src={image} alt=""></img>
                        <div className="carousel-item__description">
                            <div className="carousel-item-description__btn btn-group btn-group-sm" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-outline-secondary"><i class="fas fa-play"></i></button>
                                <button type="button" className="btn btn-outline-secondary"><i class="fas fa-pause"></i></button>
                            </div>
                            <div className="carousel-item__description__tittles">
                                <h3 className="carousel-item__description__tittles--title">Title</h3>
                                <p className="carousel-item__description__tittles--subtitle">Date</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        );
    }
}
export default Carousel;