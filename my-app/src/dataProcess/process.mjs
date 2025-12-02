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

const join = USER_DATA.concat(ORDER_DATA);
console.log(join.length);
// Create a Map for fast lookup
const userMap = new Map(USER_DATA.map((item) => [item.userId, item.name]));

// Replace userId with name in orders
const joinedOrders = ORDER_DATA.map((order) => ({
  ...order,
  userId: userMap.get(order.userId) || "Unknown User"
}));

console.log(joinedOrders);
