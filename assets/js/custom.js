$(document).ready(function(){
	var sno = 1;

	

	$(".addNew").click(function(){ 
		var quevalue = sno;
    	$(".container").append('<div class="row added-row"><div class="col-md-1">'+ sno++ +'</div><div class="col-md-7"><div class="form-group"><input type="text" name="p_que[]"  class="form-control required" placeholder="How do you feel today?"></div></div><div class="col-md-4"><div class="form-group"><select name="queType[]" class="form-control changing required"><option selected="selected">--select one--</option><option data-id='+quevalue+' value="1">Multi line text</option><option data-id='+quevalue+' value="2" >single choice</option><option data-id='+quevalue+' value="3" >multi choice</option></select></div></div></div>');
    });

	$("body").on('click','.addNewSubQue',function () {
		$(this).prop('disabled', true);
		value = $(this).val();
		$(this).closest(".col-md-4").after('<div class="subQuestionText"><div class="col-md-offset-1 col-md-7"><div class="form-group"><input type="text" name="s_que['+value+'][]"  class="form-control required" placeholder="How do you feel today?"></div></div><div class="col-md-4"><div class="form-group"><select name="subqueType['+value+'][]" class="form-control changing required"><option vlaue="4" selected="selected">--select one--</option><option data-id='+value+' value="1">Multi line text</option><option data-id='+value+' value="2" >single choice</option><option data-id='+value+' value="3" >multi choice</option></select></div></div></div>');
	});


	$("body").on('change','.changing',function () {
		var value = $(this).find(':selected').data('id');
		if(this.value==1){
			
			$(this).closest('.col-md-4').next('.subque').remove();
			$(this).closest('.col-md-4').after( '<div class="subque"><div style="padding-bottom: 15px;" class="col-md-offset-1 col-md-7"><textarea name="ans['+value+'][]" class="form-control" placeholder="Enter Text"></textarea></div></div>' );
		}else if(this.value==2){
			$(this).closest('.col-md-4').next('.subque').remove();
			$(this).closest('.col-md-4').after( '<div class="subque subquetionContainer"><div class="col-md-offset-1 col-md-7"><div class="form-group"><input type="text" name="ans['+value+'][]" class="form-control required" placeholder="Enter Text"></div></div> <div class="col-md-4"><button type="button" class="btn btn-befault addNewSubQue" value='+value+'><i class="fa fa-plus" aria-hidden="true"></i> Add Sub Question</button></div> </div>' );
		}else if(this.value==3){
			$(this).closest('.col-md-4').next('.subque').remove();
			$(this).closest('.col-md-4').after( '<div class="subque subquetionContainer"><div class="col-md-offset-1 col-md-7"><div class="form-group"><input type="text" name="ans['+value+'][]" class="form-control required" placeholder="Enter Text"></div></div><div class="col-md-4"><button type="button" class="btn btn-befault addNewSubQue" value='+value+'><i class="fa fa-plus" aria-hidden="true"></i> Add Sub Question</button></div><div class="col-md-offset-1 col-md-7"><div class="form-group"><input type="text" name="ans['+value+'][]" class="form-control required" placeholder="Enter Text"></div></div><div class="col-md-4"><button type="button" class="btn btn-befault addNewSubQue" value='+value+'><i class="fa fa-plus" aria-hidden="true"></i> Add Sub Question</button></div><div class="col-md-offset-1 col-md-7"><div class="form-group"><input type="text" name="ans['+value+'][]" class="form-control required" placeholder="Enter Text"></div></div><div class="col-md-4"><button type="button" class="btn btn-befault addNewSubQue" value='+value+'><i class="fa fa-plus" aria-hidden="true"></i> Add Sub Question</button></div><div class="col-md-offset-1 col-md-7"><div class="form-group"><input type="text" name="ans['+value+'][]" class="form-control required" placeholder="Enter Text"></div></div><div class="col-md-4"><button type="button" class="btn btn-befault addNewSubQue" value='+value+'><i class="fa fa-plus" aria-hidden="true"></i> Add Sub Question</button></div><div class="col-md-offset-1 col-md-7"><div class="form-group"><input type="text" name="ans['+value+'][]" class="form-control required" placeholder="Enter Text"></div></div><div class="col-md-4"><button type="button" class="btn btn-befault addNewSubQue" value='+value+'><i class="fa fa-plus" aria-hidden="true"></i> Add Sub Question</button></div></div>' );
		}else{
			$(this).closest('.col-md-4').next('.subque').remove();
		}
	});
    
	$('.add-poll').on('submit', function(event){
		$('.validation-valid-label').each(function(){
			$(this).remove();
		});
		var error = 0;
		$('.required').each(function(e){
			if($(this).val()==''){
				$('<p class="validation-valid-label"><i class="fa fa-times-circle" aria-hidden="true"></i> Please fill this field.</p>').insertAfter($(this));
				error = 1;
			}else if( $(this).children('option:selected').text() == '--select one--' ){
				$('<p class="validation-valid-label"><i class="fa fa-times-circle" aria-hidden="true"></i> Please fill this field.</p>').insertAfter($(this));	
			}
		});

		if (error==1) {
			return false;
		}else{
			$(this).find('button[type="submit"]').text('Loading...').removeAttribute('type');
			return false;
		}
	});

	$('.all-remove').click(function(){
        $('.container').html('');
    });
});