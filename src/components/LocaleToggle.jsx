import React from "react";

const langs = Object.freeze({
    "en-US": "English",
    "hi-IN": "Hindi"
})

export default function LocaleToggle(props) {

    return <form className="row justify-content-between py-2 border rounded" onSubmit={() => false}>
        {Object.entries(langs).map(([value, label]) =>  <div className="col">
            <input type="radio" className="btn-check" name="options-outlined" id={value} autocomplete="off" onClick={() => props.onChange(value)} />
            <label className="btn btn-sm btn-outline-success" for={value}>{label}</label>
        </div>)}
    </form>;
}