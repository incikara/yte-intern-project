import React, {useState} from 'react';
import * as IconFa from "react-icons/fa";
import * as IconIo from "react-icons/io";
import { Link, withRouter } from "react-router-dom";
import { SideBar } from "./SideBar";
import { IconContext } from "react-icons";

function NavBar(props) {

    const [sidebar, setSidebar] = useState(false);

    const popUp = () => {
        setSidebar(!sidebar);
    }


    //console.log(props.location);

    return (
        <div>
            <IconContext.Provider value={{color:'white'}}>
            <div className="navigations">
                <Link to='#' className="icon">
                   <IconFa.FaBars onClick={popUp}/> 
                </Link>
            </div>
            <nav className={sidebar ? 'nav active' : 'nav'}>
                <ul className="menu-items">
                    <li className="item">
                        <Link to="#" className="menu">
                            <IconIo.IoMdCloseCircleOutline onClick={popUp}/>
                        </Link>
                    </li>
                    { SideBar.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link className={props.location.pathname === item.path ? "active-route" : null} to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
           </IconContext.Provider>  
        </div>
    )
}

export default withRouter(NavBar);
