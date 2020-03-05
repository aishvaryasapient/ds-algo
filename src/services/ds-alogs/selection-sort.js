// [7,4,10,8,3,1]

const selectionSort = (arr)=> {
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let min = i;
        for(let j=i+1; j<n;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if(min != i){
            swap(arr,min,i);
        }
    }
    return arr;

}
const swap = (arr,min,i)=>{
    [arr[min],arr[i]] = [arr[i],arr[min]];
    return arr
}
export default selectionSort;