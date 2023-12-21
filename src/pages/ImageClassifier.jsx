import React from "react";
import LayoutPreLogin from "../components/layouts/LayoutPreLogin";

export default class ImageClassifier extends React.Component {

    render() {
        return <LayoutPreLogin className='d-flex flex-column align-items-center'>
            <h1 className="h2">Snap It</h1>
            <video></video>
            <button className="btn btn-primary">Snap</button>
        </LayoutPreLogin>
    }
}