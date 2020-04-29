function dt_reload(table, resetPaging = false, callback = null) {
    table.DataTable().ajax.reload(callback, resetPaging);
}

!function (t) {
    "use strict";
    $(".dt-btn-reload").on("click", function (i) {
        dt_reload($('.table'), true);
        t.NotificationApp.send(
            "Success", "Data table reloaded!",
            "top-right", "rgba(0,0,0,0.2)", "success", 2e3)
    })
}(window.jQuery);