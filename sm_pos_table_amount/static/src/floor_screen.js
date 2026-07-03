/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { FloorScreen } from "@pos_restaurant/app/floor_screen/floor_screen";

patch(FloorScreen.prototype, {
    smTableAmount(table) {
        const orders = this.pos.getTableOrders(table.id);
        if (!orders.length) {
            return "";
        }
        const total = orders.reduce((sum, o) => sum + o.get_total_with_tax(), 0);
        return this.env.utils.formatCurrency(total);
    },
});
