export class Order {
    name: string;
    amount: number;
    payType: string;
    status: string;
    updatedAt: Date;

    constructor() {
    }

    static accept (name, amount, payType) {
        return Order.acceptWithNow(name, amount, payType, new Date());
    }

    static acceptWithNow (name, amount, payType, now) {
        const order = new Order();
        order.name = name;
        order.amount = amount;
        order.payType = payType;
        order.status = 'accept';
        order.updatedAt = now;

        return order;
    }

    createCancel() {
        return this.createCancelWithNow(new Date());
    }

    createCancelWithNow(now) {
        const cancelOrder = new Order();
        cancelOrder.name = this.name;
        cancelOrder.amount = this.amount * -1
        cancelOrder.payType = this.payType;
        cancelOrder.status = 'cancel';
        cancelOrder.updatedAt = now;

        return cancelOrder;
    }
}
