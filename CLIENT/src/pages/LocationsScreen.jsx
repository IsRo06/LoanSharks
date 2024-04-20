import React from "react";
import styles from "./LocationsScreen.module.css"
import FloridaIMg from "../images/Map_of_Florida_Regions.png"
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";




export default function LocationsScreen(){


    return(
        
        <div className={styles.outerBox}>
            <Header/>
            <div className={styles.space}/>
            <div className={styles.secondBox}>
                <img id={styles.stateImg} src={FloridaIMg} alt=""/>
                
            </div>
            <Footer/>
        </div>
    )
}


                // <MapProvider
                //     width={800}
                //     height={400}
                //     projection="geoAzimuthalEqualArea"
                //     projectionConfig={{ rotate: [-10.0, -53.0, 0], scale: 1200,}}
                //     >
                //     <svg viewBox="0 0 800 400">
                //         <Geographies geography={geoUrl}>
                //             {({ geographies }) =>
                //                 geographies.map((geo) => (
                //                     <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />
                //             ))
                //             }
                //         </Geographies> 
                //     </svg>
                // </MapProvider>