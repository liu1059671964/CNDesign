import styled from 'styled-components'

const HeaderWarp = styled.div`
.navbar{
    background:#C30413;
    height:0.50rem;
    position:relative;
    span{
        background-size:0.2rem 0.2rem;
    }
    .logo{
        position:absolute;
        z-index:10000;
        left:.1rem;
        top:0.12rem;
    }
}
   
`

export { HeaderWarp }