import React from "react";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 hykembg d-flex justify-content-between flex-column p-3 p-md-5">
            <div><img src="/img/hykem.png" alt="" className="img-fluid" /></div>
            <div className="text-white wrapper-text">
              <h2>
                Sustainable,<br />
                Technically<br />
                Advanced And<br />
                Innovative<br />
                <span className="font-lg">Chemical Products</span>
              </h2>
              <div className="text-end pe-5 me-3 pt-2">
                <a href="/product" className="text-white">Know More</a>
              </div>
            </div>
            <div className="text-white text-sm">
              <p className="m-0">A Division Of Icon <span className="font-lg">Maritime Technology Group</span></p>
            </div>
          </div>
          <div className="col-md-8 hykem d-none d-md-block"></div>
        </div>
      </div>
    </Layout>
  )
}
