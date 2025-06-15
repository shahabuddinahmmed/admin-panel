import React from 'react';
import "./widget.scss" 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Widget = ( {type }) => {
    let data;

    //temporary data
    const amount =100;
    const diff = 25;

    switch(type){
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: <GroupsIcon className='icon' style= {{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)"
                }}/>
            }
            break;

        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "Views all order",
                icon: <ShoppingCartIcon className='icon'style= {{
                    color: "goldenrod",
                    backgroundColor: "rgba(2218, 165, 32, 0.2)"
                }}/>
            }
            break;

        case "earning":
            data = {
                title: "EARNING",
                isMoney: true,
                link: "Views all earning",
                icon: <MonetizationOnIcon className='icon'style= {{
                    color: "green",
                    backgroundColor: "rgba(0, 128, 0, 0.2)"
                }}/>
            }
            break;

        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "Views Details",
                icon: <AttachMoneyIcon className='icon'style= {{
                    color: "purple",
                    backgroundColor: "rgba(128, 0, 128, 0.2)"
                }}/>
            }
            break;

        default:
            break;
    }

  return (
        <>
            <div className="widget">
                <div className="left">
                    <span className='title'>{ data.title}</span>
                    <span className="counter">{ data.isMoney && " $ "} { amount}</span>
                    <span className="link">{data.link}</span>
                </div>
                <div className="right">
                    <div className="percentage positive">
                        <KeyboardArrowUpIcon />
                        {diff} %
                    </div>
                    {data.icon}
                </div>
            </div>
        </>
  )
}

export default Widget