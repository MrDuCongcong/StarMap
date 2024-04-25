import Dnd from '../dnd';
import Graph from "../graph";
import styles from './index.module.css';

const Editor = () => {
    return (
        <div className={styles.editor}>
            <Dnd/>
            <Graph/>
        </div>
    )
};

export default Editor;