/**
 * 登録画面へ遷移
 */
$('#register').click(function(){
    document.form.action += "../../register.html";
    document.form.submit();
});

/**
 * 編集画面へ遷移
 */
$('#modify').click(function(){
    document.form.action += "../../edit.html";
    document.form.submit();
});

/**
 * 削除処理
 */
$('#delete').click(function(){
    document.form.action += "../../eventDetail.html";
    document.form.submit();
});

/**
 * 詳細画面へ遷移
 */
$('#detail').click(function(){
    document.form.action += "../../detail.html";
    document.form.submit();
});

/**
 * 参加可否登録画面へ遷移
 */
$('#participate').click(function(){
    document.form.action += "../../participate.html";
    document.form.submit();
});