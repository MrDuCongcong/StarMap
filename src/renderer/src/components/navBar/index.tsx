import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";

const items: MenuProps['items'] = [
    {
        label: "看板",
        key: "dashboardList",
    },
];

const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const handleMenuClick = (e) => {
        navigate(`/portal/${e.key}`);
    };
    return (
        <div>
            <Menu items={items} onClick={handleMenuClick} mode="horizontal"></Menu>
        </div>
    );
};

export default NavBar;
