import styled from 'styled-components'

export const Header = styled.div`
    display: flex;
    justify-content: space-around;

    h1{
        margin: auto 0;
        font-size: 42px;
    }
    img{
        padding: 10px 0;
    }
    img:nth-child(1){
        transform: rotate(-5deg);
    }
    img:nth-child(3){
        transform: rotate(10deg);
    }
    img:nth-child(6){
        transform: rotate(70deg);
    }
    @media (max-width: 767px){
        img {
            display: none;
        }
    }
`
