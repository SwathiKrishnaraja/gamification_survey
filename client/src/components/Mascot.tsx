import React from 'react'
import mascot from '../images/mascot.png'
import styled from 'styled-components'

const MascotImage = styled.img`
    width: 100px;
    height: 90px;
    cursor: pointer;
    border-radius: 5px;
    border: darkgreen;
    margin: 10px;
    background: papayawhip;
    border-radius: 50px;
`

type Props = {
    handleMascot: () => void
    provideBadgeForMascot?: () => void
    addPoints?: () => void
}
const Mascot: React.FC<Props> = ({ handleMascot, provideBadgeForMascot, addPoints }) => {
    const mascotClickHandler = () => {
        handleMascot()
        if (provideBadgeForMascot) {
            provideBadgeForMascot()
        }
        if (addPoints) {
            addPoints()
        }
    }
    return (
        <div>
            <MascotImage alt="mascot" src={mascot} onClick={mascotClickHandler} />
        </div>
    )
}

export default Mascot