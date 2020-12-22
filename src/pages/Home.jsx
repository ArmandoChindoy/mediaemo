import React from 'react';
import './css/Home.css';
import Searcher from "../components/Searcher";
import Carousel from "../components/Carousel";
class Home extends React.Component{
    constructor(props){
        super();
        this.state={
            loading:true,
            error:null,
            images:[],
            videos:[],
            search:""
        }
        this.search.bind(this);
    }
    render(){
        const{
            images,
            loading,
            error,
            videos,
            search
        }=this.state;
        if(loading){
            return(<p className="alert alert-primary">loading...</p>)
        }
        if(error){
            return <p className="alert alert-danger">error</p> 
        }
        return(
            <>
            <div className="home">
                <Searcher search={this.search}/>
                <Carousel images={images} search={search}/>
                <Carousel videos={videos} search={search}/>
            </div>
            </>
        );
    }
    componentDidMount(){
        this.fetchData();   
    }
    getData = async(url)=>{
        const APIURL='https://api.pexels.com/';
        const headers={
            'Authorization':'563492ad6f91700001000001b7fc5377bc48443db0860ecaf76cb4a5'
        }
        try {
            const response = await fetch(`${APIURL}${url}`,
            {
                headers:headers
            })
            const data = await response.json();
            return data;
        } catch (error) {
            this.setState({error:error.message})
        }
    }
    fetchData = async(keyword)=>{
        const photosQuery = keyword ? `v1/search?query=${keyword}` : 'v1/search?query=people';
        const videosQuery = keyword ? `videos/search?query=${keyword}&per_page=5` : 'videos/search?query=nature&per_page=5';
        let promises = await Promise.all([
            this.getData(photosQuery),
            this.getData(videosQuery)
        ])
        this.setState({
            images:promises[0].photos,
            videos:promises[1].videos,
            loading:false,
            search:keyword,
        });
    }
    componentDidUpdate(){

    }
    search = async(event)=>{
        if(event.key==='Enter'){
            event.target.blur();
            this.fetchData(event.target.value);
        }
    }
}
export default Home;