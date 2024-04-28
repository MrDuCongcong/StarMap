import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "@/components/navBar";

const Portal: React.FC = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Portal;
