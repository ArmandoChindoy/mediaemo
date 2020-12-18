import React from "react";
import "./css/LogIn.css";
class LogIn extends React.Component{
    render(){
        return(<>
            <section className="logIn container-fluid">
                <div className="logIn__container container">
                    <h1>Log In</h1>
                    <div className="logIn__container--form">
                        <input type="text" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <button type="Button" className="btn btn-primary btn-block">Log In</button>
                        <div className="logIn-form__passwordOptions">
                            <label>
                                <input type="checkbox"/>Remember
                            </label>
                            <p><a href="">I forgot my password</a></p>
                        </div>
                    </div>
                    <div className="logIn__container--social-media">
                        <div className="logIn-social-media__item">
                        <i class="fab fa-google"></i>
                        <p>Log in with Google</p>
                        </div>
                        <span className="logIn-social-media__item">
                        <i class="fab fa-twitter"></i>
                        <p>Log in with Twitter</p>
                        </span>
                    </div>
                    <p>You dont have an account yet, <a href="">Register</a></p>
                </div>
            </section>
        </>)
    }
}
export default LogIn;