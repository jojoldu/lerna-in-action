'use strict';

import {Order} from "order-base/src/Order";

export class Message {

    static messageAccept (order: Order) {
        return `${order.name} (총: ${order.amount}원) 주문이 접수되었습니다.`;
    }

    static messageCancel (order: Order) {
        return `${order.name} 주문이 취소되었습니다.`;
    }

    // static messageWithTime(order: Order) {
    //     const updatedAt = dayjs(order.updatedAt);
    //     return `${updatedAt} ${order.name} 주문이 취소되었습니다`;
    // }
}
