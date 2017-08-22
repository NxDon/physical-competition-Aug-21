/*
题目：
计算两个数组的交数组
注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].*/

function getIntersection(...arg) {
    [arr1,arr2] = arg;
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        if(arr2.includes(arr1[i])){
            result.push(arr1[i]);
            arr2.splice(arr2.indexOf(arr1[i]),1);
            arr1.splice(i,1);
            i--;
        }
    }
    return result;
}

nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(getIntersection(nums1,nums2));


