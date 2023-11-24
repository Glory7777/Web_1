
import React, { Component } from 'react';
import HelloWorld from '../components/HelloWorld.js'; 

class Home extends Component {
    
    render() {
        return (
            <div id="homeContent" style={{ textAlign: 'center', padding: '40px' }}>
            <img alt="Vue logo" src="../assets/logo.png" />
            <HelloWorld msg="Welcome to Your React.js App" />
          </div>
        );
    }
}

export default Home;