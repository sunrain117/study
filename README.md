# study
功能介绍：该插件 实现功能是模仿原生中数据列表 左右滑动的时候出现相应的操作功能 如：删除、编辑等；<br>
插件特点：该插件不依赖任何js库，纯原生js实现，降低依赖性；项目中引入slidedelete.js文件，稍作配置即可<br>
目录介绍：<br>
          主要文件就是slidedelete.js文件，其中封装了整个功能，如果不用改案例布局的话，布局可以自己来实现;<br>
          main.js 文件：该文件为辅助案例布局文件，来实现移动端适配布局算法，用的是html标签中添加font-size布局方式;<br>
          css文件夹里：由于该案例项目用的是轻量级aui  css库，所以该案例中也添加了aui的一些样式文件；
                       在实际项目中你可以按照自己的布局实现，然后按照插件的使用方法使用即可，该插件不依赖任何第三方库;<br>
         <br>              
插件的实现原理：<br>
                1）列表的每一行为完整的一项，然后给予该项一个相对定位；<br>
                2）在该块中添加两个同级的块，用什么标签按照自己的需求；一个标签里面放的是隐藏的button，另一个里面就是显示的数据<br>
                3）重要的一点，就是将按钮那个块给一个绝对定位，让他不占文档流，然后数据层覆盖在按钮曾上边显示；<br>
                4）当像左滑动的时候，让数据层左移动，然后下边的按钮显示出来；当然要添加一些过度动画和界限<br>
<br>
插件列表功能布局：看一下案例中的布局<br>
          <!--
                  <section class="car-info-item slide-delete"> //该块为列表的每一项
                      <div style="" class="delete-wrap">      //存放button
                        <button ></button>
                      </div>
                      <a class=""> //存放数据
                        <p><span class="car-name">雪铁龙 世嘉三厢 2011款 1.6 手动 时尚型[灰色]</span></p>
                        <p><span class="car-num">京N88888</span></p>
                        <p><em class="aui-pull-left money-icon"><img src="http://img.youxinpai.com/sales_cowry/images/money_icon_round.png"></em><span class="car-money ml10">保留价:8.00万元</span></p>
                        <span class=" edit-btn"><img src="http://img.youxinpai.com/sales_cowry/images/edit_icon.png"></span>
                      </a>
                  </section>
                  -->
                  <br>
 插件用法：1）引入slidedelete.js文件到页面中<br>
           2）在数据项中添加类"slide-delete",（如：上边例子中添加到<br> section中）该类作用只是表明插件作用块的标识；如果你想在该类下写样式，也是可以的；
           3）然后为插件指定可滑动的数据块，如：案例中指定的是<br> sliderdelete.sliderItem=".slide-delete>a";这就表明a标签是可以滑动的；
           4）最后初始化插件，如sliderdelete.init();这样就可以实现与原生的侧滑删除效果了；<br>
           
  
