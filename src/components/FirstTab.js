import React from 'react';
import { CdsGrid, CdsGridRow, CdsGridCell, CdsGridColumn } from '@cds/react/grid';

export default function FirstTab() {
    let dc_info = [{
        id: 1,
        datacenter_name: "ap_onprem",
        location: "-",
        type: "On Premises",
        status: "Connected",
        discovery_status: "Completed",
        gateway_version: "1.2",
        application: 0
    },
    {
        id: 2,
        datacenter_name: "aws_dc1",
        location: "Asia Pacific(Mumbai)",
        type: "Cloud(AWS)",
        status: "Not Connected",
        discovery_status: "Not Completed",
        gateway_version: "1.0.2",
        application: 2
    },
    {
        id: 3,
        datacenter_name: "aws_dc2",
        location: "Asia Pacific(Mumbai)",
        type: "Cloud(AWS)",
        status: "Connected",
        discovery_status: "Completed",
        gateway_version: "1.2.0",
        application: 4
    },
    {
        id: 4,
        datacenter_name: "azure_dc1",
        location: "Center India",
        type: "Cloud(Azure)",
        status: "Connected",
        discovery_status: "Completed",
        gateway_version: "1.12",
        application: 2
    },
    {
        id: 5,
        datacenter_name: "azure_dc3",
        location: "Center India",
        type: "Cloud(Azure)",
        status: "Not Connected",
        discovery_status: "Not Completed",
        gateway_version: "1.2.1",
        application: 7
    },
    {
        id: 6,
        datacenter_name: "aws_dc3",
        location: "Asia Pacific(Mumbai)",
        type: "Cloud(AWS)",
        status: "Connected",
        discovery_status: "Completed",
        gateway_version: "1.2",
        application: 1
    },
    {
        id: 7,
        datacenter_name: "aws_dc4",
        location: "Asia Pacific(Mumbai)",
        type: "Cloud(AWS)",
        status: "Not Connected",
        discovery_status: "Completed",
        gateway_version: "1.2.8",
        application: 4
    },
    {
        id: 8,
        datacenter_name: "aws_dc8",
        location: "Asia Pacific(Mumbai)",
        type: "Cloud(AWS)",
        status: "Connected",
        discovery_status: "Completed",
        gateway_version: "1.2",
        application: 1
    },
    {
        id: 9,
        datacenter_name: "aws_dc7",
        location: "Asia Pacific(Mumbai)",
        type: "Cloud(AWS)",
        status: "Connected",
        discovery_status: "Not Completed",
        gateway_version: "1.2",
        application: 1
    },
    {
        id: 10,
        datacenter_name: "azure_dc8",
        location: "Central India",
        type: "Cloud(Azure)",
        status: "Not Connected",
        discovery_status: "Not Completed",
        gateway_version: "1.2",
        application: 1
    }]
    return (
        <div>
            <section id="panel1" role="tabpanel" aria-labelledby="tab1">
                <CdsGrid>
                    <CdsGridColumn>Datacenter Name</CdsGridColumn>
                    <CdsGridColumn>Location</CdsGridColumn>
                    <CdsGridColumn>Type</CdsGridColumn>
                    <CdsGridColumn>Connection Status</CdsGridColumn>
                    <CdsGridColumn>Discovery Status</CdsGridColumn>
                    <CdsGridColumn>Gateway Version</CdsGridColumn>
                    <CdsGridColumn>Application</CdsGridColumn>
                    {dc_info.map(dc => {
                        let isConnected = true;
                        let isDiscoveryConnected = true;
                        if (dc.discovery_status === "Not Completed") {
                            isDiscoveryConnected = true;
                        } else {
                            isDiscoveryConnected = false;
                        }

                        if (dc.status === "Not Connected") {
                            isConnected = true;
                        } else {
                            isConnected = false;
                        }
                        return (
                            <CdsGridRow >
                                <CdsGridCell>{dc.datacenter_name}</CdsGridCell>
                                <CdsGridCell>{dc.location}</CdsGridCell>
                                <CdsGridCell>{dc.type}</CdsGridCell>
                                <CdsGridCell>
                                    <span className={isConnected ? 'errorStandardClassName' : 'successStandardClassName'}>
                                        {dc.status}
                                        {/* <CdsIcon role="img" width={40} height={40} shape={isConnected ? errorStandardIconName : successStandardIconName}></CdsIcon> */}
                                    </span>
                                </CdsGridCell>
                                <CdsGridCell>
                                    <span className={isDiscoveryConnected ? 'errorStandardClassName' : 'successStandardClassName'}>
                                        {dc.discovery_status}
                                    </span>
                                </CdsGridCell>
                                <CdsGridCell>{dc.gateway_version}</CdsGridCell>
                                <CdsGridCell>{dc.application}</CdsGridCell>
                            </CdsGridRow>
                        )

                    })}

                    {/* <clr-dg-footer>
                <clr-dg-pagination #pagination [clrDgPageSize]="5">
                  <clr-dg-page-size [clrPageSizeOptions]="[5, 20, 50, 100]">Users per page</clr-dg-page-size>
                  {{ pagination.firstItem + 1 }} - {{ pagination.lastItem + 1 }} of {{ users.length }} users
                </clr-dg-pagination>
              </clr-dg-footer> */}
                </CdsGrid>
            </section>
        </div>
    )
}
