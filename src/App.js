import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComponent from './components/navSection/NavComponent';
import TeamComponent from './components/teamSection/TeamComponent';
import ContentComponent from './components/contentSection/ContentComponent';
import ValueComponent from './components/valueSection/ValueComponent';
import ClientsComponent from './components/clientsSection/ClientsComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import FormPage from './components/QuerySection/QueryComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <ContentComponent />
        <ValueComponent />
        <TeamComponent />  
        <ClientsComponent />
        <FormPage />
        <FooterComponent />      
      </div>
    );
  }
}

export default App;
