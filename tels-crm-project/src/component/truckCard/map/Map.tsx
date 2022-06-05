// import React, { memo, SetStateAction, useCallback, useState } from "react";
// import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// const containerStyle = {
//     width: "500px",
//     height: "500px",
//     margin: "40px",
// };

// type PropsType = {
//     latitude?: string;
//     longitude?: string;
// };

// const Map: React.FC<PropsType> = ({
//     latitude = "55.018600",
//     longitude = "32.293196",
// }) => {
//     const center = {
//         lat: +latitude,
//         lng: +longitude,
//     };

//     const { isLoaded } = useJsApiLoader({
//         id: "google-map-script",
//         googleMapsApiKey: "AIzaSyCXDhAfeFG_kqxjh_l219GRV2VHGzM2j4w",
//     });

//     const [map, setMap] = useState(null);

//     const onLoad = useCallback(function callback(map: google.maps.Map) {
//         const bounds = new window.google.maps.LatLngBounds(center);
//         map.fitBounds(bounds);
//         // setMap(map);
//     }, []);

//     const onUnmount = useCallback(function callback(map: google.maps.Map) {
//         setMap(null);
//     }, []);

//     return isLoaded ? (
//         <GoogleMap
//             mapContainerStyle={containerStyle}
//             center={center}
//             zoom={1}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//         >
//             <Marker />
//             <></>
//         </GoogleMap>
//     ) : (
//         <></>
//     );
// };

// export default memo(Map);

import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

type PropsType = {
    latitude?: string;
    longitude?: string;
    number?: string;
};

const Map: React.FC<PropsType> = ({
    latitude = "55.018600",
    longitude = "32.293196",
    number = "number",
}) => {
    const getMapOptions = (maps: any) => {
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

    const [center, setCenter] = useState({ lat: +latitude, lng: +longitude });
    const [zoom, setZoom] = useState(8);
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
                <Marker
                    lat={+latitude}
                    lng={+longitude}
                    name={number}
                    color="orange"
                />
            </GoogleMapReact>
        </div>
    );
};

export default Map;
