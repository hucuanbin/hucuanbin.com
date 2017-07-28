function  setNewTime(Format) {
	Format=Format||'hh:mm';
	var time= new Date().Format(Format);
	return time;
}


$("[data-gourl]").click(function () {
	location.href=$(this).data('gourl')
});
$("[data-gohistory]").click(function () {
    window.history.go(-1);
});


$("[data-doajishi]").click(function () {
	var num=30,timeout,$this;
	$this=$(this);
	$this.prop("disabled",true);
	$this.text(num--+"秒")
	timeout=setInterval(function () {
		num=num<10?'0'+num:num;
		$this.text(num+"秒")
		num--;
		if(num<=0){
			clearInterval(timeout);
			$this.text("获取");
			$this.prop("disabled",false);
		}
	},1000)
})

$("[data-model]").click(function () {
    var modalId = $(this).data("model");
	$("#"+modalId).css({opacity: 1,display: 'block'})
});
$(document).on('click',"[data-model-cols],.weui-mask",function () {
	$(".js_dialog").css({opacity: 0,display: 'none'})
});
$("[data-tab]").click(function () {
    var $this = $(this);
    $this.addClass('active').siblings('[data-tab].active').removeClass("active");

});

$("input").focus(function () {
    $(".fixed").hide();
});

function setLoading(text){
	var aa=''+
	'<div class="js_dialog zidingyi" id="index-dakai" style="opacity: 1; display: block;">'+
	'	<div class="weui-mask"></div>'+
		'<div class="weui-dialog br15">'+
		'	<p class="fs-18px">'+text+'</p>'+
	'	</div>'+
	'</div>';
	console.log(aa);
	$("body").append(aa);
}