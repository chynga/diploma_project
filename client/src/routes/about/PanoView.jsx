import { useEffect } from "react";
import * as PANOLENS from "panolens";
import * as THREE from "three";

const infospotPositions = {
    "hallToRoom1": new THREE.Vector3(1250, 50, -5000),
    "room1ToHall": new THREE.Vector3(-500, 50, -500),
    "hallToRoom2": new THREE.Vector3(3000, 50, -750),
    "room2ToHall": new THREE.Vector3(-500, 50, -500),
    "hallToLobby": new THREE.Vector3(-400, 50, -4000),
    "lobbyToHall": new THREE.Vector3(-500, 50, -500),
    "lobbyToRoom3": new THREE.Vector3(1500, 50, 0),
    "room3ToLobby": new THREE.Vector3(-500, 50, -500),
    "lobbyToRoom4": new THREE.Vector3(1000, 50, 1500),
    "room4ToLobby": new THREE.Vector3(-500, 50, -500),
    "lobbyToRoom5": new THREE.Vector3(-1400, 50, 4000),
    "room5ToLobby": new THREE.Vector3(-800, 50, -500),
}

const Pano = () => {
    useEffect(() => {
        const panoHall = new PANOLENS.ImagePanorama("/pano/entrance.jpg");
        const panoRoom1 = new PANOLENS.ImagePanorama("/pano/room1.jpg");
        const panoRoom2 = new PANOLENS.ImagePanorama("/pano/room2.jpg");
        const panoLobby = new PANOLENS.ImagePanorama("/pano/lobby.jpg");
        const panoRoom3 = new PANOLENS.ImagePanorama("/pano/room3.jpg");
        const panoRoom4 = new PANOLENS.ImagePanorama("/pano/room4.jpg");
        const panoRoom5 = new PANOLENS.ImagePanorama("/pano/room5.jpg");
        panoHall.link(panoRoom1, infospotPositions.hallToRoom1);
        panoRoom1.link(panoHall, infospotPositions.room1ToHall);
        panoHall.link(panoRoom2, infospotPositions.hallToRoom2);
        panoRoom2.link(panoHall, infospotPositions.room2ToHall);
        panoHall.link(panoLobby, infospotPositions.hallToLobby);
        panoLobby.link(panoHall, infospotPositions.lobbyToHall);
        panoLobby.link(panoRoom3, infospotPositions.lobbyToRoom3);
        panoRoom3.link(panoLobby, infospotPositions.room3ToLobby);
        panoLobby.link(panoRoom4, infospotPositions.lobbyToRoom4);
        panoRoom4.link(panoLobby, infospotPositions.room4ToLobby);
        panoLobby.link(panoRoom5, infospotPositions.lobbyToRoom5);
        panoRoom5.link(panoLobby, infospotPositions.room5ToLobby);

        const viewer = new PANOLENS.Viewer({
            container: document.querySelector("#pano"),
            autoHideInfospot: false,
        });

        viewer.add(panoHall, panoRoom1, panoRoom2, panoLobby, panoRoom3, panoRoom4, panoRoom5);
    }, []);

    return (
        <>
            <div id="pano" className="mt-10 mx-20 h-[400px]">
                
            </div>
        </>
    );
};

export default Pano;
