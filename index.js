/*
题目：
计算两个数组的交数组
注意：理解题意（不是找出在两数组中都存在的元素）
例如：nums1 = [1, 2, 2, 1], nums2 = [2, 2], 返回 [2, 2].*/

function getIntersection(arr1,arr2) {
    return [].concat(arr1.filter((elem) => {
        return arr2.includes(elem);
    }));
}

nums1 = [1, 2, 2, 1], nums2 = [2, 2];
console.log(getIntersection(nums1,nums2));


