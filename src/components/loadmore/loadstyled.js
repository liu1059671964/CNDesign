import styled from 'styled-components'
import border from '../styled/border'

const GoTop = border({
    comp: styled.div`
    line-height:0.39rem;
    font-size:0.16rem;
    padding:0 0.1rem;
    color:#999999;
        display:flex;
        justify-content:space-between;
        div{
            span{
                color:#999999;
            }
        }
    `,
    radius: 0,
    width: '1px 0 1px 0',
    style: 'solid',
    color: "#dcdcdc"
})
const Foot = styled.div`
    font-size:0.12rem;
    color:#999999;
    text-align:center;
    line-height:0.4rem;
`
export {
    GoTop,
    Foot
}