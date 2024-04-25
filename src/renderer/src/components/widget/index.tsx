import * as React from "react";

interface WidgetProps {
    label: string;
}

const Widget = (props: WidgetProps) => {
    return <div>{props.label}</div>;
};

export default Widget;
