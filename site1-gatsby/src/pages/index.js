import * as React from "react"
import '../../static/styles/main.css'
import LayoutPreLogin from "../components/layouts/LayoutPreLogin"

export default function Home() {
  return <LayoutPreLogin>
      <div className="row justify-content-center">
        <section className="col-auto">
          <span className="h2">Hello world!</span>
        </section>
      </div>
  </LayoutPreLogin>

}
