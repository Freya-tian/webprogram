const nums = Array.from({length:10},()=>Math.floor(Math.random()*60))
console.log(nums)
var max = nums[0];
for(var i = 1; i < nums.length; i++) {
   var cur = nums[i];
   cur > max ? max = cur : null
}
console.log('max - ',max);

var min= nums[0];
for(var i = 1; i < nums.length; i++) {
   var cur = nums[i];
   cur < min ? min = cur : null
}
console.log('min - ',min);

let _median = arr => {
    arr.sort();
          //求中位数
    if (arr.length % 2 == 0) {
        return (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2;
    } else {
        return arr[Math.floor(arr.length / 2)];
    }
};

console.log('median - ',_median(nums))
var quickSort = function(arr) {

　　if (arr.length <= 1) { return arr; }

　　var pivotIndex = Math.floor(arr.length / 2);

　　var pivot = arr.splice(pivotIndex, 1)[0];

　　var left = [];

　　var right = [];

　　for (var i = 0; i < arr.length; i++){

　　　　if (arr[i] < pivot) {

　　　　　　left.push(arr[i]);

　　　　} else {

　　　　　　right.push(arr[i]);

　　　　}

　　}

　　return quickSort(left).concat([pivot], quickSort(right));

};
console.log(quickSort(nums));

const divs = document.getElementsByTagName('div').length;
const h4 = document.getElementsByTagName('h4').length;
const li = document.getElementsByTagName('li').length;
console.log('div - ', divs);
console.log('h4 - ', h4);
console.log('li - ', li);


// 获取弹窗
var modal = document.getElementById('myModal');
 
// 打开弹窗的按钮对象
var btn = document.getElementById("myBtn");
 
// 获取 <span> 元素，用于关闭弹窗
var span = document.querySelector('.close');
 
// 点击按钮打开弹窗
btn.onclick = function() {
    modal.style.display = "block";
}
 
// 点击 <span> (x), 关闭弹窗
span.onclick = function() {
    modal.style.display = "none";
}
 
// 在用户点击其他地方时，关闭弹窗
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function chooseImg(file){

    var file=file.files[0];

    var reader=new FileReader();

    reader.readAsDataURL(file);

    reader.onload=function(){

           var img=document.getElementById('img');

           img.src=this.result

    };

}

