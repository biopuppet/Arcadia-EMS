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
                    responsivePriority: 2,
                    width: "10%",
                },
                {
                    title: '类别',
                    data: 'category',
                    responsivePriority: 3,
                    width: "10%",
                },
                {
                    title: '购置日期',
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
                            var update_btn = "<a href='/asset/create/" + full.aid + "' class='action-icon'>" +
                                "<i class='mdi mdi-plus'></i></a>";
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


