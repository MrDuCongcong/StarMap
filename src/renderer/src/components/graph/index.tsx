import GridLayout from "react-grid-layout";
import Widget from "../widget";
import styles from "./index.module.css";
import metadata from "@/mock/layout.json";

const Graph = () => {
    return (
        <div className={styles.graph}>
            <GridLayout cols={12} rowHeight={30} width={1200}>
                {
                    metadata.map((item, index) => (
                        <div key={index} data-grid={item.position}>
                            <Widget label={item.label}></Widget>
                        </div>
                    ))
                }
            </GridLayout>
        </div>
    );
};

export default Graph;