# -*- coding: utf-8 -*-
{
    "name": "Restaurant Table Order Amount",
    "version": "14.0.1.0.0",
    "category": "Point of Sale",
    "summary": "Show the running order amount on every occupied table of the restaurant floor plan",
    "description": """
Restaurant Table Order Amount
=============================

Show the current order amount on every occupied table of the POS
restaurant floor plan.

* Live order total (tax included) on each occupied table
* Sums all open orders on the table
* Updates instantly as the waiter adds products
* Pure frontend, zero configuration: install and it works
    """,
    "author": "Steven Marp",
    "website": "https://apps.odoo.com/apps/modules/browse?author=Steven Marp",
    "license": "OPL-1",
    "images": ["static/description/banner.gif"],
    "depends": ["pos_restaurant"],
    "data": [
        "views/templates.xml",
    ],
    "qweb": [
        "static/src/table.xml",
    ],
    "installable": True,
    "application": False,
    "auto_install": False,
    "price": 59.93,
    "currency": "USD",
}
