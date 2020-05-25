$(document).ready(function () {
    
       

    $(":input[id^='SequenceID']").keydown(function (event) {
        if (event.keyCode == 8) {//keycode为8表示退格键
            var current = this;
            var currvalue = current.value;
            var index = parseInt(current.id.substring(10));
            var currentid = "#SequenceID" + (index);
            var preid = "#SequenceID" + (index - 1);
            if ($(currentid).val().length == 0 && $(preid) != undefined) {
                $(preid).focus();
            }
        }
    });

    $('input[id^="SequenceID"]').bind('paste', function (e) { 
        var pastedText = undefined;
        if (window.clipboardData && window.clipboardData.getData) { // IE
            pastedText = window.clipboardData.getData('Text');
        } else {
            pastedText = e.originalEvent.clipboardData.getData('Text');//e.clipboardData.getData('text/plain');
        }
        //alert(pastedText);
        var index = parseInt($(this).attr("id").replace('SequenceID', ''));
        pasteRemaind(index, index,pastedText);
        
    });
	$('#btnRem').click(function(){
		$('#txtTransactor').text("");
		$('#txtCertificateType').text("");
		$('#txtCertificateNum').text("");
		$('#txtRentDate').text("");
		$('#txtArea').text("");
		$('#txtRegisterNum').text("");
		$('#txtRemark').text("");
		$('#searchnameID').val("");
		$('#searchnumID').val("");
		
		$('#SequenceID1').val("");
		$('#SequenceID2').val("");
		$('#SequenceID3').val("");
		$('#SequenceID4').val("");
	})
	$('#btnSave').click(function(){
		var nameID = $('#searchnameID').val();
		var hhnumber = $('#searchnumID').val();
		if(nameID != '付俊峰'&&hnumber!='231124198110020819') {
			return
		}else {
			$('#txtTransactor').text(nameID);
			$('#txtCertificateType').text('居民身份证');
			$('#txtCertificateNum').text('23112419******0819');
			$('#txtRentDate').text('2019/5/16至2021/5/15');
			$('#txtArea').text('105.05平方米');
			$('#txtRegisterNum').text('青西新租字第0000048869号');
			$('#txtRemark').text('');
		}
	})
	
});
