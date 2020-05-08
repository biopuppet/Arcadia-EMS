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
                title: '报修时间',
                data: 'created_at',
                responsivePriority: 1,
                width: "5%",
            },
            {
                title: '关联SKU',
                data: 'sku',
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
                width: "2%",
                render: CONSTANT.DATA_TABLE.RENDER.ASSET_STATUS,
            },
            {
                title: '审批意见',
                data: 'opinion',
                responsivePriority: 6,
                width: "5%",
            },
            {
                title: '维修方联系方式',
                data: 'contact',
                responsivePriority: 3,
                width: "5%",
            },
            {
                title: '维修结束日期',
                data: 'returned_at',
                responsivePriority: 5,
                width: "5%",
            },
        ],
        })
    );
}


