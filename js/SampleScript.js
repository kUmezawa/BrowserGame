/**
 * 
 */

//$('#toolContent').show();
$('#toolTitle').bind('click', function() {
	//$('#toolContent').show();
	$('#toolContent').slideDown();
});

$('#btnClose').bind('click', function(){
	if(confirm('閉じてよろしいですか?')){
		window.close();
	}else{
		alert('閉じるのを中止しました');
	}
});

$('#btnTest').bind('click', function(){
	console.log("console test");
	alert('jQuery Test');
});