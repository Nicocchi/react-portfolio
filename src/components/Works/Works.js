import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Gallery from '../Gallery/Gallery';
import { withContentful } from 'react-contentful';

function Works(props) {
    const { client } = props.contentful;
    let [entries, setEntries] = useState(null);
    
    useEffect(() => {
        client.getEntries().then(res => {
            setEntries(res.items)
        })
        return () => {
            //cleanup
        }
    }, [client])

    return (
        <div id="about" className="landing-wrapper">
            <div className="about-jumbotron">
                <div className="col">
                    <h1 className="move-up">03. My Works</h1>
                    <div className="hr-rose move-up2"></div>
                    <div>
                        <Gallery entries={entries} />
                    </div>
                </div>
            </div>
        </div>
    )
}

Works.propTypes = {
    contentful: PropTypes.object
}

export default withContentful(Works);

