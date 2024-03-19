import React from 'react';

const ProgressBar = ({ bgcolor, progress, height }) => {

    const parentDivClass = `h-${height} w-full bg-white rounded-full m-5`;
    const childDivClass = `h-full w-${progress} bg-${bgcolor} rounded-full text-right`;
    const progressTextClass = `p-2 font-bold`;

    return (
        <div className={parentDivClass}>
            <div className={childDivClass}>
                <span className={progressTextClass}>{progress}%</span>
            </div>
        </div>
    )
}

export default ProgressBar;
