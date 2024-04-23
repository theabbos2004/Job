import React, { useEffect } from 'react';

const Map = () => {
    useEffect(()=>{
        if (window.ymaps) {
            window.ymaps.ready(() => {
                const map = new window.ymaps.Map('map', {
                    center: [55.76, 37.64],
                    zoom: 10
                });
                const mapHeight = map.container.getSize()[1];
                map?.controls?.remove("zoomControl")
                map?.controls?.remove("searchControl")
                map?.controls?.remove("trafficControl")
                map?.controls?.remove("fullscreenControl")
                map?.controls?.remove("typeSelector")
                map?.controls?.remove("geolocationControl")
                map.controls.add('zoomControl', {
                    size:"small",
                    position: {
                    right: "5%",
                    top: mapHeight / 2
                    }
                });

                map.controls.add('geolocationControl', {
                    size:"small",
                    position: {
                    right: "5%",
                    top: mapHeight / 1.5
                    }
                });

                map.geoObjects.add(new window.ymaps.Placemark([55.76, 37.64],  {
                    hintContent: 'A custom placemark icon',
                    balloonContent: 'This is a nice place',
                  },{
                    iconLayout : "default#image",
                    iconImageHref:require('../../assets/img/mark1.png'),
                    iconImageSize:[70,100],
                    iconImageOffset:[-35,-90]
                }));
            });
        }
    },[])
  return (
        <div id="map" className='position-absolute t-0 s-0 w-100 h-100'></div>
  );
};

export default React.memo(Map);
