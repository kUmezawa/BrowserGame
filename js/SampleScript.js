/**
 * 
 */
$('#toolTitle').bind('click', function() {
	//$('#toolContent').show();
	$('#toolContent').slideDown();
});


$('#btnTest').bind('click', function(){
	console.log("console test");
	alert('jQuery Test');
});

$('#btnClose').bind('click', function(){
	if(confirm('閉じてよろしいですか?')){
		window.close();
	}else{
		alert('閉じるのを中止しました');
	}
});

