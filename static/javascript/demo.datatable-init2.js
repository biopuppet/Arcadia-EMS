$(document).ready(function () {
    "use strict";
    function addRound() {$(".dataTables_paginate > .pagination").addClass("pagination-rounded")}
    var datatable = $("#basic-datatable").DataTable({
        keys: true,
        stateSave: true,
        scrollX: 0,
        scrollCollapse: 0,
        pagingType: "full_numbers",
        // select: {style: "single"},
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        // columnDefs: [{visible: !1, targets: -1}],
        drawCallback: addRound,
        // createdRow: function (a, i, e) {
        //     15e4 < 1 * i[5].replace(/[\$,]/g, "") && $("td", a).eq(5).addClass("text-danger")
        // }
    });
    var a = $("#datatable-buttons").DataTable({
        lengthChange: !1,
        buttons: ["copy", "print"],
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: addRound
    });
    a.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $("#scroll-vertical-datatable").DataTable({
        scrollY: "350px",
        scrollCollapse: !0,
        // scrollX: !0,
        paging: !1,
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        drawCallback: addRound
    })
});