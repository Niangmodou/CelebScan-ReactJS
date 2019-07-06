import React from 'react';
import Header from './components/Header';
import UrlSearch from './components/UrlSearch';
import CelebrityImage from './components/CelebrityImage';
import TextArea from './components/TextArea';



//Mo - Creating 4 components:
//  Header
//  Url and Search button
// Celebrity Image
//Text area that describes app and gives celebrity name

class App extends React.Componenet{
    render(){

        return(
            <div>
            <Header />
            <UrlSearch />
            <CelebrityImage />
            <TextArea />
        </div>);
    }


}


export default App;
