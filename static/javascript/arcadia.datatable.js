function dt_reload(table, resetPaging = false, callback = null) {
    return table.DataTable().ajax.reload(callback, resetPaging);
}

!function (t) {
    "use strict";
    $(".dt-btn-reload").on("click", function (i) {
        dt_reload($('.table'));
        t.NotificationApp.send(
            "Success", "Data table reloaded!",
            "top-right", "rgba(0,0,0,0.2)", "success", 2e3)
    })
}(window.jQuery);

function trunc(type, data, max) {
    return type === 'display' && data && data.length > max ? data.substr(0, max) + '...' : data;
}

var CONSTANT = {
    DATA_TABLE: {
        DEFAULT_OPTION: {
            autoWidth: false,
            processing: false,
            serverSide: false,
            responsive: true,
            // keys: {
            //     columns: ':not(:last-child, :first-child)',
            // },
            stateSave: true,
            scrollCollapse: true,
            scrollX: false,
            //"scrollXInner": "120%",
            // scrollX: true,
            //scrollCollapse: 0,
            pagingType: "full_numbers",
            // select: {style: "single"},
            language: {
                paginate: {
                    previous: "<i class='mdi mdi-chevron-left'>",
                    next: "<i class='mdi mdi-chevron-right'>"
                }
            },
            drawCallback: function () {
                $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
            },
            // createdRow: function (a, i, e) {
            //     15e4 < 1 * i[5].replace(/[\$,]/g, "") && $("td", a).eq(5).addClass("text-danger")
            // }
        },
        COLUMN: {
            CHECKBOX: {
                className: "td-checkbox",
                orderable: false,
                bSortable: false,
                searchable: false,
                data: null,
                width: '1%',
                render: function (data, type, row, meta) {
                    var content = '<label class="mt-checkbox mt-checkbox-single mt-checkbox-outline">';
                    content += '	<input type="checkbox" class="group-checkable" value="' + data + '" />';
                    content += '	<span></span>';
                    content += '</label>';
                    return content;
                }
            },
            ACTION: {
                data: null,
                searchable: false,
                orderable: false,
                className: "table-action text-center",
                responsivePriority: 0,
                width: "5%",
            },
        },
        CALLBACKS: {},
        RENDER: {
            ASSET_STATUS: function (data, type, full, meta) {
                let badge = "badge ";
                switch (data) {
                    case "审核中":
                    case "审批中":
                        badge += "badge-info";
                        break;
                    case "完好":
                    case "已通过":
                        badge += "badge-success";
                        break;
                    case "已驳回":
                        badge += "badge-danger";
                        break;
                    case "维修中":
                        badge += "badge-secondary";
                        break;
                    case "采购中":
                        badge += "badge-primary";
                        break;
                    case "已报废":
                        badge += "badge-dark";
                        break;
                    case "已关闭":
                        badge += "badge-light";
                        break;
                    default:
                        badge += "badge-light";
                        break;
                }
                return "<span class='" + badge + "'>" + data + "</span>";
            },
        },
    },
};
