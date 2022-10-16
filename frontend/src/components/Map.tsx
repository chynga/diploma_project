import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
    const mapCenter = useMemo(() => ( {lat: 43.25851, lng: 76.92499}), [])
    const markerPosition = {lat: 43.25851, lng: 76.92499}
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    })

    if (!isLoaded) return <div>Loading...</div>
    return (
        <GoogleMap zoom={14} center={mapCenter} mapContainerClassName="map">
            <Marker position={markerPosition} />
        </GoogleMap>
    );
};

export default Map;
