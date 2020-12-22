import react from "react";
import { Link } from "react-router-dom";
import img404 from "../assets/img/404.png";
import  "./css/404.css";
const Page404 = ()=>{
    return(<>
    <div className="container page404-container">
        <div className="row">
            <div className="img-container">
                <img src={img404} alt=""/>
            </div>
            <div className="description">
                <h1 className="page-header display-1 page404_title">404</h1>
                <h2 className="page-header display-4 page404_title">Page not found</h2>
                <button className="btn btn-primary"><Link to="/">Go to home</Link></button>
            </div>
        </div>
    </div>
    </>);
}
export default Page404;