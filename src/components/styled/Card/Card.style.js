import styled from 'styled-components'

export const Card = styled.div`
    position: relative;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0.8em 0.8em;
    transition: 0.3s;
    // variant jako props (muze byt jiny nazev nez variant), kde mohu menit css pro jednu komponentu
    //background-color: ${(props) => props.variant === 'white' ? 'white' : 'brown'};
    :hover{
        opacity: 0.7;
    }
    h2 {
        position: absolute;
        bottom: 0%;
        display: block;
        background: #0000008f;
        margin: 0;
        padding: 8px 0px;
        width: 100%;
        border-radius: 0px 0px 8px 8px;
        line-height: 1.6;
    }
    img {
        max-width: 100%;
        height: 300px;
        border-radius: 8px;
    }
    a {
        line-height: 0;
    }
    @media (max-width: 767px){
        img{
            max-width: 100%;
            height: auto;
        }
        h2 {
            font-size: 1.1em;
        }
    }
`
