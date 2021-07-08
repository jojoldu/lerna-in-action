import {Order} from "../src/Order";

describe('Order', () => {
    it('생성시 updatedAt = 생성시간, status = accept로 할당된다', () => {
        const now = new Date ('2021-07-08');

        const order = Order.acceptWithNow('name', 1000, 'kakaopay', now);

        expect(order.updatedAt).toBe(now);
        expect(order.status).toBe('accept');
    });

    it('취소시 현재 금액이 반대로, status = cancel로 할당된다', () => {
        const now = new Date ('2021-07-08');
        const amount = 1000;
        const order = Order.acceptWithNow('name', amount, 'kakaopay', now);

        const cancel = order.createCancel();

        expect(cancel.amount).toBe(amount * -1);
        expect(cancel.status).toBe('cancel');
    });
});
