import React from "react";
import { Box } from "@mui/material";
import { YMaps, Placemark, Map } from "react-yandex-maps";

export default function OurLocation() {
  return (
    <Box width="100%" height="100%">
      <YMaps>
        <Map
          width="100%"
          height="100%"
          defaultState={{
            center: [42.291055, -83.736046],
            zoom: 9,
            controls: ["zoomControl", "fullscreenControl"],
          }}
          modules={["control.ZoomControl", "control.FullscreenControl"]}
        >
          <Placemark
            options={{
              preset: "islands#blueShoppingIcon",
              iconColor: "#c2a502",
            }}
            defaultGeometry={[42.291055, -83.736046]}
            modules={["geoObject.addon.balloon"]}
            properties={{
              balloonContent: `
              <div class="balloon">
              <div class="balloon-titel">The Carats</div>
              <div class="balloon-descript">Jewelry store</div>
              <div class="baloon-tel">
              tel: 
              <a href="tel:0123 456 7898">0123 456 7898</a>
              </div>
              </div>
              `,
            }}
          />
        </Map>
      </YMaps>
    </Box>
  );
}
