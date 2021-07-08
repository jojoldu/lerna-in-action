import {Order} from "order-base/src/Order";
import {Message} from "../src/Message";
import {print} from "../src/print";

describe('print', () => {
    it('yellow 로 print', () => {
        const order = Order.accept('AXDA01', 1000, 'kakaopay');

        const message = Message.messageAccept(order);

        print(message);
    });
});
