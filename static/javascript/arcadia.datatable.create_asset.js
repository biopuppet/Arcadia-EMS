function initDatatable(table, ajax_url, csrf_token) {
    var dt = table.DataTable($.extend(true, {}, CONSTANT.DATA_TABLE.DEFAULT_OPTION, {
            ajax: {
                "url": ajax_url,
                "type": "GET",
                "data": {"csrfmiddlewaretoken": csrf_token},
                "dataSrc": "",
            },
            searching: false,
            paging: false,
            columns: [
                {
                    title: '设备编号',
                    data: 'aid',
                    responsivePriority: 1,
                    width: "10%",
                },
                {
                    title: '名称',
                    data: 'name',
                    responsivePriority: 2,
                    className: "table-user",
                    width: "10%",
                },
                {
                    title: '购置日期',
                    data: 'created_at',
                    responsivePriority: 3,
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
                            var view_btn = "<a href='/asset/create/" + full.aid + "' class='action-icon'>" +
                                "<i class='mdi mdi-database-plus'></i></a>";
                            return  view_btn;
                        }
                }
            ],
        })
    );
}


