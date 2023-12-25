import React from "react";
import LayoutPreLogin from "../../components/layouts/LayoutPreLogin";
import validator from "validator";
import modelJson from './model.json';
import metadata from './metadata.json';
import * as tf from '@tensorflow/tfjs';

const urlModel = 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json';
const urlMetadata = 'https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json';

export default class SentimentAnalysis extends React.Component {

    state = {
        alertMessage: '',
        loading: false,
        textInput: '',

        model: null,
        metadata: null,

        trimmed: '',
        sequence: null,
        paddedSequence: null,
        scores: []
    }

    componentDidMount() {
        this.init();
    }

    init = async () => {

        this.setState({loading: true});
        try {
            const p1 = fetch(urlModel);
            const p2 = fetch(urlMetadata);
    
            const [ pr1, pr2 ] = await Promise.all([p1, p2]);

            const [ model, metadata ] = await Promise.all([pr1.json(), pr2.json()]);

            this.setState({ loading: false, model, metadata });
        }
        catch(ex) {
            this.setState({ loading: false, alertMessage: ex.message || ex});
        }
    }

    onSubmit = async e => {
        e.preventDefault();

        const trimmed = validator.trim(this.state.textInput).toLowerCase().replace(/(\.|,\|\!|\?)/g, "").split(' ');

        const sequence = trimmed.map(word => (metadata.word_index[word] || 2) + metadata.index_from);
        let paddedSequence;

        if(sequence.length > metadata.max_len) {
            paddedSequence = sequence.splice(0, metadata.max_len - sequence.length);
        }
        else if(metadata.max_len > sequence.length){
            const pad = new Array(metadata.max_len - sequence.length);

            paddedSequence = [...pad.fill(0), ...sequence];
        }

        this.setState({trimmed, sequence, paddedSequence, loading: true });

        try {
            const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);

            const model = await tf.loadLayersModel(urlModel);
            const predictOut = model.predict(input);

            const scores = predictOut.dataSync();

            predictOut.dispose();

            this.setState({ loading: false, scores });
        }
        catch(ex) {
            this.setState({ loading: false, alertMessage: ex.message || ex });
        }
    }

    render() {
        return <LayoutPreLogin className='d-flex flex-column align-items-center'>
            <h1 className="h2 my-4">Sentiment Analysis</h1>
            {this.state.alertMessage && <span className="alert alert-danger">{this.state.alertMessage}</span>}
            <form className="my-4 align col-12 col-md-8" onSubmit={this.onSubmit}>

                <div className="input-group">
                    <input 
                        id="txtInput" 
                        type="text" 
                        required={true} 
                        className="form-control" 
                        value={this.state.textInput} 
                        onChange={e => this.setState({textInput: e.currentTarget.value })} 
                    />    
                    <button type="submit" className="btn btn-primary input-group-append">Predict</button>
                </div>
            </form>
            {this.state.trimmed && <span className="my-3">{JSON.stringify(this.state.trimmed)}</span>}

            {this.state.sequence && <span className="mb-3">Sequence: {JSON.stringify(this.state.sequence)}</span>}

            {this.state.paddedSequence && <span className="mb-3">Padded Sequence: {JSON.stringify(this.state.paddedSequence)}</span>}

            {this.state.loading && <progress />}

            {[...this.state.scores].map(score => {
                const rounded = Math.round(score * 10)
                if(rounded > 5)
                    return <span className="alert alert-success">Sentiment is positive. Score: {score}</span>;
                else if(rounded < 5) 
                    return <span className="alert alert-danger">Sentiment is negative. Score: {score}</span>;
                else 
                    return <span className="alert alert-warning">Sentiment is nutral. Score: {score}</span>;
            })}
        </LayoutPreLogin>
    }
}