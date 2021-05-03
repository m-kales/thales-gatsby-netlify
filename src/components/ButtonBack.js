import React from 'react';
import { navigate } from 'gatsby'

export class ButtonBack extends React.Component {

    render() {
        return( 
            <button className="btn btn-back is-size-2" onClick={() => navigate(-1)}>
            ←
          </button>
        )
    }
}