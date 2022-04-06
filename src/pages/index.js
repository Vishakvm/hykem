import React from "react";
import Layout from "./components/Layout";
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Hykem - Advanced and Innovative Chemical Products</title>
      </Helmet>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 hykembg d-flex justify-content-between flex-column p-4 p-md-5">
            <div><a href="/"><img src="/img/hykem-logo.svg" alt="hykem Logo" className="img-fluid" /></a></div>
            <div className="text-white wrapper-text">
              <h2>
                Sustainable,<br />
                Technically<br />
                Advanced And<br />
                Innovative<br />
                <span className="font-lg">Chemical Products</span>
              </h2>
              <div className="text-end pe-5 me-3 pt-2 cta">
                <a href="/product" className="text-white">Know More</a>
              </div>
            </div>
            <div className="text-white text-sm">
              <p className="m-0">A Division Of Icon <span className="font-lg">Maritime Technology Group</span></p>
            </div>
          </div>
          <div className="col-md-8 hykem"></div>
        </div>
      </div>
    </Layout>
  )
}
