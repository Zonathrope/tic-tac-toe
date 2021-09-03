import React from 'react';
import Field from "../Field/Field";
import './FieldList.css'


const FieldList = () => {

    const render = () => {
        const arr = []
        for (let i = 1; i <= 9; i++) {
            arr.push(<Field id={i}/>)
        }
        return arr
    }


    return (
        <div className="grid">
            {render().map(el => el)}
        </div>
    );
};

export default FieldList;