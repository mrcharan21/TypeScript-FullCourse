"use strict";
// 1. numeric enum
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction.Left);
// console.log(Direction[2]);
// 2. string enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.Pending);
// // 3. enum in condition
// const currentStatus: OrderStatus = OrderStatus.Shipped;
// console.log(currentStatus === OrderStatus.Shipped);
// // 4. enum in function
// function move(direction: Direction): string {
//   return `Moving ${Direction[direction]}`;
// }
// console.log(move(Direction.Up));
// // 5. enum with custom numbers
// enum HttpCode {
//   Ok = 200,
//   NotFound = 404,
//   ServerError = 500,
// }
// console.log(HttpCode.NotFound);
// // 6. enum switch
// function messageFor(code: HttpCode): string {
//   switch (code) {
//     case HttpCode.Ok:
//       return "Request worked";
//     case HttpCode.NotFound:
//       return "Page missing";
//     default:
//       return "Server issue";
//   }
// }
// console.log(messageFor(HttpCode.Ok));
// // 7. enum as object key
// const statusLabels: Record<OrderStatus, string> = {
//   [OrderStatus.Pending]: "Waiting",
//   [OrderStatus.Shipped]: "On the way",
//   [OrderStatus.Delivered]: "Completed",
// };
// console.log(statusLabels[OrderStatus.Delivered]);
// // 8. enum-like object
// const PaymentMode = {
//   Cash: "cash",
//   Card: "card",
//   Upi: "upi",
// } as const;
// console.log(PaymentMode.Upi);
// // 9. deriving enum-like union
// type PaymentModeValue = (typeof PaymentMode)[keyof typeof PaymentMode];
// const payment: PaymentModeValue = "card";
// console.log(payment);
// // 10. permission enum flags
// enum Permission {
//   Read = 1,
//   Write = 2,
//   Execute = 4,
// }
// const userPermission = Permission.Read | Permission.Write;
// console.log((userPermission & Permission.Write) === Permission.Write);
