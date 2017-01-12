/**
 * 
 */
 
$(function(){

	$('#toolTitle').on('click',function() {
		//$('#toolContent').show();
		console.log("hoge");
		$('#toolContent').slideDown();
	});
	
	$('#btnTest').on('click',function(){
		console.log("console test");
		alert('jQuery Test');
	});
	
	$('#btnClose').on('click', function(){
	if(confirm('閉じてよろしいですか?')){
		window.close();
	}else{
		alert('閉じるのを中止しました');
	}
    });

});








