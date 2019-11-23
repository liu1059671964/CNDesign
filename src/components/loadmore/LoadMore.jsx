import React from 'react';//, {useCallback}
import { GoTop,Foot } from './loadstyled'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
const LoadMore = (props) => {
  
    return (
        <div>
            <WingBlank>
                <Button onClick={props.loadmore} style={{ background: '#c30413', fontSize: '0.14rem' }} type="warning">加载更多</Button><WhiteSpace />
            </WingBlank>
            <GoTop>
                <div><span>触屏版</span> | <span>电脑版</span></div>
                <h3 onClick={props.gotop}><svg t="1574323481546" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1838" width="15" height="15"><path d="M907.955934 352.01498L563.195206 7.254252a24.183503 24.183503 0 0 0-7.565833-5.089161c-0.087882-0.039946-0.167775-0.095871-0.263646-0.135818a24.071654 24.071654 0 0 0-3.890771-1.206379c-0.239678-0.055925-0.463377-0.159785-0.711045-0.207721-1.597853-0.319571-3.219674-0.487345-4.833505-0.487345H497.139968a24.279375 24.279375 0 0 0-19.669569 10.090441L135.65771 352.01498a24.367256 24.367256 0 0 0 0 34.473676l34.473676 34.481665a24.383235 24.383235 0 0 0 34.473676 0l268.151671-268.15966V999.616765a24.375246 24.375246 0 0 0 24.383235 24.383235h48.758481a24.375246 24.375246 0 0 0 24.375246-24.383235V152.243423l268.726898 268.726898a24.383235 24.383235 0 0 0 34.473676 0l34.473676-34.481665a24.367256 24.367256 0 0 0 0.007989-34.473676z" p-id="1839" fill="#8a8a8a"></path></svg>
                回顶部</h3>
            </GoTop>
            <Foot>
                
      Copyright© 2006 - 2017 CNDESIGN
    
            </Foot>
        </div>
    );
}

export default LoadMore;