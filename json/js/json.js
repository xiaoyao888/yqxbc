	$("#switch-state").not("[data-switch-no-init]").bootstrapSwitch();
	$("#jsonStr").animate({height:"100%",width:"100%"});    
    setInterval("autoFormat()",1000);
    function autoFormat(){
    	var autoSwitch = $("input[id=switch-state]:checked");
    	var isChecked = false;
    	if(autoSwitch.length>0){
    		isChecked = autoSwitch[0].checked;
    	}

    	if(isChecked){
	    	var jsonStr = $("#jsonStr").val();	    	
	    	if(jsonStr!=""){
				$('#jsonStr').val( formatJson(jsonStr) ); 			
			}
		}
    }
	$("#jsonStr").blur(function(){
  		var jsonStr = $("#jsonStr").val();		
		$('#jsonStr').val( formatJson(jsonStr) ); 
	});	
	$("#jsonStr").focus(function(){  		 
		$('#jsonStr').popover("destroy");
	});
	$("#jsonValid").click(function(){
		var jsonStr = $("#jsonStr").val();		
		$('#jsonStr').val( formatJson(jsonStr) ); 		
	});
 
	var formatJson = function(json, options) {
		try{
			if(json==""){
				$('#jsonStr').popover("show");
				$('#jsonStr').attr("data-content","朕需要一个json字符串！");
				return json;
			}else{
				$('#jsonStr').popover("destroy");				
			}
		  var reg = null,
			formatted = '',
			pad = 0,
			PADDING = '    '; // one can also use '\t' or a different number of spaces

		  // optional settings
		  options = options || {};
		  // remove newline where '{' or '[' follows ':'
		  options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
		  // use a space after a colon
		  options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;
		  
		  // begin formatting...

		  // make sure we start with the JSON as a string
		  if (typeof json !== 'string') {
			json = JSON.stringify(json);
		  }
		  // parse and stringify in order to remove extra whitespace
		  json = JSON.parse(json);
		  json = JSON.stringify(json);

		  // add newline before and after curly braces
		  reg = /([\{\}])/g;
		  json = json.replace(reg, '\r\n$1\r\n');

		  // add newline before and after square brackets
		//  reg = /([\[\]])/g;
		// json = json.replace(reg, '\r\n$1\r\n');
	//       json = json.replace(reg, '$1');
		  
		 reg = /(\"\[\]\")/g;
		 json = json.replace(reg, '$1');

		  // add newline after comma
		  reg = /(\,)/g;
		  json = json.replace(reg, '$1\r\n');
		  
		  // remove multiple newlines
		  reg = /(\r\n\r\n)/g;
		  json = json.replace(reg, '\r\n');
		  
		  // remove newlines before commas
		  reg = /\r\n\,/g;
		  json = json.replace(reg, ',');

		  // optional formatting...
		  if (!options.newlineAfterColonIfBeforeBraceOrBracket) {     
			reg = /\:\r\n\{/g;
			json = json.replace(reg, ':{');
			reg = /\:\r\n\[/g;
			json = json.replace(reg, ':[');
		  }
		  if (options.spaceAfterColon) {      
			//reg = /\:/g;
			//json = json.replace(reg, ': ');
		  }

		  var jsonArr = json.split('\r\n');
		  $.each(jsonArr, function(index, node) {
			var i = 0,
			  indent = 0,
			  padding = '';
			
			if (node.match(/\{$/) || node.match(/\[$/)) {
			  indent = 1;
			} else if (node.match(/\}/)) {
			  if (pad !== 0) {
				pad -= 1;
			  }
			} else if(node.match(/\}\]/)){
			  if (pad !== 0) {
				pad -= 2;
			  }
			}else {
			  indent = 0;
			}
		  
			for (i = 0; i < pad; i++) {
			  padding += PADDING;
			}
		  
			formatted += padding + node + '\r\n';
			pad += indent;
		  });
		  
		  return formatted;
		}catch(e){
			$('#jsonStr').popover("show");
			 
			$('#jsonStr').attr("data-content","朕需要一个正确的json字符串！");
			 
			return json;
		}
	};