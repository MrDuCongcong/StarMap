import { useRef } from "react";
import { Button } from "antd";
import DashboardEdit from "@/pages/dashboardEdit";
import styles from "./index.module.css";

const DashboardList = () => {
    const editRef = useRef();
    const handleCreate = () => {};

    return (
        <div className={styles.dashboardList}>
            <div className={styles.dashboardListHeader}>
                <Button onClick={handleCreate}>创建看板</Button>
            </div>
            <div className={styles.dashboardListContent}></div>
            <DashboardEdit ref={editRef}></DashboardEdit>
        </div>
    );
};

export default DashboardList;
