import React from "react";
import c from "./Marker.module.scss";

const Marker = (props: any) => {
    const { color, name, id } = props;
    return (
        <div>
            <div
                className={`${c.pin} ${c.bounce}`}
                style={{ backgroundColor: color, cursor: "pointer" }}
                title={name}
            />
            <div className={c.pulse} />
        </div>
    );
};

export default Marker;
