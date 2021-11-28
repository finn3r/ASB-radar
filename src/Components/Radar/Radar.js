import React, {useEffect, useState} from 'react';
import './Radar.scss';
import {Circle, LayerGroup, Polyline, useMapEvent} from "react-leaflet";

const getPointPosition = (latlng, distance, heading) => {
    heading = (heading + 360) % 360;
    let rad = Math.PI / 180,
        radInv = 180 / Math.PI,
        R = 6378137, // approximation of Earth's radius
        lon1 = latlng.lng * rad,
        lat1 = latlng.lat * rad,
        rheading = heading * rad,
        sinLat1 = Math.sin(lat1),
        cosLat1 = Math.cos(lat1),
        cosDistR = Math.cos(distance / R),
        sinDistR = Math.sin(distance / R),
        lat2 = Math.asin(sinLat1 * cosDistR + cosLat1 *
            sinDistR * Math.cos(rheading)),
        lon2 = lon1 + Math.atan2(Math.sin(rheading) * sinDistR *
            cosLat1, cosDistR - sinLat1 * Math.sin(lat2));
    lon2 = lon2 * radInv;
    lon2 = lon2 > 180 ? lon2 - 360 : lon2 < -180 ? lon2 + 360 : lon2;
    return [lat2 * radInv, lon2];
}

const getPointsPosition = (latlng, distance) => {
    let points = [];
    let heading = [0, 180, 270, 90];
    for (let i = 0; i < 4; i++) {
        points.push(getPointPosition(latlng, distance, heading[i]));
    }
    return [[latlng, points[0]], [latlng, points[1]], [latlng, points[2]], [latlng, points[3]]];
}

const RadarPolyLine = (props) => {
    const [heading, setHeading] = useState(0);
    const center = props.center;
    const point = getPointPosition(center, props.length, heading);
    const positions = [center, point];
    const delay = 5;
    useEffect(() => {
        let timer1 = setTimeout(() => setHeading((heading <= 360) ? (heading + 1) : 0), delay);
        return () => {
            clearTimeout(timer1);
        };
    }, [heading]);
    return (
        <Polyline
            positions={positions}
            pathOptions={{color: props.color, weight: props.weight}}
        />
    );
}

const Radar = (props) => {
    const radarColor = props.color;
    const radarPosition = props.position;
    const radarRadius = parseFloat(props.radius);
    const map = useMapEvent('zoom', () => {
        setWeight((map.getZoom() / 6).toString());
    });
    const [weight, setWeight] = useState((map.getZoom() / 6).toString());
    const getCircles = (count, radius) => {
        let circles = [];
        for (let i = 1; i < count; i++) {
            circles[i - 1] = radius - i * 100;
        }
        return circles;
    }
    const circlesCount = Math.trunc(radarRadius / 100);
    const circles = getCircles(circlesCount, radarRadius);
    const points = getPointsPosition(radarPosition, radarRadius);
    if (radarRadius < 100) return null;
    return (
        <LayerGroup>
            <Circle
                center={radarPosition} radius={radarRadius}
                pathOptions={{color: radarColor, weight: weight}}
            />
            <Polyline
                positions={points}
                pathOptions={{color: radarColor, weight: weight}}
            />
            <RadarPolyLine
                center={radarPosition}
                color={radarColor}
                weight={weight}
                time={2}
                length={radarRadius}
            />
            {circles.map((circlesRadius, i) =>
                <Circle
                    key={"Circle" + i}
                    center={radarPosition} radius={circlesRadius}
                    pathOptions={{color: radarColor, weight: weight - 1, fillOpacity: 0}}
                />
            )}
        </LayerGroup>
    );
}
export default Radar;