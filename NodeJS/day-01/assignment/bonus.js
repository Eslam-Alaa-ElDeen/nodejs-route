/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let arr2=[];
    for(let i=1;i<=2000;i++){
        let flag=true;
        for(let j=0;j<arr.length;j++){
            if(i==arr[j]){
                flag=false;
                break;
            }
        }
        if(flag){
            arr2.push(i);
        }
    }

    return arr2[k-1];
};

