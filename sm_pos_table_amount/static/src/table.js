odoo.define('sm_pos_table_amount.TableWidget', function(require) {
    'use strict';

    const TableWidget = require('pos_restaurant.TableWidget');
    const Registries = require('point_of_sale.Registries');

    const SmTableWidget = TableWidget => class extends TableWidget {
        smTableAmount() {
            const orders = this.env.pos.getTableOrders(this.props.table.id);
            console.log("SM_POS_DEBUG table:", this.props.table.id, "orders count:", orders ? orders.length : 0);
            if (!orders || !orders.length) {
                return "";
            }
            const total = orders.reduce((sum, o) => sum + o.get_total_with_tax(), 0);
            const result = this.env.pos.format_currency(total);
            console.log("SM_POS_DEBUG total calculated:", total, "formatted:", result);
            return result;
        }
    };

    Registries.Component.extend(TableWidget, SmTableWidget);

    return TableWidget;
});
