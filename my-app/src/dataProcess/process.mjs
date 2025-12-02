import { USER_DATA,ORDER_DATA } from "./data1.js";

const filterStatus = ORDER_DATA.filter((item)=> item.status === "completed").map((item)=> item);
// console.log(filterStatus);

const mapping = ORDER_DATA.map((item)=>{
    const orderId = item.orderId;
    const total = (item.total* 1.10).toFixed(2)
    return { orderId , total : Number(total)}
});
// console.log(mapping)



const totalRevinue = mapping.filter((item)=> item.total).reduce((acc,curr)=> {
    return acc + curr.total;
},0)
console.log(totalRevinue)