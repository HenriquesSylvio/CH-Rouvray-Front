import React, {useState} from 'react';
import Profile from "./Profile";
import Posts from "../posts/Posts";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AddPostButton from "../../components/AddPostButton";
import UpdateProfilButton from "../../components/UpdateProfilButton";

const Account = (props) => {
    const [currentTab, setCurrentTab] = useState({name: "profile"});
    const handleTabs = (name) => {
        setCurrentTab({name})
    }
    return (
        <>
        <div className="component-wrapper">
            <div className="title-page mb-5">
                <h1 className="text-center text-white">Mon compte</h1>
            </div>
            {/*<IconButton className="center">*/}
                <Avatar className="center mb-4" style={{width: 200, height: 200}}/>
            {/*</IconButton>*/}
            <h3 className="text-center">
                Henriques Sylvio
            </h3>
            <h3 className="text-center">
                Mail : henriques.sylvio@outlook.fr
            </h3>

            <UpdateProfilButton/>
            </div>
        </>
    );
};

export  default Account;
