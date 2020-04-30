function initDatatable(table, ajax_url) {
    table.DataTable($.extend(true, {}, CONSTANT.DATA_TABLE.DEFAULT_OPTION, {
        ajax: {
            "url": ajax_url,
            "type": "POST",
            "data": {"csrfmiddlewaretoken": jQuery("[name=csrfmiddlewaretoken]").val()},
            "dataSrc": "",
        },
        autoWidth: false,
        columns: [
            {
                title: 'ID',
                data: 'id',
                responsivePriority: 1,
                width: "1%",
            },
            {
                title: 'Username',
                data: 'username',
                responsivePriority: 1,
                className: "table-user",
                width: "10%",
                "render": function (data, type, full, meta) {
                    var truncated_data = trunc(type, data, 15);
                    content = "<a class='text-dark' href='/user/" + full.id + "'>" + truncated_data + "</a>";
                    img = "<img src='/media/" + full.image + "' alt='table-user' height='30' class='mr-1 rounded-circle'>";
                    return img + content;
                },
            },
            {
                title: 'Full Name',
                data: 'fullname',
                responsivePriority: 2,
                width: "10%",
                "render": function (data, type, full, meta) {
                    return trunc(type, data, 15);
                },
            },
            {
                title: 'Email',
                data: 'email',
                responsivePriority: 3,
                width: "15%",
                "render": function (data, type, full, meta) {
                    return trunc(type, data, 30);
                },
            },
            {
                title: 'Phone',
                data: 'phone',
                responsivePriority: 4,
                width: "10%",
            },
            {
                title: 'Department',
                data: 'department',
                responsivePriority: 5,
                width: "10%",
            },
            {
                title: 'Activated',
                data: 'is_active',
                responsivePriority: 6,
                width: "5%",
                render: function (data, type, full, meta) {
                    val = data === true ? "checked" : "";
                    content = "<div><input disabled " + val + " type='checkbox' id='switch-" + full.id +
                        "' data-switch='success'>\n" +
                        "<label for='switch-" + full.id + "' data-on-label='On' data-off-label='Off'\n" +
                        "class='mb-0 d-block'></label></div>";
                    return content;
                }
            },
            CONSTANT.DATA_TABLE.COLUMN.ACTION,
        ],
        columnDefs: [
            {
                "targets": -1,
                title: "Action",
                "render":
                    function (data, type, full, meta) {
                        var view_btn = "<a href='/user/" + full.id + "' class='action-icon'>" +
                            "<i class='mdi mdi-eye'></i></a>";
                        var update_btn = "<a href='#' class='action-icon' data-toggle='modal' " +
                            "data-target='#modal-update-user' onclick='send_update_user_id(" + full.id + ")'>" +
                            "<i class='mdi mdi-square-edit-outline'></i></a>";
                        var more_btn =
                            "<a class='action-icon ' href='#' id='dropdownMenuLink' data-toggle='dropdown'>" +
                            "<i class='mdi mdi-dots-horizontal'></i></a>" +
                            "<div class='dropdown-menu' aria-labelledby='dropdownMenuLink'>" +
                            "<a href='/user/toggle-user-status/" + full.id + "' class='dropdown-item'>" +
                            "Toggle status</a></div>";
                        return view_btn + update_btn + more_btn;
                    },
            },
        ],
    }))
}


