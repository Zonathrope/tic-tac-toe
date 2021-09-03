import React from 'react';
import Field from "../Field/Field";
import './FieldList.css'


const FieldList = () => {
    function* increment() {
        let index = 1;
        while (true) {
            yield index++;
        }
    }
    const generateID = increment()

    const arrayField = [
        <Field id={generateID.next().value}/>, <Field id={generateID.next().value}/>, <Field id={generateID.next().value}/>,
        <Field id={generateID.next().value}/>, <Field id={generateID.next().value}/>, <Field id={generateID.next().value}/>,
        <Field id={generateID.next().value}/>, <Field id={generateID.next().value}/>, <Field id={generateID.next().value}/>
    ]


    const reRender = (arr) =>(
        arr.map(el => el)
    )

    return (
        <div className="grid">
            {reRender(arrayField)}
        </div>
    );
};

export default FieldList;