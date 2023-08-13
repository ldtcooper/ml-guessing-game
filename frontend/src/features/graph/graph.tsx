import * as React from 'react';

interface GraphProps {
    graphHtml: string,
}

function Graph({ graphHtml }: GraphProps) {
    return (<div id='graph-container' dangerouslySetInnerHTML={{ __html: graphHtml }} />)
}

export default Graph;