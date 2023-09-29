import Logo from "./Logo";
import './index.css';
import SideBar from "./SideBar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";
import Card from "./Faculty";
export default function LayoutMani() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col"><Logo /></div>
                <div className="col-10"><Header /></div>
            </div>

            <div className="row">
                <div className="col-2"><SideBar /></div>
                <div className="col-10">
                    <div class='container-fluid'>
                        <div className="row">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col footer">
                         © 2023 Copyright - Sachin Patadiya :
                </div>
            </div>
        </div>
    )
}