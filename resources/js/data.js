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
  $("#birthDate").datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

$(function () {
  $("#applyDate0").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate0").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate1").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate1").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate3").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate3").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate4").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate4").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate5").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate5").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_0").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_0").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_1").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_1").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_2").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_2").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_3").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_3").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_4").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_4").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_5").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_5").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_6").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_6").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_7").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_7").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_8").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_8").datepicker("setDate", "today");
});

$(function () {
  $("#applyDate2_9").datepicker({
    changeMonth: true,
    changeYear: true,
  });
  $("#applyDate2_9").datepicker("setDate", "today");
});

// 관련 자료 등록
$(document).ready(function () {
  var fileTarget = $("#input-file");

  fileTarget.on("change", function () {
    if (window.FileReader) {
      var filename = $(this)[0].files[0].name;
    } else {
      var filename = $(this).val().split("/").pop().split("\\").pop();
    }

    $(this).siblings(".upload-name").val(filename);
    $(this).siblings(".upload-name").show().stop();
  });
});