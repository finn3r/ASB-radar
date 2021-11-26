import React, {useState} from 'react';
import {MapContainer, TileLayer, useMapEvent} from 'react-leaflet';
import Radar from "../Radar/Radar";
import "leaflet/dist/leaflet.css";
import './App.scss';

const MapEvents = (props) => {
    const mapEvent = useMapEvent('click', (e) => {
        const clickPosition = e.latlng;
        if (props.radarMovable) {
            props.changeRadarPosition(clickPosition);
        } else {
            mapEvent.setView(clickPosition, mapEvent.getZoom(), {animate: true,});
        }
    });
    return null;
}

const App = () => {
    const startPosition = {lat: 59.94, lng: 30.3}
    const [movable, setMovable] = useState(false);
    const [radarPosition, setRadarPosition] = useState(startPosition);
    const [radius, setRadius] = useState(0.5);
    const [color, setColor] = useState('#00FF00');
    const [map, setMap] = useState(null);

    const GoToNowPosition = () => {
        map.locate().on("locationfound", function (e) {
            map.flyTo(e.latlng, map.getZoom());
            setRadarPosition(e.latlng);
        })
    };

    return (
        <div id="App">
            <div className={'map__buttons_container'}>
                <button className={'map__button_goto map__control_element__container'} onClick={GoToNowPosition}>
                    Перместиться на текущую локцию
                </button>
                <label className={'map__checkbox_movable__container map__control_element__container'}>
                    <input className={'map__checkbox_movable__input'} type={"checkbox"} checked={movable}
                           onChange={() => setMovable(!movable)}/>
                    <p>Перемещение радара по клику</p>
                </label>
                <label className={'map__radius_input__container map__control_element__container'}>
                    <p>Введите радиус радара(км):</p>
                    <input className={'map__radius_input__field'} type={"text"} value={radius}
                           onChange={(e) => setRadius(e.target.value.replace(',', '.'))}/>
                </label>
                <label className={'map__color_input__container map__control_element__container'}>
                    <p>Выберите цвет для радара:</p>
                    <input className={'map__color_input__field'} type={"color"} value={color}
                           onChange={(e) => setColor(e.target.value)}/>
                </label>
            </div>
            <MapContainer eventHandlers={{click: (e) => console.log(e)}} whenCreated={setMap} center={startPosition}
                          zoom={14} style={{height: "100vh"}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <MapEvents radarMovable={movable} changeRadarPosition={setRadarPosition}/>
                <Radar color={color} position={radarPosition} radius={radius * 1000}/>
            </MapContainer>
        </div>
    );
}

export default App;
