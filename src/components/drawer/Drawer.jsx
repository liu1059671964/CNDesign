import React, { Component } from 'react';
import { Drawer, List } from 'antd-mobile';//, NavBar, Icon
import PeopleImg from '../../lib/images/people.jpg'
import './style.css'
import { SpanWrap } from './styled'
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
class Drawers extends Component {
    state = {
        open: false
    }

    onOpenChange = (...args) => {
        // console.log(args[0], this.props.open);
        this.props.changeOpen(!args[0])
    }
    render() {
        // const [state, dispatch] = useReducer(reducer, initialState);
        const sidebar = (
            <List style={{ width: '1.75rem' }}>
                <List.Item
                    className="firstItem"
                >
                    <span style={{ background: ` url(${PeopleImg})`, backgroundSize: '0.83rem', height: '0.83rem', width: '0.83rem', borderRadius: '50%', display: 'inline-block' }}></span>
                    <p>请登录</p>
                </List.Item>
                {
                    ['首页', '作品', '咨询', '文章', '字体'].map((i, index) => {
                        return (<List.Item style={{ fontSize: '0.16rem' }} key={{ i } + index}> <SpanWrap></SpanWrap>{i}</List.Item>);
                    })
                }
                <List.Item className="sfive">注册</List.Item>
            </List >
        )
        return (
            <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}//document.documentElement.clientHeight 
                // enableDragHandle
                touch
                contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 52 }}
                sidebar={sidebar}
                open={this.props.open}
                onOpenChange={this.onOpenChange}
            >

            </Drawer>

        );
    }
}

export default connect(mapState, mapDispatch)(Drawers);