// Copyright (c) 2024, Printechs and contributors
// For license information, please see license.txt

frappe.ui.form.on("Conference Ticket", {
 	refresh(frm) {
        frm.add_custom_button("Regen QR",()=>frappe.show_alert("Regn QR..."))
 	},
 });
