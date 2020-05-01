function initDatatable(table, ajax_url, csrf_token) {
    var dt = table.DataTable($.extend(true, {}, CONSTANT.DATA_TABLE.DEFAULT_OPTION, {
        ajax: {
            "url": ajax_url,
            "type": "POST",
            "data": {"csrfmiddlewaretoken": csrf_token},
            "dataSrc": "",
        },
        columns: [
            {
                title: '创建时间',
                data: 'created_at',
                responsivePriority: 1,
                width: "5%",
            },
            {
                title: '更新时间',
                data: 'updated_at',
                responsivePriority: 1,
                width: "5%",
            },
            {
                title: '关联设备',
                data: 'asset',
                responsivePriority: 2,
                width: "5%",
            },
            {
                title: '经办人',
                data: 'transactor',
                responsivePriority: 3,
                width: "5%",
            },
            {
                title: '审批人',
                data: 'reviewer',
                responsivePriority: 3,
                width: "5%",
            },
            {
                title: '审批状态',
                data: 'status',
                responsivePriority: 5,
                width: "5%",
                render: CONSTANT.DATA_TABLE.RENDER.ASSET_STATUS,
            },
            {
                title: '审批意见',
                data: 'opinion',
                responsivePriority: 6,
                width: "10%",
            },
            {
                title: '建账证明',
                data: 'credentials',
                responsivePriority: 6,
                width: "10%",
            },
            CONSTANT.DATA_TABLE.COLUMN.ACTION,
        ],
        columnDefs: [
            {
                "targets": -1,
                title: "操作",
                "render":
                    function (data, type, full, meta) {
                        var view_btn = "<a href='/asset/" + full.id + "' class='action-icon'>" +
                            "<i class='mdi mdi-eye'></i></a>";
                        var update_btn = "<a href='#' class='action-icon'" +
                            "<i class='mdi mdi-square-edit-outline'></i></a>";
                        var more_btn =
                            "<a class='action-icon ' href='#' id='dropdownMenuLink' data-toggle='dropdown'>" +
                            "<i class='mdi mdi-dots-horizontal'></i></a>" +
                            "<div class='dropdown-menu' aria-labelledby='dropdownMenuLink'>" +
                            "<a href='#' class='dropdown-item'>" +
                            "Toggle something</a></div>";
                        return view_btn + update_btn + more_btn;
                    }
            }
        ],
        })
    );
}


