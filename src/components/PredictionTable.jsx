import React from "react";
import PropTypes from 'prop-types'


export default function PredictionTable({ predictions }) {

    if(!Array.isArray(predictions)) {
        return <></>;
    }

    return <table className="table table-sm">
        <tbody>{predictions.map((prediction, index) => <tr key={`pred-${index}`}>
            <th>{prediction.className}</th>
            <td>{`${Math.round(prediction.probability*100)}% confidence`}</td>
        </tr>)}</tbody>
    </table>;
}

PredictionTable.propTypes = {
    predictions: PropTypes.array.isRequired
}