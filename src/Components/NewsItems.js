import React from 'react'
import "./NewsItems.css";
export default function NewsItems(props) {
    return (
        <>
            <div className="mainItem">
                <div className="newsItem">

                    <img className="newsImg" src={props.url} alt="Loading Please wait" />

                    <div className="Head">
                        <h2 className="headLine">
                            {props.headline}
                        </h2>
                        <div className="mainContent">
                            <h3 className='description'>{props.description}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
