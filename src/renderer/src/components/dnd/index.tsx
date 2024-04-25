import { useState } from "react";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import widgets from '@/mock/widgets.json';
import styles from "./index.module.css";

const Dnd = (props) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={ `${styles.dnd} ${isExpanded ? styles.dndExpand : ''}`}>
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
                {
                    widgets.map((widget, index) => (
                        <div className={styles.contentItem} key={index}>
                            { widget.name }
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Dnd;
