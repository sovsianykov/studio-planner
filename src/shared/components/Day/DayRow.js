import React from 'react';
import Cell from "../Cell/Cell";

const DayRow = ({hour}) => {
    return (
        <tr>
            <th><Cell isGray={true}>{hour}</Cell></th>
            <td ><Cell isGray={false}/></td>
            <td ><Cell isGray={false}/></td>
            <td ><Cell isGray={false}/></td>
            <td ><Cell isGray={false}/></td>
        </tr>
    );
};

export default DayRow;