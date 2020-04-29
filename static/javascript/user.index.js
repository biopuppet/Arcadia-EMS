// "use strict";
function dt_reload(id, resetPaging = false, callback = null) {
    $(id).DataTable().ajax.reload(callback, resetPaging);
}

function initDatatable(table_id, url_data_table) {
    function addRound() {
        $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    }

    function trunc(type, data, max) {
        return type === 'display' && data.length > max ? data.substr(0, max) + '...' : data;
    }

    $(table_id).DataTable({
        "responsive": true,
        "processing": false, // I'm blind, for christ's sake..
        "serverSide": false, // Frontend job
        "ajax": {
            "url": url_data_table,
            "type": "POST",
            "data": {"csrfmiddlewaretoken": jQuery("[name=csrfmiddlewaretoken]").val()},
            "dataSrc": "",
        },
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
                title: 'ID',
                data: 'id',
                responsivePriority: 1,
                //width: "1%",
            },
            {
                title: 'Username',
                data: 'username',
                responsivePriority: 1,
                className: "table-user",
                //width: "10%",
                "render": function (data, type, full, meta) {
                    var truncated_data = trunc(type, data, 10);
                    content = "<a class='text-dark' href='/user/" + full.id + "'>" + truncated_data + "</a>";
                    img = "<img src='/media/" + full.image + "' alt='table-user' height='30' class='mr-1 rounded-circle'>";
                    return img + content;
                },
            },
            {
                title: 'Full Name',
                data: 'fullname',
                responsivePriority: 2,
                //width: "10%",
                "render": function (data, type, full, meta) {
                    return trunc(type, data, 15);
                },
            },
            {
                title: 'Email',
                data: 'email',
                responsivePriority: 3,
                //width: "10%",
                "render": function (data, type, full, meta) {
                    return trunc(type, data, 30);
                },
            },
            {
                title: 'Phone',
                data: 'phone',
                responsivePriority: 4,
                //width: "15%",

            },
            {
                title: 'Department',
                data: 'department',
                responsivePriority: 5,
                //width: "10%",
            },
            {
                title: 'Activated',
                data: 'is_active',
                responsivePriority: 6,
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
                title: "Action",
                data: null,
                searchable: false,
                orderable: false,
                className: "table-action",
                responsivePriority: 0,
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
                        "<a href='/user/toggle-user-status/" + full.id + "' class='dropdown-item'>" +
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

