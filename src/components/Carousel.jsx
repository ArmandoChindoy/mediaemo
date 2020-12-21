import React from "react";
import "./css/Carousel.css";
import Carousel_item_photo from "./Carousel_item_photo";
import Carousel_item_video from "./Carousel_item_video";
class Carousel extends React.Component{
    render(){
        const{
            images,
            videos,
            search
        }=this.props
        if(images){
            console.log(images);
            return(
            <>
                <h3 className="page-header carousel__title">Images</h3>
                <section className="carousel container">
                    {(images.length>0)
                        ?<div className="carousel__container">
                            {
                                images.map(image=>{
                                    return(
                                    <Carousel_item_photo
                                    key={image.id}
                                    image={image.src.medium}
                                    author={image.photographer}
                                    />)
                                })
                            }
                        </div>
                        :<p className="alert alert-primary">there is no {search} photos</p>
                    }
                </section>
            </>
            );
        }
        if(videos){
            console.log(videos)
            return(
                <>
                    <h3 className="page-header carousel__title">Videos</h3>
                    <section className="carousel container">
                        {
                        (videos.length>0)
                        ?<div className="carousel__container">
                            {
                                videos.map(video=>{
                                    return(
                                    <Carousel_item_video
                                    key={video.id}
                                    video={video.video_files[0].link}
                                    author={video.user.name}
                                    poster={video.image}
                                    />)
                                })
                            }
                        </div>
                        :<p className="alert alert-primary">There is no {search} videos</p>
                        }
                    </section>
                </>
                );
        }
    }
}
export default Carousel;