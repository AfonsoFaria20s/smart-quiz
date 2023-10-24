import React from 'react';
import "../../styles/pages/Dashboard/StreakInfo.scss"

const StreakInfo = (props) => {
    return (
        <div className='dataStreak'>
            <span id='title'>{props.title}</span>
            <span id='data'>{props.data}</span>
        </div>
    );
};

export default StreakInfo;