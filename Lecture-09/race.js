// const { setTimeout: delay } = require('node:timers/promises');
// const fetchData1 = delay(1000).then(() => 'Data from API 1');
// const fetchData2 = delay(2000).then(() => 'Data from API 2');
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Network Error");
//     },500);
// })
// Promise.race([fetchData1, fetchData2,p3])
//   .then(results => {
//     console.log(results); // ['Data from API 1', 'Data from API 2', 'Data from API 3']
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   })
//   .finally(()=>{
//     console.log("All promises are settled");
//   })

const promise1=Promise.resolve('Success');
const promise2=Promise.reject('Failed');
Promise.allSettled([promise1,promise2]).then(results=>{
  console.log(results);
  // [ { status: 'fulfilled', value: 'Success' }, { status: 'rejected', reason: 'Failed' } ]
}); 