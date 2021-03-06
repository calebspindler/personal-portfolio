import React from 'react';
import { NavLink } from 'react-router-dom';
// import {
//   CloudinaryContext,
//   Image,
//   Transformation
// } from 'cloudinary-react';

// Header Component with blog name, slogan, and nav
const Header = props =>
  <header className="container">
      {/* <CloudinaryContext cloudName="spindler-creative">
        <Image publicId="logo.png" >
          <Transformation height="50" crop="scale" />
        </Image>
      </CloudinaryContext> */}
      <div id="siteBranding">
      <h1 id="brandName"><NavLink exact to="/">Caleb Spindler</NavLink></h1>
      </div>
  </header>

  export default Header;
