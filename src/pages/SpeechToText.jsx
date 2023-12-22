import React from "react";
import LayoutPreLogin from "../components/layouts/LayoutPreLogin";
import iconMic from '../../static/images/icons/mic.svg'
import LocaleToggle from "../components/LocaleToggle";


export default class SpeechToText extends React.Component {

    state = {
        loading: false,
        listening: false,

        locale: 'en-US',
        transcript: null,

        error: null
    }

    componentDidMount() {
        this.init();
    }

    init = async () => {

        this.setState({loading: true});
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

            this.recognition = new SpeechRecognition();

            this.recognition.interimResults = true;
            this.recognition.maxAlternatives = 1;
            this.recognition.lang = 'en-US';

            this.recognition.addEventListener('speechstart', this.onSpeechStart);
            this.recognition.addEventListener('speechend', this.onSpeechEnd);

            this.recognition.addEventListener('error', e => this.setState({ error: e.error || e }));

            this.recognition.addEventListener('result', this.onResult);

            this.setState({ loading: false });
        }
        catch(ex) {
            this.setState({ error: ex, loading: false});
        }
    }

    onSpeechStart = () => {
        this.setState({ listening: true, transcript: null, error: null });
    }

    onSpeechEnd = () => {
        this.setState({ listening: false });
    }

    onResult = e => {
        const length = e.results.length;
        if(length > 0) {
            const transcript = e.results[length-1]?.[0].transcript;

            this.setState({ transcript });
        }
    }

    onClickMic = e => {
        this.recognition.start();
        this.setState({ listening: true });
    }

    render() {
        return <LayoutPreLogin className='d-flex flex-column align-items-center'>
            <h1 className="h2 my-4">I can write as to speek</h1>
            <LocaleToggle value={this.state.locale} onChange={value => {
                this.recognition.lang = value;
                this.setState({ locale: value });
            }} />
            {this.state.loading?<progress />
            :<input 
                type="image" 
                src={iconMic} 
                alt="mic"
                className={`mt-3 btn btn-lg btn-${this.state.listening?'danger':'warning'}`} 
                onClick={this.onClickMic}
                disabled={this.state.listening}
            />}

            <textarea className="my-3 col-12 col-md-6" value={this.state.transcript}></textarea>

            {this.state.listening && <progress />}
            {this.state.error && <span className="text-danger">{this.state.error}</span>}
        </LayoutPreLogin>;
    }
}