odoo.define('sm_pos_table_amount.TableWidget', function(require) {
    'use strict';

    const TableWidget = require('pos_restaurant.TableWidget');
    const Registries = require('point_of_sale.Registries');

    const SmTableWidget = TableWidget => class extends TableWidget {
        smTableAmount() {
            const orders = this.env.pos.get_table_orders(this.props.table);
            if (!orders || !orders.length) {
                return "";
            }
            const total = orders.reduce((sum, o) => sum + o.get_total_with_tax(), 0);
            return this.env.pos.format_currency(total);
        }
    };

    Registries.Component.extend(TableWidget, SmTableWidget);

    return TableWidget;
});
