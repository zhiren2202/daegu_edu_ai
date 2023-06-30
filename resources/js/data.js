// datepicker 기본 설정
$.datepicker.setDefaults({
  dateFormat: 'yy-mm-dd',
  prevText: '이전 달',
  nextText: '다음 달',
  monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  showMonthAfterYear: true,
  yearSuffix: '년',
});

$(function () {
    $("#applyDate0").datepicker({
      changeMonth: true,
      changeYear: true,
    });
    $('#applyDate0').datepicker('setDate', 'today');
  });


  $(function () {
    $("#applyDate1").datepicker({
      changeMonth: true,
      changeYear: true,
    });
    $('#applyDate1').datepicker('setDate', 'today');
  });

  // 동적 태그 만들기
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
