import { useState } from "react";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import materials from "@/mock/materials.json";
import styles from "./index.module.css";

const Dnd = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    const onDragStart = (event, component) => {
        event.dataTransfer.setData("component", JSON.stringify(component));
    };

    return (
        <div className={`${styles.dnd} ${isExpanded ? styles.dndExpand : ""}`}>
            <div className={styles.dndHeader}>
                <Button
                    className={styles.dndToggleButton}
                    type="text"
                    icon={
                        isExpanded ? (
                            <MenuFoldOutlined />
                        ) : (
                            <MenuUnfoldOutlined />
                        )
                    }
                    onClick={toggleExpanded}
                ></Button>
            </div>
            <div className={styles.dndContent}>
                {materials.map((widget, index) => (
                    <div className={styles.contentItem} key={index} draggable onDragStart={(event) => {
                        onDragStart(event, widget);
                    }}>
                        {widget.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dnd;
