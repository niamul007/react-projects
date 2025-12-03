import { useReducer } from "react";
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
console.log(totalRevinue);

const uniqueDates = new Set();

ORDER_DATA.map((item)=>{
    const date = item.date;
    uniqueDates.add(date)
    return date;
})
// console.log(uniqueDates);

// Create a Map for fast lookup
const userMap = new Map(USER_DATA.map((item) => [item.userId, item.name,item.region]));

// Replace userId with name in orders
const joinedOrders = ORDER_DATA.map((order) => ({
  ...order,
  userId: userMap.get(order.userId) || "Unknown User"
}));

// console.log(joinedOrders);

const orderPlaced = joinedOrders.reduce((acc,curr)=>{
    const userName = curr.userId;
    if(acc[userName]){
        acc[userName] += 1;
    }else{
        acc[userName] = 1
    }
    return acc;
},{})

console.log(orderPlaced);

const status = ORDER_DATA.reduce((acc,curr)=>{
    const orderStatus = curr.status;
    acc[orderStatus] = (acc[orderStatus] || 0) + 1;
    return acc;

},{})

console.log(status);

const heights = ORDER_DATA.reduce((acc,curr)=>{
    return curr.total> acc ? curr.total : acc
},0);

console.log(heights)

const userRegion = USER_DATA.filter(item=> item.region === "North").map(user=> user.userId);
console.log(userRegion)
const revinew = ORDER_DATA.filter(item=> userRegion.includes(item.userId)).reduce((acc,curr)=>{
    return acc += curr.total;
},0)

console.log(revinew)