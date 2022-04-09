import styled from 'styled-components'

export const Card = styled.div`
    max-width: 300px;
    // variant jako props (muze byt jiny nazev nez variant), kde mohu menit css pro jednu komponentu
    //background-color: ${(props) => props.variant === 'white' ? 'white' : 'brown'};
    img {
        max-width: 100%;
    }
    &:hover {
        background-color: blue;
    }
`