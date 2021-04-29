import React from 'react';

export class ButtonBack extends React.Component {
    handleClick() {
        window.history.back()
    }
    render() {
        return( 
            <button className="btn btn-back is-size-2" onClick={this.handleClick}>
                ←
            </button>
        )
    }
}