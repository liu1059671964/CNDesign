import React, { useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { Carousel } from 'antd-mobile';
import { get } from 'utils/http'
import { SwiperWrap } from './viewstyled'
function Swiper(props, ref) {
    const name = useRef();

    useImperativeHandle(ref, () => name.current);
    let [data, setdata] = useState([]);
    useEffect(() => {

        (async () => {
            let url = '/api/Api/Base/SliderBannel';
            let params = '';
            let rs = await get({ url, params })
            // console.log(rs.data.Data)
            setdata(rs.data.Data)
        })()
    }, [props])
    return (
        <div ref={name}>
            <SwiperWrap>
                {
                    data.length > 0 && (
                        <Carousel
                            autoplay={true}
                            infinite
                        >
                            {
                                data.map((value) => {
                                    return <img key={value.advertID} src={value.cover} alt='' />
                                })
                            }
                        </Carousel>
                    )
                }
            </SwiperWrap>
        </div>
    );
}


export default forwardRef(Swiper);

