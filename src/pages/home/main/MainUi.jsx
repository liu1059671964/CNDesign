// import React, { useRef, useMemo } from 'react';
// import Swiper from './views/Swiper'
// import { MainWrap } from './Mainstyled'
// import Recommend from './views/Recommend'
// import LoadMore from 'components/loadmore/LoadMore'
// function MainUi(props) {
//     let nameRef = useRef();
//     let page = 2;
//     const toTop = () => {
//         let meici = nameRef.current.scrollTop / 30;
//         let timer = setInterval(() => {
//             nameRef.current.scrollTop = nameRef.current.scrollTop - meici;
//             if (nameRef.current.scrollTop <= 0) {
//                 clearInterval(timer);
//             }
//         }, 10)
//     }
//     const gotop = () => {
//         toTop();
//     }
//     const loadmore = () => {
//         console.log(page)
//         page++;
//     }
//     // const child1 = useMemo(() => <Child1 a={a} />, [a]);
//     const Recommend1 = useMemo(() => <Recommend page={page} />, [page])

//     return (
//         <MainWrap ref={nameRef}>
//             <Swiper  ></Swiper>
//             {Recommend1}
//             <LoadMore gotop={gotop} loadmore={loadmore} ></LoadMore>
//         </MainWrap >
//     );
// }

// export default MainUi;


import React, { Component, createRef } from 'react';

import Swiper from './views/Swiper'
import { MainWrap } from './Mainstyled'
import Recommend from './views/Recommend'
import LoadMore from 'components/loadmore/LoadMore'
class MainUi extends Component {
    state = {
        nameRef: createRef(),
        page: 2,
    }
    toTop = () => {
        let meici = this.state.nameRef.current.scrollTop / 30;
        let that = this;
        let timer = setInterval(() => {
            that.state.nameRef.current.scrollTop = that.state.nameRef.current.scrollTop - meici;
            if (that.state.nameRef.current.scrollTop <= 0) {
                clearInterval(timer);
            }
        }, 10)
    }
    gotop = () => {
        this.toTop();
    }
    loadmore = () => {
        this.setState({
            page: this.state.page + 1
        })
    }
    render() {
        return (
            <MainWrap ref={this.state.nameRef}>
                <Swiper></Swiper>
                <Recommend page={this.state.page}></Recommend>
                <LoadMore gotop={this.gotop} loadmore={this.loadmore.bind()} ></LoadMore>
            </MainWrap >
        );
    }
}

export default MainUi;