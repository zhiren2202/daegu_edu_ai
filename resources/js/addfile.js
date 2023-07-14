// 추가 입력
$(function () {
  var cnt = 0;

  $("#btnAdd").click(function () {
    var oEl = $(".data-form").find(".data-form-add1");

    if (oEl.find(".data-form-addCon").length < 10) {
      oEl.find(".data-form-addCon").last().clone().appendTo(oEl);
      oEl.find(".data-form-addCon").last().find("input").val("");
      var name = "abc" + ++cnt;
      oEl.find(".data-form-addCon").last().find("input").attr("id", name);
    } else {
      alert("첨부서류는 최대 10개 입니다.");
    }

    return false;
  });

  $("#btnAdd2").click(function () {
    var oEl = $(".data-form").find(".data-form-add2");

    if (oEl.find(".data-form-addCon").length < 10) {
      oEl.find(".data-form-addCon").last().clone().appendTo(oEl);
      oEl.find(".data-form-addCon").last().find("input").val("");
      var name = "abc" + ++cnt;
      oEl.find(".data-form-addCon").last().find("input").attr("id", name);
    } else {
      alert("첨부서류는 최대 10개 입니다.");
    }

    return false;
  });
});
