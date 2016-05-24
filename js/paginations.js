/**
 * Created by yc on 2016/5/24.
 */

var pager = {
    "getPageHtml": function (rowCount, pageIndex, pageSize) {
        var sPage = 1;
        var ePage = 10;
        var pageCount = Math.round(rowCount / pageSize);
        if (pageCount % pageSize > 0) {
            pageCount = pageCount + 1;
        }
        if (pageIndex > 1) {
            var pages = Math.floor(pageIndex / 10);
            if (pageIndex % 10 == 0) {
                pages = pages - 1;
            }
            sPage = pages * 10 + 1;
            ePage = (pages + 1) * 10;
        }
        var pageHtml = "<ul class='pagination pagination-lg'>";
        if (pageIndex > 1) {
            pageHtml += "<li><a href='#' onclick='pager.chosePage(" + rowCount + "," + (pageIndex - 1) + "," + pageSize + ")' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
        }
        for (var i = sPage; i <= ePage; i++) {
            if (pageIndex == i) {
                pageHtml += "<li class='active'><a href='#' >" + i + "</a></li>";
            } else {
                pageHtml += "<li><a href='#' onclick='pager.chosePage(" + rowCount + "," + i + "," + pageSize + ")'>" + i + "</a></li>";
            }
        }
        if (pageIndex < pageCount) {
            pageHtml += "<li><a href='#' onclick='pager.chosePage(" + rowCount + "," + (pageIndex + 1) + "," + pageSize + ")' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>";
        }
        pageHtml += "</ul>";
        document.getElementById("paginations").innerHTML = pageHtml;
    },
    "chosePage": function (rowCount, pageIndex, pageSize) {
        pager.getPageHtml(rowCount, pageIndex, pageSize);
    }
};


window.onload = pager.getPageHtml(100,4,5);

