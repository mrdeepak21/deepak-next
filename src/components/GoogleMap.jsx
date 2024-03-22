import React from 'react';

 export default function GoogleMap (props) {
    return (
        <div className="map" id="map">
            <iframe
                src={props.src}
                height="140"
                frameBorder="0"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                style={{border:0,width:'100%'}}
            />
        </div>
    );
};