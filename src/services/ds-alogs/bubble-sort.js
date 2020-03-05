/* 
    Bubble Sort implementation
    [15,16,6,8,5]
*/
// optimized bubblesort

const bubbleSort = (arr)=>{
    let len = arr.length;
    for(let i=0; i<len-1; i++){
        let flag = 0;
        for(let j=0; j<len-i-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                 flag = 1;
            }
        }
        if(flag === 0){
            break;
        }
    }
    return arr;
}
/* 
    normal solution
    const bubbleSort = (arr)=>{
    let len = arr.length;
    for(let i=0; i<len-1; i++){
        for(let j=0; j<len-1;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

*/
// bubbleSort([15,16,6,8,5]);
export default bubbleSort;