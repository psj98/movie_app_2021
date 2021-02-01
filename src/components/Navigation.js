import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* Link는 Router 안에 있어야 작동 가능 */}
            {/* Link : a태그와 동일, to = href */}
        </div>
    );
}

export default Navigation;