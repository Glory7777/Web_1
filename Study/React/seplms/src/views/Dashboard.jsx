// Import necessary dependencies
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from '../components/LeftMenu.js0';

// Create the main component
const Dashboard = () => {
  const { type, menu } = useParams(); // Access route parameters
  const history = useNavigate();

  // State to manage type and menu
//  const [currentType, setCurrentType] = useState(type);
 // const [currentMenu, setCurrentMenu] = useState(menu);
  const [, setCurrentType] = useState(type);
  const [, setCurrentMenu] = useState(menu);

  // Watch for changes in the route and update state accordingly
  useEffect(() => {
    setCurrentType(type);
    setCurrentMenu(menu);
  }, [type, menu]);

  // Function to handle route updates
  const handleRouteUpdate = (to, from, next) => {
    // Replace this with your checkAuthed logic
    // For example, check authentication and redirect if necessary
    // this.$router.options.methods.checkAuthed(to, from, next);
    console.log('Checking authentication...');
  };

  // Watch for changes in route and trigger handleRouteUpdate
  useEffect(() => {
    handleRouteUpdate();
  }, [type, menu]);

  // Function to handle creation of the component
  const handleCreation = () => {
    console.log('Login Info:', history.location.state?.loginInfo);
    setCurrentType(type);
    setCurrentMenu(menu);
  };

  // Watch for changes in route and trigger handleCreation
  /*
  useEffect(() => {
    handleCreation();
  }, [type, menu]);
  */
  useEffect(() => handleCreation());

  // Render the component
  return (
    <div>
      {/* GLOBAL MASKING */}
      <div id="mask"></div>

      {/* GLOBAL WRAP */}
      <div id="wrap_area">
        {/* Content area */}
        <div id="container">
          <ul>
            <li className="lnb">
              {/* LNB area */}
              <Menu />
            </li>
            <li className="contents">
              {/* Content AREA */}
              {/* Connecting to router view */}
              <div className="content">
                {/* Replace the following with your router view component */}
                {/* Make sure to pass currentType and currentMenu as props */}
                {/* <RouterView type={currentType} menu={currentMenu} /> */}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Export the component
export default Dashboard;