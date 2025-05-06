import React, { useState, useEffect } from "react";

const Progress = ({ progress,total }) => {
    return (
        <div className="progress-container">
            <div
                className="progress-bar"
                style={{ width: `${(progress/total)*100}%` }}
            >{(progress/total)*100}%</div>
        </div>
    );
};

export default Progress;