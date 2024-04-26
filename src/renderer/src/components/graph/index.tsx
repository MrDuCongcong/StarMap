import GridLayout from "react-grid-layout";
import Widget from "../widget";
import styles from "./index.module.css";
import React, { useState } from "react";

const Graph:React.FC = () => {
    const [widgets, setWidgets] = useState([]);
    const handleDragEnter = () => {};
    const handleDragLeave = () => {};
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        let material:any = event.dataTransfer.getData("component");
        material = JSON.parse(material);
        let newWidget = {
            label: material.name,
            position: {
                x: 1,
                y: 3,
                w: 2,
                h: 4,
            },
        };
        setWidgets([...widgets, newWidget]);
    };
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        // 取消默认行为，保证元素正常触发onDrop事件
        event.preventDefault();
    };
    return (
        <div
            className={styles.graph}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
            <GridLayout cols={12} rowHeight={30} width={1200}>
                {widgets.map((item, index) => (
                    <div key={index} data-grid={item.position}>
                        <Widget label={item.label}></Widget>
                    </div>
                ))}
            </GridLayout>
        </div>
    );
};

export default Graph;
