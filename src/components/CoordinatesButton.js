import React from 'react';

class CoordinatesButton extends React.Component {

    coordFunc = e => {
        let xCoord = parseInt(e.clientX)
        let yCoord = parseInt(e.clientY)
        let coordArray = [xCoord, yCoord]
        this.props.onReceiveCoordinates(coordArray)
    }

    render() {
        return (
            <button className="coordinates" onClick={this.coordFunc}>
                Hey!
            </button>
        )
    }


}

export default CoordinatesButton
