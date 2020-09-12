import React from 'react'
import './Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

//Use ES7 snippets
function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <MenuSharpIcon />
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" />
            </div>
            <div className="header__input">
                <input type="text" placeholder="Search" />
                <SearchIcon className="header__inputButton" />
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Evans Kibet" src="https://www.google.com/search?q=evans+kiptarus&sxsrf=ALeKk03qNhg4dhjHso43w7Hsv51BruSVtg:1599909988410&tbm=isch&source=iu&ictx=1&fir=anK2w0ok-9BsRM%252ChGPYFs7P2bxKBM%252C_&vet=1&usg=AI4_-kSmodeG62sVS2oYg3Uv9qVzHs8m3w&sa=X&ved=2ahUKEwjsjKCUwePrAhWNzIUKHU26AJAQ9QF6BAgKEAg" />
            </div>
        </div>
    )
}

export default Header
