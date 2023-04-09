<template>
  <div>
    <header id="header" class="">
      <nav class="navbar navbar-default navbar-custom">
        <div class="container">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header navbar-header-custom">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false"><span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
            <a class="navbar-brand" href="/">首页</a>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav nav-custom">
              <li :class="navActive===1?'nav-custom-hover':''">
                <a href="#" @mouseenter="navActive=1" title="文本工具">文本工具</a>
              </li>
              <li :class="navActive===2?'nav-custom-hover':''">
                <a href="#" @mouseenter="navActive=2" title="语言工具">语言工具</a>
              </li>
              <li :class="navActive===3?'nav-custom-hover':''">
                <a href="#" @mouseenter="navActive=3" title="财务工具">财务工具</a>
              </li>
              <li :class="navActive===4?'nav-custom-hover':''">
                <a href="#" @mouseenter="navActive=4" title="日期时间">日期时间</a>
              </li>
              <li :class="navActive===5?'nav-custom-hover':''">
                <a href="#" @mouseenter="navActive=5" title="转换工具">转换工具</a>
              </li>
              <li :class="navActive===6?'nav-custom-hover':''">
                <a href="#" @mouseenter="navActive=6" title="便民查询">便民查询</a>
              </li>
              <li :class="navActive===7?'nav-custom-hover':''">
                <a href="#" @mouseenter="navActive=7" title="开发工具">开发工具</a>
              </li>
              <li :class="navActive===8?'nav-custom-hover':''">
                <a href="#" @mouseenter="navActive=8" title="编码加密">编码加密</a>
              </li>
              <li :class="navActive===9?'nav-custom-hover':''">
                <a href="#" @mouseenter="navActive=9" title="网络工具">网络工具</a>
              </li>
            </ul>
          </div>
          <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
      </nav>
    </header>
    <div class="container container-custom">
      <div class="nav-content" style="display: none;" :style="navActive === 1?'display:block':''" v-cloak>
        <a href="daxiaoxie.html">英文字母大小写转换</a>
        <a href="quchong.html">文本去重分隔工具</a>
        <a href="/textreplace.html">文本替换工具</a>
        <a href="/reversetext.html">文本反转排序工具</a>
        <a href="/xuhao.html">文本增加序号工具</a>
        <a href="/ocr.html">OCR图片识别文字工具</a>
        <a href="fuhao.html">特殊符号大全</a>
        <a href="/fontchanger.html">花体英文转换器</a>
        <a href="/zishu.html">字数统计工具</a>
      </div>
      <div class="nav-content" style="display: none;" :style="navActive === 2?'display:block':''" v-cloak>
        <a href="/jianfanti.html">中文简繁体转换工具</a>
        <a href="/pinyin.html">汉语拼音转换工具</a>
        <a href="/yuepin.html">粤语拼音转换工具</a>
        <a href="/chengyu.html">成语查询工具</a>
        <a href="/fanyi.html">在线翻译工具</a>
        <a href="/wubi.html">五笔编码查询</a>
        <a href="/shouzimu.html">拼音首字母缩写</a>
        <a href="/shici.html">一句诗词</a>
        <a href="/lizhi.html">励志句子</a>
        <a href="/dujitang.html">毒鸡汤</a>
      </div>
      <div class="nav-content" style="display: none;" :style="navActive === 3?'display:block':''" v-cloak>
        <a href="/renminbi.html">人民币大写转换器</a>
        <a href="/riqidaxie.html">支票日期大写转换器</a>
        <a href="/yingwendaxie.html"> 英文金额大写转换器</a>
        <a href="/tax.html">税金计算工具</a>
        <a href="/geshui.html">个人所得税计算器</a>
        <a href="/huilv.html">货币汇率换算工具</a>
        <a href="/huobi.html">世界各国地区货币</a>
      </div>

      <div class="nav-content" style="display: none;" :style="navActive === 4?'display:block':''" v-cloak>
        <a href="/nongli.html">农历公历转换器</a>
        <a href="/huangli.html">农历老黄历查询</a>
        <a href="/riqi.html">日期时间计算器</a>
        <a href="/workingday.html">工作日计算器</a>
        <a href="/holiday.html">2023年放假安排</a>
        <a href="/timezone.html">世界时间转换器</a>
        <a href="/dateformat.html">英文日期格式转换</a>
        <a href="/expirationdate.html">保质期计算器</a>
      </div>
      <div class="nav-content" style="display: none;" :style="navActive === 5?'display:block':''" v-cloak>
        <a href="/qrcode.html">二维码生成器</a>
        <a href="/qrcodereader.html">二维码解码器</a>
        <a href="/barcode.html">条形码生成器</a>
        <a href="/jinzhi.html">进制转换器</a>
        <a href="/changdu.html">长度单位换算器</a>
        <a href="/zhongliang.html">重量单位换算器</a>
      </div>
      <div class="nav-content" style="display: none;" :style="navActive === 6?'display:block':''" v-cloak>
        <a href="/shouji.html">手机号码归属地查询</a>
        <a href="/dianhua.html">常用电话列表</a>
        <a href="/quhao.html">区号邮编查询工具</a>
        <a href="/shenfenzheng.html">身份证所在地查询</a>
        <a href="/daxue.html">全国高校信息查询</a>
        <a href="/shoudu.html">各国首都列表</a>
        <a href="/shicha.html">各国区号代码及时差</a>
        <a href="/xuexing.html">子女血型遗传查询</a>
        <a href="/fanying.html">反应速度测试工具</a>
      </div>
      <div class="nav-content" style="display: none;" :style="navActive === 7?'display:block':''" v-cloak>
        <a href="json.html">JSON代码格式化工具</a>
        <a href="/namingconverter.html">命名转换器</a>
        <a href="/cssformat.html">CSS在线格式化工具</a>
        <a href="/javascript.html">JavaScript代码格式化</a>
        <a href="/htmlformat.html">HTML格式化工具</a>
        <a href="/sqlformatter.html">SQL格式化压缩工具</a>
        <a href="/regexp.html">正则表达式测试工具</a>
        <a href="/timestamp.html">时间戳转换工具</a>
        <a href="/crontab.html">crontab执行时间计算</a>
        <a href="/color.html">颜色值转换工具</a>
        <a href="/text2html.html">文本转HTML工具</a>
      </div>
      <div class="nav-content" style="display: none;" :style="navActive === 8?'display:block':''" v-cloak>
        <a href="/base64.html">Base64编码解码工具</a>
        <a href="/md5.html">MD5加密工具</a>
        <a href="/jiami.html">SHA1在线加密工具</a>
        <a href="/randompassword.html">随机密码生成工具</a>
        <a href="/guid.html">GUID生成工具</a>
        <a href="/unicode.html">Ascii与Native编码转换</a>
        <a href="/quanjiaobanjiao.html">全角半角转换工具</a>
        <a href="/urldecode.html">URL解码编码</a>
        <a href="/randomnumber.html">随机数生成器</a>
        <a href="/morse.html">摩斯电码编码解码</a>
      </div>
      <div class="nav-content" style="display: none;" :style="navActive === 9?'display:block':''" v-cloak>
        <a href="/ip.html">IP地址查询工具</a>
        <a href="/whois.html">域名whois查询</a>
        <a href="/beian.html">域名备案查询</a>
        <a href="/weixincheck.html">微信域名拦截检测</a>
        <a href="/imgalt.html">ALT标签替换工具</a>
        <a href="/ua.html">User Agent信息查看</a>
        <a href="/getmobile.html">手机号码提取工具</a>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  name: 'toolsHeader',
  data() {
    return {
      navActive: 1,
      msg: "hello http-vue-loader --- kaimo "
    };
  },
  created() {

  },
  mounted() {

  },
  methods: {},
};
</script>

<style scoped>
.nav-custom-hover {
  background-color: #E1E1E1 !important;
}

.nav-content {
  min-height: 60px;
  flex-direction: row;
  flex-wrap: wrap;
}

.nav-content a {
  margin-right: 30px;
  line-height: 30px;
  display: inline-block;
}
</style>