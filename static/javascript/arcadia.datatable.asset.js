function initDatatable(table, url_data_table, csrf_token) {
    function addRound() {
        $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    }

    function trunc(type, data, max) {
        return type === 'display' && data.length > max ? data.substr(0, max) + '...' : data;
    }

    table.DataTable({
        "responsive": true,
        "processing": false, // I'm blind, for christ's sake..
        "serverSide": false, // Frontend job
        "ajax": {
            "url": url_data_table,
            "type": "POST",
            "data": {"csrfmiddlewaretoken": csrf_token},
            "dataSrc": "",
        },
        autoWidth: false,
        columns: [
            /*
            {
                title: "<input type='checkbox' name='checkbox' class='checkboxes'/>",
                "data": "null",
                width: "1%",
                searchable: false,
                "render": function (data, type, full, meta) {
                    return "<td> <input type='checkbox' name='checkbox' class='checkboxes' ></td>";
                }
            },*/
            {
                title: '编号',
                data: 'aid',
                responsivePriority: 1,
                width: "5%",
            },
            {
                title: '名称',
                data: 'name',
                responsivePriority: 1,
                className: "table-user",
                width: "10%",
            },
            {
                title: '规格',
                data: 'spec',
                responsivePriority: 2,
                width: "10%",
                "render": function (data, type, full, meta) {
                    return trunc(type, data, 15);
                },
            },
            {
                title: '购置日期',
                data: 'acquired_on',
                responsivePriority: 3,
                width: "10%",
                "render": function (data, type, full, meta) {
                    return trunc(type, data, 30);
                },
            },
            {
                title: '所在部门',
                data: 'department',
                responsivePriority: 4,
                width: "10%",

            },
            {
                title: '状态',
                data: 'status',
                responsivePriority: 5,
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
            {
                title: '数量',
                data: 'quantity',
                responsivePriority: 6,
                width: "5%",

            },
            {
                title: "操作",
                data: null,
                searchable: false,
                orderable: false,
                className: "table-action text-center",
                responsivePriority: 0,
                width: "5%",
                "render": function (data, type, full, meta) {
                    var view_btn = "<a href='/user/" + full.id + "' class='action-icon'>" +
                        "<i class='mdi mdi-eye'></i></a>";
                    var update_btn = "<a href='#' class='action-icon' data-toggle='modal' " +
                        "data-target='#modal-update-user' onclick='send_update_user_id(" + full.id + ")'>" +
                        "<i class='mdi mdi-square-edit-outline'></i></a>";
                    var more_btn =
                        "<a class='action-icon ' href='#' id='dropdownMenuLink' data-toggle='dropdown'>" +
                        "<i class='mdi mdi-dots-horizontal'></i></a>" +
                        "<div class='dropdown-menu' aria-labelledby='dropdownMenuLink'>" +
                        "<a href='#" + full.id + "' class='dropdown-item'>" +
                        "Toggle status</a></div>";
                    return view_btn + update_btn + more_btn;
                }
            },

        ],

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
        drawCallback: addRound,
        // createdRow: function (a, i, e) {
        //     15e4 < 1 * i[5].replace(/[\$,]/g, "") && $("td", a).eq(5).addClass("text-danger")
        // }
    });
}

