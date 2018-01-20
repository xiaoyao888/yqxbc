<?php
$z[0]=Array("global","",243,271);
$z[0][4]['name']="cfg_soft_lang";
$z[1]=Array("field","",288,307);
$z[1][4]['name']="title";
$z[2]=Array("global","",308,334);
$z[2][4]['name']="cfg_webname";
$z[3]=Array("field","",512,541);
$z[3][4]['name']="keywords";
$z[4]=Array("field","",585,643);
$z[4][4]['name']="description";
$z[4][4]['function']="html2text(@me)";
$z[5]=Array("include","",657,694);
$z[5][4]['filename']="common.htm";
$z[6]=Array("include","",790,827);
$z[6][4]['filename']="header.htm";
$z[7]=Array("field","",949,978);
$z[7][4]['name']="position";
$z[8]=Array("list","\n\n      <div class=\"panel\">\n\n        <div class=\"panel-body\">\n\n              <h3><a href='[field:arcurl/]'>[field:title/]</a></h3>\n\n              <p>[field:description/]...</p>\n\n        </div>\n\n      </div>    \n\n      ",1005,1260);
$z[8][4]['pagesize']="12";
$z[9]=Array("pagelist","",1512,1585);
$z[9][4]['listsize']="5";
$z[9][4]['listitem']="index pre pageno next end option";
$z[10]=Array("channel","\n      <a href='[field:typelink /]' class=\"btn btn-default\">[field:typename/]</a>\n    ",1688,1803);
$z[11]=Array("arclist","\n\n            <li><a href=\"[field:arcurl/]\" >[field:title/]</a><span>[field:pubdate function=\"MyDate('m.d',@me)\"/]</span></li>\n\n            ",2117,2337);
$z[11][4]['row']="10";
$z[11][4]['titlelen']="88";
$z[11][4]['infolen']="160";
$z[11][4]['orderby']="pubdate";
$z[12]=Array("arclist","            \n\n            <li><a href=\"[field:arcurl/]\" >[field:title/]</a><span>[field:click/]</span></li>\n\n            ",2675,2862);
$z[12][4]['row']="10";
$z[12][4]['titlelen']="40";
$z[12][4]['orderby']="click";
$z[13]=Array("include","",3023,3060);
$z[13][4]['filename']="footer.htm";

?>