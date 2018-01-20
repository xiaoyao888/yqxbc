<a href="{dede:field name='typeurl'/}">{dede:field name='typename'/}</a> 
              <hr><!-- 这里我们加一个横线，已区分顶级栏目、子栏目，此处为注释文字，可以删除--> 
              {dede:channel type='son' noself='yes'} 
              <a href="[field:typelink/]">[field:typename/]</a><br /> 
              {/dede:channel}