/*
题目：
计算两个数组的交数组
注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].*/

function getIntersection(arr1,arr2) {
    ar1 = arr1.concat();
    ar2 = arr2.concat();//for immutable
    let result = [];
    for(let i = 0; i < ar1.length; i++){
        if(ar2.includes(ar1[i])){
            result.push(ar1[i]);
            ar2.splice(ar2.indexOf(ar1[i]),1);
            ar1.splice(i,1);
            i--;
        }
    }
    return result;
}
