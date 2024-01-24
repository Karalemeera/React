import React, { useState } from 'react';
import img1 from './assets/cloud-FilledHoverstate.svg';
import img2 from './assets/vmw-illu-cross-cloud-services.jpg';


export default function Solutions() {
  const [data, setData] = useState("Topology and Networking");
  function search(formData) {
    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }
  return (
    <div>
      <div className="clr-row">
        <div className="clr-col-lg-6 clr-col-12">
          <div className="card">
            <h3 className="card-header">{data}</h3>
            <div className="card-block">
              <div className="card-media-block wrap">


                <img src={img1} className="card-media-image" />
                <div className="card-media-description">
                  <span className="card-media-title">Datacenter - aws_dc1</span>
                  <span className="card-media-text">Location : Asia Pacific(Mumbai)</span>
                </div>
              </div>
              <div className="card-text">
                <ul class="list-group">
                  <li class="list-group-item">OracleSG  <b>Port : 8080</b> <b>Protocol : </b> TCP</li>
                  <li class="list-group-item"><b>First availability zone : </b> ap-south-1a</li>
                  <li class="list-group-item"><b>Second availability zone : </b> ap-south-1b</li>
                  <li class="list-group-item"><b>Eth0 : </b> 0d123ub339n89bc0</li>
                  <li class="list-group-item"><b>Eth1 : </b> 0d5674ub339n8et0</li>
                </ul>
              </div>
            </div>
            <div className="card-footer">
              <b>Check updates of Topology and  Networking</b>
            </div>
          </div>
        </div>
        <div className="clr-col-lg-6 clr-col-12">
          <div className="card">
            <h3 className="card-header">Storage and file system</h3>
            <div className="card-block">
              <div className="card-media-block wrap">
                <img src={img2} className="card-media-image" />
                <div className="card-media-description">
                  <span className="card-media-title">Datacenter - azure_dc1</span>
                  <span className="card-media-text">Location: Center India</span>
                </div>
              </div>
              <div className="card-text">
                <ul class="list-group">
                  <li class="list-group-item">OracleSG  <b>Port : 9090</b> <b>Protocol : </b> UDP</li>
                  <li class="list-group-item"><b>First availability zone : </b> 1</li>
                  <li class="list-group-item"><b>Second availability zone : </b> 2</li>
                  <li class="list-group-item"><b>Eth0 : </b> 0d123ub339n89bc0</li>
                  <li class="list-group-item"><b>Eth1 : </b> 0d5674ub339n8et0</li>
                </ul>
              </div>
            </div>
            <div className="card-footer">
              <b>Storage and file system</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
