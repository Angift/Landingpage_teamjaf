import React from 'react';
import ReactDOM from 'react-dom';

// Add css files
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'font-awesome/css/font-awesome.min.css'; // 4.x
import '@fortawesome/fontawesome-free/css/all.css'; // 5.x

//custom CSS
import "./index.css"

// Add js files
import 'jquery';
import 'popper.js';
import 'bootstrap';

import Navbar from "./components/navbar.js"

const Pancho = () => {
    return (
        <div>
            <Navbar />
            <Header />
        </div>
    )
}


ReactDOM.render(<Pancho />, document.querySelector("#root"));