import {Order} from "order-base/src/Order";
import {Message} from "../src/Message";

describe('Logger', () => {
    it('주문 접수 메세지', () => {
        const order = Order.accept('AXDA01', 1000, 'kakaopay');

        const message = Message.messageAccept(order);

        expect(message).toBe('AXDA01 (총: 1000원) 주문이 접수되었습니다.');
    });

    it('주문 취소 접수 메세지', () => {
    });
});
