function initDatatable(table, ajax_url, csrf_token) {
    table.DataTable($.extend(true, {}, CONSTANT.DATA_TABLE.DEFAULT_OPTION, {
        ajax: {
            "url": ajax_url,
            "type": "POST",
            "data": {"csrfmiddlewaretoken": csrf_token},
            "dataSrc": "",
        },
        autoWidth: false,
        columns: [
            {
                title: '申请ID',
                data: 'id',
                responsivePriority: 1,
                width: "1%",
            },
            {
                title: 'SKU编号',
                data: 'skuid',
                responsivePriority: 1,
                width: "15%",
                render: function(data, type, full, meta){
                    return trunc(type, data, 15);
                }
            },
            {
                title: '申请日期',
                data: 'created_at',
                responsivePriority: 4,
                width: "10%",
            },
            {
                title: '更新日期',
                data: 'updated_at',
                responsivePriority: 4,
                width: "10%",
            },
            {
                title: '经办人',
                data: 'transactor',
                responsivePriority: 4,
                width: "10%",
            },
            {
                title: '状态',
                data: 'status',
                responsivePriority: 1,
                width: "5%",
                render: CONSTANT.DATA_TABLE.RENDER.ASSET_STATUS,
            },
            CONSTANT.DATA_TABLE.COLUMN.ACTION,
        ],
        columnDefs: [
            {
                "targets": -1,
                title: "Action",
                "render":
                    function (data, type, full, meta) {
                        var view_btn = "<a href='/review/" + full.id + "' class='action-icon'>" +
                            "<i class='mdi mdi-eye'></i></a>";
                        var update_btn = "<a href='#' class='action-icon'>" +
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


