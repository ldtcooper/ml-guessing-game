import React, { useEffect } from 'react'

// adapted from https://stackoverflow.com/questions/72632853/rendering-mpld3-json-chart-in-react

const Graph = ({ graphJson }) => {
    const fig_name = (graphJson && graphJson.id);

    useEffect(() => {
        if (typeof mpld3 !== 'undefined' && fig_name) {
            mpld3.remove_figure(fig_name); // eslint-disable-line no-undef
            mpld3.draw_figure(fig_name, graphJson); // eslint-disable-line no-undef
        }
    }, [graphJson, fig_name]);

    return (
        <div id='graph-container'>
            <div id={fig_name || 'empty'}></div>
        </div>
    )
}
export default Graph;

