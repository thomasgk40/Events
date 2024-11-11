# Copyright (c) 2024, Printechs and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class TicketType(Document):
	def before_save(self):
		if self.price==0 and self.ticket_type=="Paid":
			frappe .throw("Paid ticket should have non-zero price")
	def on_update(self):
		if self.has_value_changed("maximum_seats") or self.has_value_changed("conference"):
			all_seats=frappe.get_all("Ticket Type",
				  filters={"conference":"Data E commerce"},
				  fields={"maximum_seats"},
				  pluck="maximum_seats")
			max_capacity=sum(all_seats)
			frappe.db.set_value("Conference", self.conference,"total_capacity",max_capacity)

