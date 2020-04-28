$(document).ready(function () {
    // "use strict";
    function addRound() {
        $(".dataTables_paginate > .pagination").addClass("pagination-rounded")
    }

    $("#basic-datatable").DataTable({
        // "ajax": {
        //     "url": {% %},
        //     "dataSrc": "tableData"
        // },
        // "data": [
        // [ "Tiger Nixon", "System Architect", "$3,120", "2011/04/25", "Edinburgh", 5421 ],
        // [ "Garrett Winters", "Director", "$8,422", "2011/07/25", "Edinburgh", 8422 ],
        // ],
        //keys: true,
        stateSave: true,
        "scrollCollapse": true,
        "scrollX": "100%",
        "scrollXInner": "100%",
        //scrollX: 0,
        // scrollX: true,
        //scrollCollapse: 0,
        pagingType: "full_numbers",
        // select: {style: "single"},
        language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
        columnDefs: [{targets: -1, visible: true, searchable: false}],
        drawCallback: addRound,
        // createdRow: function (a, i, e) {
        //     15e4 < 1 * i[5].replace(/[\$,]/g, "") && $("td", a).eq(5).addClass("text-danger")
        // }
    });
    // var a = $("#datatable-buttons").DataTable({
    //     lengthChange: !1,
    //     buttons: ["copy", "print"],
    //     language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
    //     drawCallback: addRound
    // });
    // a.buttons().container().appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"), $("#scroll-vertical-datatable").DataTable({
    //     scrollY: "350px",
    //     scrollCollapse: !0,
    //     // scrollX: !0,
    //     paging: !1,
    //     language: {paginate: {previous: "<i class='mdi mdi-chevron-left'>", next: "<i class='mdi mdi-chevron-right'>"}},
    //     drawCallback: addRound
    // })
});