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
        this.modelId = "e466caa0619f444ab97497640cefc4dc";
        this.state = { //Used to track the current state of the Url box
            urlInput: ""
        }
    }
    
    buttonSumbit = () => {
        app.models.predict(this.modelId, "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg/220px-Jay-Z_%40_Shawn_%27Jay-Z%27_Carter_Foundation_Carnival_%28crop_2%29.jpg").then(
        function(response) {
            console.log(response)
        },
        function(err) {
            console.log(err)
        }
        );
    }

    //FUNCTION NEEDS WORK!
    textChange = (event) => {
        let currUrl = event.target.value; //Function used to retrieve the current state of the Url box
        console.log(currUrl);
        //this.setState((this.urlInput: currUrl));
    }

    render(){
        return (
            <div>
                this.buttonSumbit();
                <Header />
                <UrlSearch textChange= {this.textChange}/> 
                <CelebrityImage />
                <TextArea />
        </div>
        );
    }

}


export default App;
