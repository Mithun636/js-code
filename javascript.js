// //1.Array joining and splitting
// //Joining
// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9,10];
// console.log("joining: "+arr1.concat(arr2).join(" "));
// //splitting
// let str="How are You!"
// let str1=str.split(" ");
// console.log("Splitting"+str1);

// //2.Object sorting
// let arr=[
//     {name:'Ram',age:23},
//     {name:'sam',age:20},
//     {name:'Raj',age:19}
//     ];
// let a=arr.sort((a,b)=>a.age - b.age);
// console.log(a);

// // 3.Merging the two array
// let x=[1,2,3,4,5,6];
// let y=[7,8,9,10,11];
// console.log(x.concat(y));

// //4.find the first occurenece in array
let str1="how about your father";
let str2=str1.indexOf('a');
console.log(str2);

// //5.Array deduplication
let d1=[12,23,12,4,34,4];
let d2=[];
for(let i=0;i<d1.length;i++){
    let c=0;
    for(let j=0;j<d1.length;j++){
        if(d1[i]==d1[j])
        {
        c++;
        }
    }
    if(c==1){
        d1.pop(d1[i]);
}
}
console.log("Deduplication "+d1);