import React from 'react';
import './App.css';
import ApplicationBar from "./component/ui/ApplocationBar";
import SecondBar from "./component/ui/SecondBar";
import Footer from "./component/ui/Footer";
import MainContent from "./component/ui/MainContent";

function App() {
    return (
        <>
            <ApplicationBar/>
            <SecondBar/>
            <MainContent/>
            <Footer/>
        </>
    );
}

export default App;
