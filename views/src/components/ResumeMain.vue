<template>
  <div class="main">
    <swiper class="mainbody" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="fisrtmain">
        <h2>{{ ResumeHeader }}</h2>
        <div class="BasicInfo">
          <div class="portrait">
            <img src="../assets/portrait.png" alt="我的头像">
          </div>
          <table cellpadding="0" cellspacing="0">
            <tr>
            <td class="Name">程晨</td>
            <td class="Sex">女</td>
            </tr>
            <tr>
              <td class="KeyWordTitle">关键词</td>
              <td class="KeyWord">H5开发、移动端开发、Web前端</td>
            </tr>
            <tr>
              <td class="MyPhoneTitle">电话：</td>
              <td class="MyPhone"><a href="15718863925">15718863925</a></td>
            </tr>
            <tr>
              <td>邮箱：</td>
            <td><a href="mailto:zhi.lianbi520@163.com">zhi.lianbi520@163.com</a></td>
            </tr>
          </table>
          <h4>个人资料</h4>
          <table class="PersonData" cellspacing="0" cellpadding="0">
            <tr>
              <td>工作经验  3年</td>
              <td>现居住地  北京</td>
            </tr>
            <tr>
              <td>学历	   本科</td>
              <td>专业  信息管理与信息系统</td>
            </tr>
            <tr>
              <td>英语水平   4级</td>
              <td>目前状态   在职</td>
            </tr>
          </table>
          <h4>专业技能</h4>
          <ul>
            <li>1.熟练HTML5/CSS3网页构建，对HTML语义化和CSS3新增特性有深刻的理解以及熟练的运用。</li>
            <li>2.熟悉响应式布局和弹性盒布局，能够熟练完成基于HTML5的webApp开发&&hybirdApp的开发，善于处理移动端各类设备适配问题。</li>
          </ul>
        </div>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li>3.熟练掌握JavaScript语言核心技术DOM、BOM、JSON等，对面向对象的编程思想有一定的认识与理解，对ES6&ES7新特性有一定了解。</li>
          <li>4.熟练使用JQuery等优秀的JavaScript库以及JQuery插件。</li>
          <li>5.熟练运用Vue全家桶构建SPA项目并部署至nginx，有Vue构建的SPA的线上项目,对React等其他前端MVVM框架有一定的认知与了解。</li>
          <li>6.熟练使用ajax进行http异步请求，利用promise的http库axios.js，进行异步请求，渲染数据至页面。有实现请求拦截的相关实际开发经验。</li>
          <li>7.对mint-ui、bootstrap、weui等UI框架有相关开发经验，能够熟练使用SASS等CSS预处理器进行样式布局。</li>
          <li>8.了解AMD、CMD、CommonJS前端模块化规范。</li>
          <li>9.能够熟练使用Webpack前端模块化工具。</li>
          <li>10.能够熟练使用Vue-cli、Weex-toolkit、FIS3等前端工程化工具。</li>
          <li>11.能够基于thymeleaf模版进行页面开发，了解jsp页面。</li>
          <li>12.有基于weex实现跨平台移动开发的项目经历。</li>
          <li>13.熟练使用git&&svn版本控制代码管理工具。</li>
          <li>14. 能够熟练使用Webstorm、Sublime text编译器、IntelliJ IDEA等IDE，利用Eslint检查语法规范以及代码风格。</li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li>15. 熟练运用markdown语法编写文档，利用思维导等工具梳理业务逻辑。</li>
          <li>16. 能够熟练使用PhotoShop、Sketch等图像处理软件完成切图工作，并制作成雪碧图。</li>
        </ul>
        <h4>工作经验</h4>
        <div class="WorkSuffer">
          <p>2016/04--至今<br/>前端开发技术经理<br/>北京药渡经纬信息科技有限公司</p>
          <p>2015/07--2016/03<br/>前端开发工程师<br/>杭州蚯蚓网络科技有限公司</p>
          <ul>
            <li>1. 负责将UI设计稿形成符合W3C/HTML5等规范的前端代码。</li>
            <li>2. 负责PC端前端构建和移动端Web产品的HTML/CSS/JS代码编写。</li>
            <li>3. 负责实现JS页面交互以及业务逻辑处理。</li>
            <li>4. 负责HTML页面动态效果的实现。</li>
            <li>5. 负责与java后台实现数据通信，处理用户权限等前后台功能联调。</li>
            <li>6. 负责制定前端开发计划以及安排相关开发任务，带领前端团队高效精准的完成开发需求。</li>
          </ul>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h4>项目经历</h4>
        <div class="ProjectBody">
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">药渡数据国际版<font>(正在开发中)</font></th>
            <tr>
              <td>项目地址</td>
              <td>暂无生产环境</td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>基于药渡数据中文版实现国际版的开发，内容逻辑与中文版保持并进行大幅度的优化</td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>负责项目前端部分的构建，安排前端开发任务，跟进开发进度，统筹前端整体开发内容。</td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">药渡数据WebApp<font>(已上线，现在正在版本迭代中)</font></th>
            <tr>
              <td>项目地址</td>
              <td><a href="https://m.data.pharmacodia.com" target="_blank">https://m.data.pharmacodia.com</a></td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>移动版的药渡数据，与pc端业务逻辑保持一致。</td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>负责项目整体页面布局，调用数据接口实现前后台交互，完成页面动效，协助运维把项目部署到nginx上。</td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">药渡数据PC端<font>(已上线，现在正在版本迭代中)</font></th>
            <tr>
              <td>项目地址</td>
              <td><a href="https://data.pharmacodia.com">https://data.pharmacodia.com</a></td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>收录上市和临床药物数据信息，涵盖合成、生物结构上市批准、销量、临床、专利等药物研发全领域的数据。</td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>负责项目整体页面布局，调用数据接口实现前后台交互，完成页面效果。</td>
            </tr>
          </table>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="ProjectBody">
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">药渡App<font>(已上线)</font></th>
            <tr>
              <td>项目地址</td>
              <td>药渡App(ios& Android)</td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>药渡APP，提供药学领域的新闻资讯。</td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>负责在客户端嵌入资讯详情页。发现列表页，详情页的开发。将药渡数据webapp整体嵌入药渡原生App中。</td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">药渡学院<font>(正在重构中)</font></th>
            <tr>
              <td>项目地址</td>
              <td>药渡app</td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>药渡学院，提供药学课程直播的平台。</td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>重构直播列表页，直播回顾列表页，详情页等。调用后台接口。</td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">药渡网、药渡资讯pc端、药渡报告等<font>(已上线)</font></th>
            <tr>
              <td>项目地址</td>
              <td><a href="https://www.pharmacodia.com/" target="_blank">https://www.pharmacodia.com/</a></td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>药渡网业务产品。</td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>负责页面编写、页面功能实现。</td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">药渡微信公众号</th>
            <tr>
              <td>项目地址</td>
              <td>Pharmacodia</td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>药渡微信端</td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>负责发现模块编写，页面功能实现。</td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">想去移动端<font>(已上线)</font></th>
            <tr>
              <td>项目地址</td>
              <td>想去App</td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>是一款购物社区类型的App,为独立设计师提供作品展示平台，为购物者提供前沿的设计理念与产品。</td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>此项目为团队项目，本人负责部分页面布局，以及与和后台登录注册，搜索这三个模块数据交互。</td>
            </tr>
          </table>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="ProjectBody">
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">想去移动端<font>(已上线)</font></th>
            <tr>
              <td>项目地址</td>
              <td>想去App</td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>是一款购物社区类型的App,为独立设计师提供作品展示平台，为购物者提供前沿的设计理念与产品。</td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>此项目为团队项目，本人负责部分页面布局，以及与和后台登录注册，搜索这三个模块数据交互。</td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">想去 PC端<font>(已上线)</font></th>
            <tr>
              <td>项目地址</td>
              <td><a href="http://www.xiangqu.com/" target="_blank">http://www.xiangqu.com/</a></td>
            </tr>
            <tr>
              <td>项目描述</td>
              <td>想去是一个专注于个性设计和纯手工制作的购物型社区。为独立设计师提供作品展示平台，为中高端消费者个性化定制。</td>
            </tr>
            <tr>
              <td>项目职责</td>
              <td>此项目为团队项目，本人主要负责首页、逛模块、个人中心页面的布局与数据交互，解决各浏览器兼容问题。</td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0">
            <th colspan="2">备注</th>
            <tr>
              <td colspan="2">各项目具体开发环境、应用技术请查看PDF版简历，有相关介绍</td>
            </tr>
          </table>
        </div>
      </swiper-slide>
      <swiper-slide>
        <h4>教育背景</h4>
        <p>2012-2016   烟台南山学院 商学院</p>
        <h4>个人评价</h4>
        <ul>
          <li>1. 性格开朗、抗压能力强、能够迅速融入新环境。</li>
          <li>2. 良好的沟通能力、协调能力和团队合作能力。</li>
          <li>3. 独立解决问题能力强，学习能力强。</li>
          <li>4. 可以带领前端团队进行高质量高效率的前端开发工作。</li>
          <li>5. 具备规范的代码编写风格、良好的代码编辑习惯。</li>
          <li>6. 热爱前端开发，愿意进行前端新技术尝试与探索。</li>
        </ul>
        <h4>业余兴趣</h4>
        <p>户外运动、音乐</p>
        <h4>github</h4>
        <p><a href="https://github.com/zhilianbi520" target="_blank">https://github.com/zhilianbi520</a></p>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" id="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  name: 'HelloWorld',
  data() {
    return {
      ResumeHeader: '前端开发工程师',
      swiperOption: {
        notNextTick: true,
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: {
          el: '.swiper-pagination',
        },
        paginationType: 'progress',
        mousewheelControl: true,
        observeParents: true,
      },
    };
  },
  created() {
  },
  components: {
    swiper, swiperSlide,
  },
  methods: {
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .main,.mainbody{
    width: 100vw;
    height: 100vh;
  }
  .fisrtmain h2{
    font-size: 64px;
    color: #333;
  }
  .swiper-slide{
    color: #333;
    padding:0 40px;
  }
  .swiper-slide h4{
    margin:30px 0 10px 0;
    text-align: left;
    font-size: 40px;
  }
  .swiper-slide p{
    text-align: left;
    margin:10px 0 0 20px;
    font-size: 30px;
  }
  .swiper-slide .WorkSuffer p{
    font-size: 30px;
    line-height: 45px;
  }
  .swiper-slide a{
    color: #3471ff;
  }
  .swiper-slide ul{
    list-style: none;
    padding-left: 36px;
    font-size: 30px;
    text-align: left;
    text-indent: -30px;
    margin-top:10px;
  }
  .swiper-slide ul li{
    line-height: 50px;
    font-size: 30px;
    text-align: justify;
  }
  .BasicInfo table,.ProjectBody table{
    width: 100%;
    text-align: left;
    font-size: 30px;
  }
  .BasicInfo table td{
    padding:10px 0;
  }
  .BasicInfo table tr td:nth-child(1){
    width: 35%;
    vertical-align: top;
  }
  .ProjectBody table tr td:nth-child(1){
    width: 23%;
    vertical-align: top;
  }
  .ProjectBody table th{
    padding:10px 0;
    font-size: 32px;
  }
  .ProjectBody table th font{
    font-size: 26px;
    font-weight: normal;
  }
  .BasicInfo .Name{
    font-size: 50px;
    font-weight: 900;
  }
  .portrait{
    margin-bottom: 20px;
  }
  .portrait img{
    width:200px;
    height: 200px;
  }
  #swiper-pagination .swiper-pagination-bullet{
    width:25px;
    height:25px;
    margin:10px 0;
  }
  .swiper-pagination-bullet:nth-child(1).swiper-pagination-bullet-active{
    background:#42b983;
  }
  .swiper-pagination-bullet:nth-child(2).swiper-pagination-bullet-active{
    background:#fbe094;
  }
  .swiper-pagination-bullet:nth-child(3).swiper-pagination-bullet-active{
    background:aqua;
  }
  .swiper-pagination-bullet:nth-child(4).swiper-pagination-bullet-active{
    background: #ff8514;
  }
  .swiper-pagination-bullet:nth-child(5).swiper-pagination-bullet-active{
    background:lightgreen;
  }
  .swiper-pagination-bullet:nth-child(6).swiper-pagination-bullet-active{
    background: #668bff;
  }
  .swiper-pagination-bullet:nth-child(7).swiper-pagination-bullet-active{
    background:#ff736c;
  }
</style>
