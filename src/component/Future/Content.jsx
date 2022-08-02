import React from 'react'
import "./content.css"


//up arrow icon
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
//down arrow icon
import SouthIcon from '@mui/icons-material/South';

export default function content() {
    return (
        <div className="futuered">
            <div className="futurewrapp">
                <span className="futureTitle">Revanue</span>
                <div className="futuremoneycontainer">
                    <span className="futuremoney">$23,556</span>
                    <span className="futuremoneyrating">
                        -2.11
                        <SouthIcon className='arrows-red '/>
                    </span>
                </div>
                <div className="future-sub-title">last month comparatively results</div>
            </div>
            <div className="futurewrapp">
                <span className="futureTitle">Sales</span>
                <div className="futuremoneycontainer">
                    <span className="futuremoney">$233,556</span>
                    <span className="futuremoneyrating">
                        +2.11
                        <ArrowUpwardIcon className='arrows-green ' />
                    </span>
                </div>
                <div className="future-sub-title">last month comparatively results</div>
            </div>
            <div className="futurewrapp">
                <span className="futureTitle">cost</span>
                <div className="futuremoneycontainer">
                    <span className="futuremoney">$2,556</span>
                    <span className="futuremoneyrating">
                        -1.1
                        <SouthIcon className='arrows-red '/>
                    </span>
                </div>
                <div className="future-sub-title">last month comparatively results</div>
            </div>
        </div>
    )
}
