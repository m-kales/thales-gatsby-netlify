import React from 'react';

export class WidgetLink extends React.Component {
    render() {
        return(
            <a href={linkUrl} target="_blank">{linkText}</a>
        )
    }

}

export const WidgetLinkPreview = props => <a></a>;