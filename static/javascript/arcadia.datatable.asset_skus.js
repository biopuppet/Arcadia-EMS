function initDatatable(table, ajax_url, csrf_token) {
    var dt = table.DataTable($.extend(true, {}, CONSTANT.DATA_TABLE.DEFAULT_OPTION, {
            ajax: {
                "url": ajax_url,
                "type": "POST",
                "data": {"csrfmiddlewaretoken": csrf_token},
                "dataSrc": "",
            },
            paging: true,
            columns: [
                {
                    title: '编号',
                    data: 'id',
                    responsivePriority: 1,
                },
                {
                    title: '型号',
                    data: 'model',
                    responsivePriority: 4,
                },

                {
                    title: '规格',
                    data: 'spec',
                    responsivePriority: 5,
                },
                {
                    title: '生产厂商',
                    data: 'manufacturer',
                    responsivePriority: 6,
                },
                {
                    title: '生产日期',
                    data: 'produced_on',
                    responsivePriority: 6,
                },
                {
                    title: '保质日期',
                    data: 'expired_on',
                    responsivePriority: 6,
                },
                {
                    title: '单价',
                    data: 'price',
                    responsivePriority: 6,
                    render: function (data, type, full, meta) {
                        return '¥ ' + data;
                    }
                },
                {
                    title: '购置日期',
                    data: 'acquired_at',
                    responsivePriority: 7,
                },
                {
                    title: '更新日期',
                    data: 'updated_at',
                    responsivePriority: 8,
                },
                CONSTANT.DATA_TABLE.COLUMN.ACTION,
            ],
            columnDefs: [
                {
                    "targets": -1,
                    title: "操作",
                    "render":
                        function (data, type, full, meta) {
                            var view_btn = "<a type='button' data-toggle='collapse' data-target='#asset-sets-"
                                + full.id + "' href='' class='action-icon'><i class='mdi mdi-eye'></i></a>";
                            var update_btn = "<a href='/asset/borrow/" + full.id + "' class='action-icon'>" +
                                "<i class='mdi mdi-cart'></i></a>";
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


