import { MoreVertOutlined } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react';
import "./featured.scss";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";


const Featured = () => {

    const props = {
        percent: 70, // is require
        colorSlice: "#00a1ff",
        colorCircle: "#00a1ff",
        fontColor: "#365b74",
        fontSize: "1.6rem",
        fontWeight: 400,
        size: 100,
        stroke: 8,
        strokeBottom: 4,
        speed: 60,
        cut: 0,
        rotation: -90,
        opacity: 10,
        // fill: "#00897B",
        unit: "%",
        textPosition: "0.35em",
        animationOff: false,
        strokeDasharray: "10,1",
        inverse: false,
        round: false,
        number: true,
        linearGradient: ["#ffff00", "brown"]
      };

  return (
        <>
            <div className="featured">
                <div className="top">
                    <h2 className='title'>Total Revenue</h2>
                    <MoreVertOutlined fontSize='small' />
                </div>
                <div className="bottom">
                    <div className="featuredChart">
                        <CircularProgressBar {...props} />
                    </div>
                    <p className="title">Total sales made Today</p>
                    <p className="amount">$ 230</p>
                    <p className="desc">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui rem minus consectetur.
                    </p>
                    <div className="summary">
                        <div className="item">
                            <div className="itemTitle">Today</div>
                            <div className="itemResult negative">
                                <KeyboardArrowDownIcon /> 
                                <div className="resultAmount">$12.4K</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="itemTitle">Last Week</div>
                            <div className="itemResult positive">
                                <KeyboardArrowUpIcon />
                                <div className="resultAmount">$12.4K</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="itemTitle">Last Month</div>
                            <div className="itemResult positive">
                                <KeyboardArrowUpIcon />
                                <div className="resultAmount">$12.4K</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Featured