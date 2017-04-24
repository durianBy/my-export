/**
 * 打开新页面并利用post方式传递参数
 * @author zhangbiying
 * @date   2016-5-23
 * @return {[type]}   [String]
 */
$.newWindowWithPostData = function (url, name, param) {
    var newWindow = window.open(basePath + "/views/common/jsp/export-blank.jsp", '', "height=230, width=500,top=400,left=700, toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
    if (!newWindow) {
        return false;
    }
    var html = "<html><head></head><body>"
        + "<form id='form' method='post' action='"
        + url + "'>";

    if (param) {
        $.each(param, function (n, index) {
            html = html + "<input type='hidden' name='" + n + "' value='" + index + "'/>";
        });
        /*for (var i = 0; i < paramNames.length; i++) {
         postDataHtml = postDataHtml + "<input type='hidden' name='" + paramNames[i] + "' value='" + paramValues[i] + "'/>";
         }*/
    }

    html = html + "</form><script type=\"text/javascript\">document.getElementById(\"form\").submit()</script>";
    newWindow.document.write(html);
    return newWindow;
};
