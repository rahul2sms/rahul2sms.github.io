import React from "react";
import LayoutPreLogin from "../components/layouts/LayoutPreLogin";
import PredictionTable from "../components/PredictionTable";
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as knnClassifier from '@tensorflow-models/knn-classifier';

const classes = Object.freeze(["up", "down", "left", "right"]);

export default class TransferLearning extends React.Component {

    state = {
        alertMessage: null,
        result: null,
        loading: false
    }

    constructor(props) {
        super(props);

        this.elementVideo = React.createRef();
        this.webcam = null;

        this.model = null;
        this.classifier = null;
    }

    componentDidMount() {
        this.init();
    }

    init = async () => {
        this.setState({ loading: true });

        await tf.ready();
        this.webcam = await tf.data.webcam(this.elementVideo);

        this.model = await mobilenet.load();

        this.classifier = knnClassifier.create();

        this.setState({ loading: false });
    }

    captureSample = async classId => {
        this.setState({ loading: true, alertMessage: null });

        try {
            const img = await this.webcam.capture();
            const activation = this.model.infer(img, "conv_preds");

            this.classifier.addExample(activation, classId);

            img.dispose();

            this.setState({ loading: false });
        }
        catch(ex) {
            this.setState({ loading: false, alertMessage: ex.message || ex});
        }
    }

    onClickPredict = async e => {
        if(this.classifier.getNumClasses() > 0) {

            this.setState({ loading: true, result: null, alertMessage: null});
            try {
                const img = await this.webcam.capture();
                const activation = this.model.infer(img, "conv_preds");
    
                const result = await this.classifier.predictClass(activation);
    
                this.setState({ loading: false, result });
            }
            catch(ex) {
                this.setState({ loading: false, alertMessage: ex.message || ex});
            }
        }
    }

    render() {
        return <LayoutPreLogin className='my-4 d-flex flex-column align-items-center'>
            {this.state.alertMessage && <span className="alert alert-danger w-100">{this.state.alertMessage}</span>}
            <video ref={ele => this.elementVideo = ele } className="border my-3"></video>

            {this.state.loading && <progress />}
            {!this.state.loading && <>
            <section className="w-100 d-flex justify-content-around my-4">
                {classes.map((label, index) => <button className="btn btn-info" onClick={e => this.captureSample(index)}>{label}</button>)}
            </section>

            <button className="btn btn-primary mt-5" onClick={this.onClickPredict}>Predict</button>
            </>}

            {this.state.result && <>
                <h2>Result</h2>
                <article><strong>Prediction</strong>: {classes[this.state.result.label]}</article>
                <article><strong>Probability</strong>: {Math.round(this.state.result.confidences[this.state.result.label]*100)}%</article>
            </>}
        </LayoutPreLogin>;
    }
}