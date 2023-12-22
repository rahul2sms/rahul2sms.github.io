import React from "react";
import LayoutPreLogin from "../components/layouts/LayoutPreLogin";
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import PredictionTable from "../components/PredictionTable";

export default class ImageClassifier extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            alertMessage: null,
            predictions: null
        }

        this.webcam = null;
        this.model = null;
    }

    componentDidMount() {
       this.init();
    }

    init = async () => {
        
        this.setState({ loading: true });
        const videoElement = document.getElementById('videoElement');
        try {
            await tf.ready();
            this.webcam = await tf.data.webcam(videoElement);
            this.model = await mobilenet.load();

            this.setState({ loading: false });
        }
        catch(ex) {
            this.setState({ alertMessage: ex.message || ex, loading: false });
        }
    }

    onClickSnap = async e => {

        this.setState({ loading: true });
        try {
            const image = await this.webcam.capture();
            const predictions = await this.model.classify(image);
            image.dispose();

            this.setState({ predictions, loading: false });
        }
        catch(ex) {
            this.setState({ alertMessage: ex.message || ex, loading: false });
        }
    }

    render() {
        return <LayoutPreLogin className='d-flex flex-column align-items-center my-4'>
            <h1 className="h2">Snap It</h1>
            {this.state.alertMessage && <span className="alert alert-danger w-100">{this.state.alertMessage}</span>}
            <video id="videoElement" className="border my-4"></video>
            {this.state.loading && <progress />}
            <button className="btn btn-primary" disabled={this.state.loading} hidden={this.state.loading} onClick={this.onClickSnap}>Snap</button>

            <PredictionTable predictions={this.state.predictions} />
        </LayoutPreLogin>
    }
}