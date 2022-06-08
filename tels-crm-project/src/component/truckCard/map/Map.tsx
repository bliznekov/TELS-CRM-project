import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

type PropsType = {
    latitude?: string;
    longitude?: string;
    number?: string;
};

const Map: React.FC<PropsType> = ({ latitude = "55.018600", longitude = "32.293196", number = "number" }) => {
    const getMapOptions = () => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "on" }],
                },
            ],
        };
    };

    const [center] = useState({ lat: +latitude, lng: +longitude });
    const [zoom] = useState(8);
    return (
        <div style={{ height: "500px", width: "500px", margin: "40px" }}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyCXDhAfeFG_kqxjh_l219GRV2VHGzM2j4w",
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={getMapOptions}
            >
                <Marker lat={+latitude} lng={+longitude} name={number} color="orange" />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
