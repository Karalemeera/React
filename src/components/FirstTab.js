import React from 'react';
import { CdsGrid, CdsGridRow, CdsGridCell, CdsGridColumn } from '@cds/react/grid'

export default function FirstTab() {
    let users = [{
        id: 1,
        name: "Ellen",
        color: "red",
        creation: "Nov 01, 2021"
    },
    {
        id: 2,
        name: "Georgia",
        color: "pink",
        creation: "Nov 17, 2021"
    }, {
        id: 3,
        name: "Roslyn",
        color: "blue",
        creation: "Nov 10, 2021"
    },
    {
        id: 4,
        name: "Marcella",
        color: "yellow",
        creation: "Nov 18, 2021"
    }, {
        id: 5,
        name: "Brynn",
        color: "green",
        creation: "Nov 14, 2021"
    }, {
        id: 6,
        name: "Brynn",
        color: "#187",
        creation: "Nov 12, 2021"
    }, {
        id: 7,
        name: "Brynn",
        color: "#567",
        creation: "Nov 3, 2021"
    }, {
        id: 8,
        name: "Brynn",
        color: "#333",
        creation: "Nov 1, 2021"
    }, {
        id: 9,
        name: "Brynn",
        color: "black",
        creation: "Nov 4, 2021"
    }, {
        id: 10,
        name: "Brynn",
        color: "grey",
        creation: "Nov 6, 2021"
    }]
    return (
        <div>
            <section id="panel1" role="tabpanel" aria-labelledby="tab1">
                <CdsGrid>
                    <CdsGridColumn>User ID</CdsGridColumn>
                    <CdsGridColumn>Name</CdsGridColumn>
                    <CdsGridColumn>Creation date</CdsGridColumn>
                    <CdsGridColumn>Favorite color</CdsGridColumn>
                    {users.map(user => {
                        return (
                            <CdsGridRow >
                                <CdsGridCell>{user.id}</CdsGridCell>
                                <CdsGridCell>{user.name}</CdsGridCell>
                                <CdsGridCell>{user.creation}</CdsGridCell>
                                <CdsGridCell>
                                    <span className="color-square" style={{ background: user.color }}></span>
                                </CdsGridCell>
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
