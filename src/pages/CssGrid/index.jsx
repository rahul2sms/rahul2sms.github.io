import React from "react";
import LayoutPreLogin from "../../components/layouts/LayoutPreLogin";
import './cssGrid.scss';

export default function CssGrid() {

    return <LayoutPreLogin className='d-flex flex-column my-5'>

        <h1>Just Grid / Implicit Grid</h1>
        <section className="justGrid">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </section>

        <h1>Explicit Grid</h1>
        <section className="justGrid explicitGrid">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </section>

        <h1>Grid with equal fraction</h1>
        <section className="justGrid fractionGrid">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </section>

        <h1>Grid with Auto Rows</h1>
        <section className="justGrid autoRowGrid">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </section>

        <h1>Grid with minmax() Rows</h1>
        <section className="justGrid minmaxRowGrid">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem">
            Static content refers to content that remains unchanged on a website or digital platform, such as a homepage or an “About Us” page. This type of content is typically created to provide users with general information that does not require frequent updates. Static content is often used to establish a brand’s identity, showcase its products or services, and communicate its values and mission.
           </div>
        </section>


        <h1>Grid auto-fill</h1>
        <section className="justGrid autoFill">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </section>


        <h1>Grid auto-fit</h1>
        <section className="justGrid autoFit">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </section>

        <h1>Grid Item explicit positioned</h1>
        <section className="justGrid explicitPositionedGrid">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem positionedItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </section>

        <h1>Grid Item spanning multiple rows or columns</h1>
        <section className="justGrid explicitPositionedGrid">
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem spannedItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
            <div className="gridItem"></div>
        </section>
        
        <h1>Grid Layout</h1>
        <section className="girdLayout">
            <div className="header"></div>
            <div className="sidebar"></div>
            <div className="content"></div>
            <div className="footer"></div>

        </section>
    </LayoutPreLogin>
}