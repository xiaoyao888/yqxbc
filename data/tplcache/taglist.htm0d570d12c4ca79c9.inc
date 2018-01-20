<?php
$z[0]=Array("global","",267,293);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("include","",306,343);
$z[1][4]['filename']="common.htm";
$z[2]=Array("include","",504,541);
$z[2][4]['filename']="header.htm";
$z[3]=Array("list","\n\n			<div class=\"panel\">				\n\n		        <div class=\"panel-body\">\n\n		        	<h3 style=\"background:url('/templets/bootstrap/images/document.png') no-repeat;padding-left:30px;\"><a href='[field:arcurl/]'>[field:title/]</a></h3>\n\n		            <p>[field:description/]...</p>\n		            \n		        </div>\n\n		    </div>    \n\n			",677,1059);
$z[3][4]['orderby']="sortrank";
$z[3][4]['pagesize']="10";
$z[4]=Array("prenext","",1169,1195);
$z[4][4]['get']="pre";
$z[5]=Array("prenext","",1232,1259);
$z[5][4]['get']="next";
$z[6]=Array("arclist","\n		            <li><a href=\"[field:arcurl/]\" >[field:title/]</a><span>[field:pubdate function=\"MyDate('m.d',@me)\"/]</span></li>\n		            ",1636,1858);
$z[6][4]['row']="10";
$z[6][4]['titlelen']="88";
$z[6][4]['infolen']="160";
$z[6][4]['orderby']="pubdate";
$z[7]=Array("arclist","            \n		            <li><a href=\"[field:arcurl/]\" >[field:title/]</a><span>[field:click/]</span></li>\n		            ",2205,2394);
$z[7][4]['row']="10";
$z[7][4]['titlelen']="40";
$z[7][4]['orderby']="click";
$z[8]=Array("include","",2492,2529);
$z[8][4]['filename']="footer.htm";

?>