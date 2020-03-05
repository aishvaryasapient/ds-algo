import React from 'react';
import bubbleSort from './../../services/ds-alogs/bubble-sort';
import insertionSort from './../../services/ds-alogs/insertion-sort';
import selectionSort from './../../services/ds-alogs/selection-sort'
const Dashboard = ()=>{
    const sortedArr = bubbleSort([15,16,6,8,17,5]);
    console.log('bubbleSort',sortedArr);
    const insertSortArr = insertionSort([15,16,6,8,17,5]);
    console.log('insertionSort',insertSortArr);
    const selectSortArr = selectionSort([15,16,6,8,17,5]);
    console.log('selectSortArr',selectSortArr);
    return(
        <div>
            This is Dashboard page
            
        </div>
    )
}
export default Dashboard;