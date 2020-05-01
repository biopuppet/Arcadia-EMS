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
                title: '编号',
                data: 'aid',
                responsivePriority: 1,
                width: "10%",
            },
            {
                title: '名称',
                data: 'name',
                responsivePriority: 1,
                className: "table-user",
                width: "10%",
            },
            {
                title: '购置日期',
                data: 'created_at',
                responsivePriority: 3,
                width: "10%",
            },
            // {
            //     title: '生产日期',
            //     data: 'produced_on',
            //     responsivePriority: 3,
            //     width: "5%",
            // },
            // {
            //     title: '保质日期',
            //     data: 'expired_on',
            //     responsivePriority: 3,
            //     width: "5%",
            // },
            // {
            //     title: '所在部门',
            //     data: 'distribution',
            //     responsivePriority: 4,
            //     width: "5%",
            // },
            // {
            //     title: '状态',
            //     data: 'status',
            //     responsivePriority: 5,
            //     width: "5%",
            //     render: CONSTANT.DATA_TABLE.RENDER.ASSET_STATUS,
            // },
            // {
            //     title: '数量',
            //     data: 'quantity',
            //     responsivePriority: 6,
            //     width: "1%",
            // },
            // {
            //     title: '单价',
            //     data: 'price',
            //     responsivePriority: 6,
            //     width: "5%",
            // },
            CONSTANT.DATA_TABLE.COLUMN.ACTION,
        ],
        columnDefs: [
            {
                "targets": -1,
                title: "操作",
                "render":
                    function (data, type, full, meta) {
                        var view_btn = "<a href='/asset/" + full.aid + "' class='action-icon'>" +
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


