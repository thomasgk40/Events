// Copyright (c) 2024, Printechs and contributors
// For license information, please see license.txt

 frappe.ui.form.on("Conference Registration", {
 	refresh(frm) {

 	},
     set_attendee_count(frm){
        count=frm.doc.table_xqvc.length
        frm.doc.set_value("attendee_count",count)
    }
 });

 frappe.ui.form.on("Registration Attendee", {
    table_xqvc_add(frm){
        frappe.show_alert("Attendees...")
        count=frm.doc.table_xqvc.length
        frm.doc.set_value("attendee_count",count)
    }
});
