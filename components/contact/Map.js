import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
    width: '',
    height: '50vh',
};
const center = {
    lat: 37.42216,
    lng: -122.08427,
};

const Map = () =>
{
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyB6aiCZ6Ps8GSf75o5FlC62Ij4dzm7jTT4",
        libraries,
    });

    if (loadError)
    {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded)
    {
        return <div>Loading maps</div>;
    }
    return (
        <div className='mb-16'>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
            >
                <Marker position={center} />
            </GoogleMap>
        </div>
    );
};

export default Map;