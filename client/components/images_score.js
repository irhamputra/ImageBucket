import React from 'react';

const ImageScore = (props) => {

    const { ups, downs } = props;

    // props.ups = Upvote
    const upsPercent = `${100 * (ups / (ups + downs))} %`;

    // props.downs = DownVote
    const downPercent = `${100 * (downs / (ups + downs))} %`;


    return(
        <div>
            Ups / Downs
            <div className="progress" />
            <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped" />
            <div style={{ width: downPercent }} className="progress-bar progress-bar-danger progress-bar-striped" />
        </div>
    )
};

export default ImageScore;