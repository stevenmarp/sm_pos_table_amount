/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { Table } from "@pos_restaurant/app/floor_screen/table";

patch(Table.prototype, {
    smTableAmount() {
        const orders = this.pos.getTableOrders(this.props.table.id);
        if (!orders.length) {
            return "";
        }
        const total = orders.reduce((sum, o) => sum + o.get_total_with_tax(), 0);
        return this.env.utils.formatCurrency(total);
    },
});
