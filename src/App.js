import React,{Component} from 'react';
import Clarifai from 'clarifai';
import Header from './components/Header';
import UrlSearch from './components/UrlSearch';
import CelebrityImage from './components/CelebrityImage';
import TextArea from './components/TextArea';
import Footer from './components/Footer';


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
            urlInput: "",
            celebrityName: "",
            accuracy: 0

        }
    }
    
    buttonSumbit = () => {
        app.models.predict(this.modelId, this.state.urlInput)
        .then(response => this.processUrl(response),
        function(err) {
            alert("Please enter a valid Url")
            console.log(err)
        }
        );
    }

    processUrl = (resp) => {
        console.log("hi")
        console.log(resp)
        let jsonResp = resp.outputs[0].data.regions[0].data.concepts[0]
        let name = jsonResp.name.charAt(0).toUpperCase() //Capitalize First Letter of Name
                        + jsonResp.name.slice(1); 
        let percentage = Math.round(jsonResp.value*100); 

        this.setState({celebrityName: name});
        this.setState({accuracy: percentage});           
    }

    textChange = (event) => {
        let currUrl = event.target.value; //Function used to retrieve the current state of the Url box
        this.setState({urlInput: currUrl});
    }

    render(){
        return (
            <div>
                <Header />
                <UrlSearch textChange={this.textChange} buttonClick={this.buttonSumbit}/> 
                <CelebrityImage imgUrl={this.state.urlInput}/>
                <TextArea celebName={this.state.celebrityName} percent={this.state.accuracy}/>
                <Footer />
        </div>
        );
    }

}

export default App;
