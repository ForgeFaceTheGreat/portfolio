import React from "react";

import "../styles/Banner.css"

export default function Banner({title, index})
{
    var left = "left"
    var right = "right"

    if (index % 2 != 0)
    {
        left = "right"
        right = "left"
    }

    return (
        <>
            <div className="bounds">
                <div className={`column ${left}`}>
                    <span>
                        {index}
                    </span>
                </div>

                <div className={`column ${right}`}>
                    <span>
                        {title}
                    </span>
                </div>
            </div>
        </>
    )
}