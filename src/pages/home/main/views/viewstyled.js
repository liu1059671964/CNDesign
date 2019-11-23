import styled from 'styled-components'

const H3Wrap = styled.ul`
span{
    border-left:.03rem solid red;
    /* display:inline-block; */
    margin-right:0.06rem;
}


    line-height: .3rem;
    padding: 0 .2rem;
    padding-top: .14rem;
    color: #333;
    font-size: .16rem;
`

const ULWrap = styled.ul`
margin:0 0.10rem;

display:flex;
flex-flow:row wrap;
    li{
        width:1.71rem;
        background:#fff;
        display:flex;
        flex-direction:column;
        margin-bottom:0.11rem;
        &:nth-of-type(2n-1){
            margin-right:0.1rem;
   }
   h2{
        font-size:0.14rem;
        width:1.6rem;
        font-weight:500;
        padding-left:0.1rem;
        margin-top:0.08rem;
        overflow:hidden;
        display:inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
   }
   h4{
       color:#686868;
       font-size:0.12rem;
       font-weight:400;
       padding-left:0.1rem;
       line-height:0.24rem;
   }
   div{
       display:flex;
       flex-direction:row;
       padding-left:0.1rem;
       h2{
        padding-left:0.04rem;
            margin-top:0rem;
            width:0.6rem;
            padding-right:0.1rem;
            text-align:left;
            font-weight:300;
            color:#CBCBCB;
       }
   }
   dd{
       line-height:0.34rem;
       padding:0 0.1rem;
       width:1.64rem;
       display:flex;
       justify-content:space-between;
       h1{
        width:0.76rem;
        display: inline-block;
        font-weight: normal;
        line-height: 0.34rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #777;
       }
       span{
        color: #b0b0b0;
        line-height: 0.34rem;
       }
   }
    }
`
const SwiperWrap = styled.div`
    /* width:100%; */
    height:0;
    /* font-size:0; */
    padding-bottom:43%;
`
export {
    H3Wrap,
    ULWrap,
    SwiperWrap
}