/**
 * カレンダー表記
 */
$(document).ready(function() {
    // 表示するカレンダーを日本形式に変更
    $("div.date-ymd").datepicker({
        format : 'yyyy/mm/dd',
        language : 'ja',
        autoclose : true,
        clearBtn : true
    });

    // 表示するカレンダーを日本形式に変更
    $("div.date-ym").datepicker({
        format : 'yyyy/mm',
        language : 'ja',
        autoclose : true,
        minViewMode: 'months',
        clearBtn : true
    });

    // カレンダーで選択した日付をセット
    $("div.date").datepicker().on("changeDate", function(ev) {
        $("div.datepicker.dropdown-menu").hide();
    });
});
/**
 * ポップアップ表示
 **/
$(function() {
    $('[rel=popover]').popover();
});


//$(document).ready(function() {
//    $('.click-check-tr').click(function() {
//        var checkbox = $(this).find(":checkbox");
//        var $t = $(this);
//        clickCheckLine($t);
//    });
//    $('.click-check-tr-select-td').click(function() {
//        var checkbox = $(this.parentElement).find(":checkbox");
//        clickCheckLine(checkbox);
//    });
//});

$(function() {
    $('.check_table tr').hover(function() {
        $(this).addClass('hover_tr');
    }, function() {
        $(this).removeClass('hover_tr');
    }).click(function(evt) {
        var $t = $(this);
        var chk = $t.find(':checkbox')[0];
        if (chk === undefined || chk === null) {
            return;
        }
        if (evt.target != chk) {
            chk.checked = !chk.checked;
        }
        if (chk.checked) {
            $t.addClass('checked_tr');
        } else {
            $t.removeClass('checked_tr');
        }
    });
});


$(function() {
    $('.radio_table tr').hover(function() {
        $(this).addClass('hover_tr');
    }, function() {
        $(this).removeClass('hover_tr');
    }).click(function(evt) {
        var $t = $(this);
        var chk = $t.find(':radio')[0];
        if (chk === undefined || chk === null) {
            return;
        }
        if (evt.target != chk) {
            chk.checked = true;
        }

        var tr = $(".radio_table tr");//全行を取得
        for(var i=0; i < tr.length; i++ ){
            tr.removeClass('checked_tr');
        }
        if (chk.checked) {
            $t.addClass('checked_tr');
        }
    });
});


function clickCheckLine(obj) {

    var checkbox = obj.find(":checkbox");

    if (checkbox.is(':disabled')) {
        return;
    }

    var isChecked = checkbox.prop("checked");
    var tag = $(event.target).prop("tagName");
    if (tag === "INPUT" || tag === "LABEL") {
        return;
    }
    checkbox.prop("checked", !isChecked);

    if (!isChecked) {
        obj.addClass('selected_row');
    } else {
        obj.removeClass('selected_row');
    }

}

function blocUIOn() {
    $.blockUI({
        message: 'Now Loading',
        css: {
            border: 'none',
            padding: '10px',
            backgroundColor: '#333',
            opacity: .5,
            color: '#fff'
        },
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.6
        }
    });
}

function blocUIOff() {
    $.unblockUI();
}

///**
//* 選択行取得処理
//* @param selectId
//* @returns
//*/
//function setId(selectId) {
//ele = document.getElementsByName("selectId");
//ele[0].value = selectId;
//}

///**
//* ログオフ処理
//* 親画面リロードの制御
//* window.close動作
//*/
//function logout() {
//var obj = document.getElementById('layout');
//obj.setAttribute('onUnload', 'window.opener.location.reload()');
//window.close();
//return;
//}

///**
//* 文字列 → boolean型の変換
//*
//* @param val boolean値の文字列 ("true" or "false")
//* @return boolean
//*/
//function strToBol(val) {
//if (val == "true") {
//return true;
//} else {
//return false;
//}
//}

///**
//* 文字列 → 整数の変換
//*
//* @param val 文字列
//* @return 整数に変換後の値
//*/
//function strToInt(str) {
//var rtn = 0;
//try {
//// カンマを削除して数値変換
//var val = parseInt(new String(str).replace(/,/g, ""));
//if (!isNaN(val)) {
//rtn = val;
//}
//} catch (e) {
//}
//return rtn;
//}

///**
//* 文字列の0埋め処理
//*
//* @param num 対象文字列
//* @param figures 桁数
//* @returns 0埋め後の文字列
//*/
//function convertNum(num, figures) {
//var str = String(num);
//while (str.length < figures) {
//str = "0" + str;
//}
//return str;
//}
