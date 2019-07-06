import React,{Component} from 'react';
import Clarifai from 'clarifai';
import Header from './components/Header';
import UrlSearch from './components/UrlSearch';
import CelebrityImage from './components/CelebrityImage';
import TextArea from './components/TextArea';


//Clarifai API Reference
const app = new Clarifai.App({
    apiKey: '65f4fa3f06904ade892bc09766078182'
   });

//Mo - Creating 4 components:
//  Header
//  Url and Search button
// Celebrity Image
//Text area that describes app and gives celebrity name
class App extends Component{
    constructor(){
        super();
        this.state = { //Used to track the current state of the Url box
            urlInput: ""
        }
    }

    textChange = (event) => {
        let currUrl = event.target.value; //Function used to retrieve the current state of the Url box
        console.log(currUrl);
        this.setState((this.urlInput: currUrl));
    }

    render(){
        return (
            <div>
                <Header />
                <UrlSearch textChange= {this.textChange}/> 
                <CelebrityImage />
                <TextArea />
        </div>
        );
    }

}


export default App;
