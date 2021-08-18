import styled from 'styled-components'

const FootStyle = styled.div`
    font-family: 'Lobster', cursive;
    padding-top: 10px;
    font-size: 18px;
    height: 50px;
    width: 100%;
    background-color: #03989e;
    color: black;
    text-align: center;
    position: fixed;
    left: 0;
    bottom: 0;
`

function Footer() {
    return (
        <FootStyle>
            Created by Adrienne Paquin -- github.com/adriennepaquin
        </FootStyle>
    )
}

export default Footer