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
          <div className="col-md-4 hykembg d-flex justify-content-between flex-column p-4 p-md-5 position-relative">
            <div><a href="/"><img src="/img/hykem-logo.svg" alt="hykem Logo" className="img-fluid ZIndex" /></a>
              <div class="bubble-one bubble--1"></div>
              <div class="bubble-one bubble--2"></div>
              <div class="bubble-one bubble--3"></div>
              <div class="bubble-one bubble--4"></div>
              <div class="bubble-one bubble--5"></div>
              <div class="bubble-two bubble--6"></div>
              <div class="bubble-two bubble--7"></div>
              <div class="bubble-two bubble--8"></div>
              <div class="bubble-two bubble--9"></div>
              <div class="bubble-two bubble--10"></div>
              <div class="bubble-three bubble--11"></div>
              <div class="bubble-three bubble--12"></div>
              <div class="bubble-three bubble--13"></div>
              <div class="bubble-three bubble--14"></div>
              <div class="bubble-three bubble--15"></div>
              <div class="bubble-four bubble--16"></div>
              <div class="bubble-four bubble--17"></div>
              <div class="bubble-four bubble--18"></div>
              <div class="bubble-four bubble--19"></div>
              <div class="bubble-four bubble--20"></div>
            </div>
            <div className="text-white wrapper-text ZIndex">
              <h2>
                Sustainable,<br />
                Technically<br />
                Advanced And<br />
                Innovative<br />
                <span className="font-lg">Chemical Products</span>
              </h2>
              <div class="bubble bubble--1"></div>
              <div className="text-end pe-5 me-3 pt-2 cta hover-underline-animation">
                <a href="/product" className="text-white "><span className="">Know More</span>
                </a>
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
