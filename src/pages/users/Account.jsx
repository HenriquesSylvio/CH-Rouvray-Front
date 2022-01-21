import React, {useState} from 'react';
import Profile from "./Profile";
import Posts from "../posts/Posts";

const Account = (props) => {
    const [currentTab, setCurrentTab] = useState({name: "profile"});
    const [tabs] = useState([
        { tabKey: 'profile', tabTitle: "Mon profile" },
        { tabKey: 'posts', tabTitle: "Mon posts" },
    ]);
    const handleTabs = (name) => {
        setCurrentTab({name})
    }
    return (
        <>
            <div className="tabs">
                <ul>
                    {tabs.map((tab, index) => (
                        <li key={index}
                            className={`tabs-pane ${
                                currentTab.name === tab.tabKey ? "active" : ""
                            }`}
                        >
                            <span onClick={() => handleTabs(tab.tabKey)}>{tab.tabTitle}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="tabs-content">
                {currentTab.name === "profile" && <Profile/>}
                {currentTab.name === "posts" && <Posts/>}
            </div>
        </>
    );
};

export  default Account;
