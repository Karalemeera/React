import React from 'react';
import { CdsGrid, CdsGridRow, CdsGridCell, CdsGridColumn } from '@cds/react/grid';
import { useAppContext } from '../context/App-context';

export default function FirstTab() {
    const { state, addData } = useAppContext();
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
                    <CdsGridColumn>Resource Prefix</CdsGridColumn>

                    {state.data && state.data.length > 0 && state.data.map(dc => {
                        let isConnected = true;
                        let isDiscoveryConnected = true;
                        if (!dc.discovery_status) {
                            isDiscoveryConnected = true;
                        } else {
                            isDiscoveryConnected = false;
                        }

                        if (!dc.connection_status) {
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
                                        {dc.connection_status ? 'Connected' : 'Not connected'}
                                        {/* <CdsIcon role="img" width={40} height={40} shape={isConnected ? errorStandardIconName : successStandardIconName}></CdsIcon> */}
                                    </span>
                                </CdsGridCell>
                                <CdsGridCell>
                                    <span className={isDiscoveryConnected ? 'errorStandardClassName' : 'successStandardClassName'}>
                                        {dc.discovery_status ? 'Completed' : 'Not Completed'}
                                    </span>
                                </CdsGridCell>
                                <CdsGridCell>{dc.version}</CdsGridCell>
                                <CdsGridCell>{dc.application}</CdsGridCell>
                                <CdsGridCell>{dc.resource_prefix}</CdsGridCell>
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
