import React from "react";
import Layout from "./components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 hukemdiv d-flex justify-content-between flex-column p-3 p-md-5">
                        <div className="text-white">
                            <div className="pb-5"><a href="/"><img src="/img/hykem.png" alt="hykem Logo" className="img-fluid" /></a></div>
                            <p>A global chemical company specializing in the sourcing, development and manufacture of eco-friendly, low-hazard, technically advanced chemical systems.</p>
                            <p className="py-2">Founded on the principle of researching and developing safer, eco-friendly chemical technologies, our team of master’s degree chemists, PhD scientists, engineers and operational experts are committed to a better, cleaner future. Hykem has manufacturing facilities and partnerships strategically positioned in key markets around the world.</p>
                            <p className="py-2">The corporate research and manufacturing facilities are a hub of innovation and superior quality manufacturing. High standards of quality are evidenced by facility design, detailed operational procedures, optimization of production, controls over labelling and packaging, and post-sale customer care commitment.</p>
                            <p>Hykem is driven to solve problems identified by the market and our customers, and their mission is to create products that are effective, technically advanced and minimize impact to our environment, while providing the highest levels of quality and safety.</p>
                            <h1 className="font-lg pt-4">Enhanced Performance <br />with Enhanced Protection</h1>
                            <hr className="w-50 text-white my-4" />
                            <p className="py-3">Hykem has applied the power of its chemistries to create new levels of performance with an enhanced safety and environmental footprint to meet the demanding requirements of the global marine industry. Working with partners around the globe, and backed by their team of highly qualified research chemists, We offers a range of highly effective and safe blend components, fully formulated cleaners, and descalers. Our range of cleaners and descalers for the marine industry cater to all needs including hulls and boilers, high foam and low foam, and high, neutral and low pH.</p>
                        </div>
                        <div className="text-white text-sm">
                            <p className="m-0 text-end">A Division Of Icon <span className="font-lg">Maritime Technology Group</span></p>
                        </div>
                    </div>
                    <div className="col-md-6 hykem-product d-none d-md-block"></div>
                </div>
            </div>
        </Layout>
    )
}