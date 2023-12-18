import React from "react"
import LayoutPreLogin from "../components/layouts/LayoutPreLogin"

export default class WebSpeech extends React.Component {

    state = {
        supported: null,
        voices: [],
        selectedVoice: null,
        text: ''
    }

    componentDidMount() {
        if('speechSynthesis' in window) {
            this.setState({ supported: true, voices: speechSynthesis.getVoices() });
        }
        else {
            this.setState({ supported: false });
        }
    }

    onChangeVoiceOption = e => {
        const index = e.currentTarget.value;
        this.setState({ selectedVoice: this.state.voices[ index ]});
    }

    onSubmit = e => {
        e.preventDefault();

        const msg = new SpeechSynthesisUtterance();

        msg.text = this.state.text;
        msg.voice = this.state.selectedVoice;

        window.speechSynthesis.speak(msg);
    }

    render() {
        return <LayoutPreLogin> 
            <section className="d-flex flex-column">
                <h1 className="text-center">Speech Synthesis</h1>
                {this.state.supported === false && <span className="alert alert-danger">Your browser <strong>does not support</strong> Speech Synthesis.</span>}

                <form className="align-self-center" onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="lstVoice" className="form-label">Select Voice</label>
                        <select id="lstVoice" className="form-select" onChange={this.onChangeVoiceOption} required={true}>
                            <option value={''}></option>
                            {this.state.voices.map((voice, index) => <option key={`voiceOption-${voice.name}`} value={`${index}`}>{voice.name}</option>)}
                        </select>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="txtMessage">Your message to read:</label>
                        <textarea id="txtMessage" className="form-control" required={true} onChange={e => this.setState({ text: e.currentTarget.value })}></textarea>
                    </div>
                    
                    <button type="submit" className="btn btn-primary float-end">Speak</button>
                </form>
            </section>
        </LayoutPreLogin>
    }
}