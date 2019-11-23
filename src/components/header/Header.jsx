import React from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { HeaderWarp } from './styledHeader'
import LogoImg from '../../lib/images/logo.png'
import { connect } from 'react-redux'
// import { changeOpen } from '../actionCreator'

const mapState = (state) => {
    return {
        open: state.open.open
    }
}
const mapDispatch = (dispatch) => {
    return {
        changeOpen(status) {
            dispatch({
                type: 'change',
                open: !status
            })
        }
    }
}
const Header = (props) => {
    // console.log(props)
    const handleClick = () => {

        props.changeOpen(props.open)
    }
    return (
        <HeaderWarp>
            <NavBar
                className='navbar'
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis" />,
                ]}
            >
                <div className="logo" onClick={handleClick}>

                    <svg t="1574413014209" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2577" width="24" height="24"><path d="M145.3056 231.389867H907.946667c17.339733 0 31.573333-15.086933 31.573333-33.4848 0-18.5344-14.2336-33.621333-31.573333-33.621334H145.3056c-17.6128 0-31.709867 15.086933-31.709867 33.621334 0 18.397867 14.097067 33.4848 31.709867 33.4848zM907.946667 482.884267H145.3056c-17.6128 0-31.709867 14.984533-31.709867 33.518933 0 18.568533 14.097067 33.553067 31.709867 33.553067H907.946667c17.339733 0 31.573333-14.984533 31.573333-33.553067-0.034133-18.5344-14.267733-33.518933-31.573333-33.518933z m0 331.502933H145.3056c-17.6128 0-31.709867 15.018667-31.709867 33.655467 0 18.397867 14.097067 33.416533 31.709867 33.416533H907.946667c17.339733 0 31.573333-15.018667 31.573333-33.416533-0.034133-18.602667-14.267733-33.655467-31.573333-33.655467z" p-id="2578" fill="#ffffff"></path></svg>
                </div>
                <img src={LogoImg} style={{ width: '0.56rem' }} alt="" />

            </NavBar>
        </HeaderWarp>
    );
}


export default connect(mapState, mapDispatch)(Header);

