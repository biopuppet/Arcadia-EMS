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
                title: 'SKU编号',
                data: 'sku',
                responsivePriority: 1,
                width: "15%",
            },
            {
                title: '类型',
                data: 'type',
                responsivePriority: 2,
                width: "5%",
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
                            "<a href='#' class='dropdown-item'>Toggle</a>" +
                            "</div>";
                        return view_btn + update_btn + more_btn;
                    },
            },
        ],
    }))
}


