import { TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import './styles.css';

import Mains from '../../pages/home/main/Main'
import Works from 'pages/home/works/Works'
class Tabbars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'index',
            hidden: false,
            fullScreen: true
        };
    }
    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                    tabBarPosition="top"
                >
                    <TabBar.Item

                        title="首页"
                        // style={{ fontSize: '.15rem' }}
                        key="Life"
                        icon={<div style={{
                            width: '2px',
                            height: '2px',
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '2px',
                            height: '2px',
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'index'}
                        className={this.state.selectedTab === this.title ? 'active' : ''}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'index',
                            });
                        }}
                    >
                        <Mains></Mains>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '2px',
                                height: '2px',
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '2px',
                                height: '2px',
                            }}
                            />
                        }
                        title="作品"
                        key="Koubei"

                        selected={this.state.selectedTab === 'works'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'works',
                            });
                        }}
                        data-seed="logId1"
                    >
                        <Works></Works>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '2px',
                                height: '2px',
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '2px',
                                height: '2px',
                            }}
                            />
                        }
                        title="咨询"
                        key="Friend"

                        selected={this.state.selectedTab === 'look'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'look',
                            });
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '2px',
                                height: '2px',
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '2px',
                                height: '2px',
                            }}
                            />
                        }
                        title="文章"
                        key="Friend"

                        selected={this.state.selectedTab === 'article'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'article',
                            });
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '2px',
                                height: '2px',
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '2px',
                                height: '2px',
                            }}
                            />
                        }
                        title="地图"
                        key="Friend"

                        selected={this.state.selectedTab === 'map'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'map',
                            });
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

export default Tabbars;