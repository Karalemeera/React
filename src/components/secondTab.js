import React from 'react';
import { CdsIcon } from '@cds/react/icon';

import { circleIconName } from '@cds/core/icon/shapes/circle';
import { dotCircleIconName } from '@cds/core/icon/shapes/dot-circle';
import { successStandardIconName } from '@cds/core/icon/shapes/success-standard';
import { errorStandardIconName } from '@cds/core/icon/shapes/error-standard';
import { timesCircleIconName } from '@cds/core/icon/shapes/times-circle';

export default function secondTab() {
    return (
        <div>

            <ul className="clr-timeline">
                <li className="clr-timeline-step disabled">
                    <div className="clr-timeline-step-header">11:59 am</div>
                    <CdsIcon role="img" shape={circleIconName} aria-label="Not started"></CdsIcon>
                    <div className="clr-timeline-step-body">
                        <span className="clr-timeline-step-title">Add KMS</span>
                        <span className="clr-timeline-step-description">Root CA certificate requested.</span>
                    </div>
                </li>
                <li className="clr-timeline-step">
                    <div className="clr-timeline-step-header">11:59 am</div>
                    <CdsIcon role="img" shape={dotCircleIconName} aria-label="Current"></CdsIcon>
                    <div className="clr-timeline-step-body">
                        <span className="clr-timeline-step-title">Add KMS</span>
                        <span className="clr-timeline-step-description">
                            Root CA certificate requested. Upload it to the KMS to complete the connection.
                            <button className="btn btn-sm" onClick={() => {
                                alert("No action")
                            }}>Action</button>
                        </span>
                    </div>
                </li>
                <li className="clr-timeline-step">
                    <div className="clr-timeline-step-header">11:59 am</div>
                    <cds-icon shape={timesCircleIconName} role="img">Fetching data</cds-icon>
                    <div className="clr-timeline-step-body">
                        <span className="clr-timeline-step-title">Make vCenter trust KMS</span>
                        <span className="clr-timeline-step-description">
                            Root CA certificate requested. Upload it to the KMS to complete the connection. Third sentence is very long
                            and very long.
                        </span>
                    </div>
                </li>
                <li className="clr-timeline-step">
                    <div className="clr-timeline-step-header">11:59 am</div>
                    <cds-icon role="img" shape={successStandardIconName} aria-label="Completed"></cds-icon>
                    <div className="clr-timeline-step-body">
                        <span className="clr-timeline-step-title">Make KMS trust vCenter</span>
                        <span className="clr-timeline-step-description">Upload it to the KMS to complete the connection. Third
                            sentence.
                            <button className="btn btn-sm btn-link" onClick={() => {
                                alert("No action")
                            }}>Action</button>
                        </span>
                    </div>
                </li>
                <li className="clr-timeline-step">
                    <div className="clr-timeline-step-header">11:59 am</div>
                    <cds-icon role="img" shape={errorStandardIconName} aria-label="Error"></cds-icon>
                    <div className="clr-timeline-step-body">
                        <span className="clr-timeline-step-title">Not Connected</span>
                        <span className="clr-timeline-step-description">No. It's not connected.</span>
                    </div>
                </li>
            </ul>



        </div >
    )
}
