<template>
    <div>
        <div class="blog_header">
            <el-row>
                <el-col :xs="{span: 17, offset: 7}" :sm="{span: 17, offset: 7}" :md="{span: 4, offset: 1}"
                        :lg="{span: 4, offset: 1}">
                    <div class="title_left">
                        <h1>Mr.D 博客</h1>
                    </div>
                </el-col>
                <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 14, offset: 0}"
                        :lg="{span: 14, offset: 0}">
                    <div class="title_middle">
                        <div>首页</div>
                        <div>我的文章</div>
                        <div>关于我</div>
                        <div>登录/注册</div>
                    </div>
                </el-col>
                <el-col :xs="{span: 22, offset: 1}" :sm="{span: 22, offset: 1}" :md="{span: 4, offset: 0}"
                        :lg="{span: 4, offset: 0}">
                    <div class="title_right">
                        <el-input placeholder="请输入搜索关键词" suffix-icon="el-icon-search"></el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="blog_main">
            <div class="main">
                <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 10, offset: 4}"
                        :lg="{span: 10, offset: 4}">
                    <div class="main_left">
                        <el-card class="box-card">
                            <div class="main_nav">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                                </el-breadcrumb>
                            </div>
                            <div class="main_title">
                                <div class="title_main">
                                    <h1>我的家乡山东作文500字</h1>
                                </div>
                                <el-col :xs="{span: 20, offset: 2}" :sm="{span: 20, offset: 2}"
                                        :md="{span: 24, offset: 0}"
                                        :lg="{span: 24, offset: 0}">
                                    <div class="info">
                                        <span>博客人生</span>
                                        <span>作者：杨青青</span>
                                        <span>日期：2020-03-06 11:35:03</span>
                                        <span>点击：142</span>
                                    </div>
                                </el-col>
                                <div class="content">
                                    <p>我的家乡在山东省。它位于华北一带，是一个历史悠久的地方，也是一个航运中心，还是一个美食、旅游的好去处。

                                        在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，一个是鲁国。古代好多名人的家乡都在这两个国家。其中最有名的要数孔子了。孔子的家乡在鲁国曲阜，他的学生把他的言行记了下来，编成了《论语》。孔子死后，人们为他建了一座中国最大的孔庙，每到孔子的诞辰的当天，会有很多人来祭祀。

                                        山东是一个半岛，它的一部分伸向了宽广的渤海，因此山东也是一个航运中心。山东省的一个大港口是青岛港。每年都会有上亿吨的东西从这出口、进口。

                                        去了山东就一定要去泰山，泰山是五岳之首，我虽然没有去过泰山，但听爸爸说过，泰山有一千五百四十米高，如果从一万七千多级台阶爬上山顶，就会看到壮观的日出。太阳刚出来的时候，天和海一片深红，接着千缕金光射了出去，天和海慢慢变颜色：橙红、淡红、橙黄、亮黄，然后太阳升空。美丽巍峨的泰山令我神往。

                                        我的家乡准确的说是山东省德州市，这里的一大名吃是德州扒鸡，德州扒鸡香香的，如果再配上山东大煎饼就更好吃了。这里的扒鸡让人想着就直流口水，吃了，那就回味无穷。我为我的家乡有这么举世闻名的伟人、这么多旅游胜地、这么多美味的食品而自豪。

                                        这就是我美丽的家乡——山东。</p>
                                </div>
                                <div class="tags">
                                    <span>家乡</span>
                                    <span>山东</span>
                                    <span>作文</span>
                                </div>
                                <div class="about_article">
                                    <p>上一篇:遇见你,是我平凡人生中最美的事情</p>
                                    <p>下一篇:看见你,是我平凡人生中最美的事情</p>
                                </div>
                            </div>
                            <div class="comment">
                                <div class="comment_title">文章评论</div>
                                <div class="comment_main">
                                    <div class="text_main">
                                        <textarea placeholder="写下你想说的，开始我们的对话"></textarea>
                                    </div>
                                    <div class="comment_btn">
                                        <el-button type="danger" round>发表</el-button>
                                    </div>
                                </div>
                                <div class="comment_member">
                                    <p>142人参与，9条评论</p>
                                </div>
                                <div class="comment_details">
                                    <div class="comment_box">
                                        <div class="commentImg">
                                            <img src="../assets/images/part502.jpg" alt="">
                                        </div>
                                        <div class="commentInfo">
                                            <div class="memberInfo">
                                                <p>小黄</p>
                                                <span>昨天 18:52</span>
                                            </div>
                                            <div class="comment_content">
                                                还不错呀
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </div>

                </el-col>
                <div class="hidden-sm-and-down main_right">
                    <div class="tuiJian">
                        <el-card class="box-card">
                            <ul>
                                <li>
                                    <div>
                                        <h2>站长推荐</h2>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="../assets/images/part502.jpg" alt="">
                                    </div>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="../assets/images/part502.jpg" alt="">
                                    </div>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="../assets/images/part502.jpg" alt="">
                                    </div>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </el-card>
                    </div>
                    <div class="reMen">
                        <el-card class="box-card">
                            <ul>
                                <li>
                                    <div>
                                        <h2>热门点击</h2>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </el-card>
                    </div>
                </div>
            </div>
        </div>
        <div class="blog_footer">
            <el-row>
                <el-col :xs="{span: 24, offset: 0}" :sm="{span: 24, offset: 0}" :md="{span: 16, offset: 4}"
                        :lg="{span: 16, offset: 4}">
                    <div class="footer">
                        <p>©2020 Designed and Developed by Deng Shilin</p>
                        <p>版权所有：Mr.D个人博客</p>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import 'element-ui/lib/theme-chalk/display.css';

    export default {
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped>
    .blog_header {
        background-color: rgba(144, 238, 144, 0.3);
    }

    .title_left {
        height: 100px;
        display: flex;
        align-items: center;
    }

    .title_left h1 {
        color: rgba(160, 32, 240, 0.6);
        font-family: 楷体;
    }

    .title_middle {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .title_middle div {
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 10px;
        border-radius: 5px 5px 5px 5px;
        font-size: 18px;
        font-family: 楷体;
        color: rgba(0, 0, 0, 0.6);
        background-color: rgba(0, 0, 0, 0.1);
    }

    .title_right {
        height: 100px;
        display: flex;
        align-items: center;
    }

    .blog_main {
        background-color: #cccccc;
    }

    .main {
        /*border: 1px solid red;*/
        display: flex;
    }

    .main_left {
        display: flex;
        flex-direction: column;
        margin: 5px;
    }

    .main_nav {
        padding-bottom: 20px;
        border-bottom: #ececec 1px solid;
        color: #888;
    }

    .main_title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
        padding-bottom: 10px;
        border-bottom: #ececec 1px solid;
    }

    .main_title .title_main h1 {
        text-align: center;
        font-size: 22px;
        margin-bottom: 15px;
        text-align: center;
    }

    .main_title .info {
        margin-top: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #888;
        font-size: 14px;
    }

    .main_title .info span {
        margin-right: 30px;
    }

    .main_title .content {
        word-break: break-word;
        text-align: justify;
    }

    .main_title .content p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        margin: 26px 0;
        line-height: 30px;
        text-indent: 2em;
        color: #303133;
    }

    .main_title .tags {
        width: 100%;
        margin: 10px 0;
        font-size: 14px;
    }

    .main_title .tags span {
        padding: 5px;
        margin-left: 10px;
        border: 1px solid rgba(0, 0, 0, 0.3);
    }

    .main_title .about_article {
        width: 100%;
        margin: 10px 0;
    }

    .main_title .about_article p {
        width: 100%;
        margin: 10px 0;
    }

    .comment {
        margin-top: 5px;
    }

    .comment .comment_title {
        font-size: 24px;
        border-bottom: 1px solid #ececec;
        margin-bottom: 5px;
    }

    .comment .comment_main {
        vborder-radius: 4px;
        background: #f7f7f7;
        padding: 10px;
        box-shadow: inset 2px 2px 6px rgba(0, 0, 0, .08);
    }

    .comment .comment_main .text_main {
        position: relative;
        overflow: hidden;
        padding: 8px 18px;
    }

    .comment .comment_main .text_main textarea {
        border: none;
        background: none;
        outline: none;
        width: 100%;
        display: block;
        height: 80px;
        line-height: 22px;
        font-size: 14px;
        background-attachment: scroll;
        resize: none;
        padding: 0;
    }

    .comment .comment_main .comment_btn {
        display: flex;
        justify-content: flex-end;
    }

    .comment .comment_member {
        font-size: 14px;
        margin: 30px 0;
    }

    .comment .comment_details {
        background-color: rgba(190, 190, 190, 0.1);
    }

    .comment .comment_details .comment_box{
        border-bottom: 1px solid #ececec;
        margin: 5px 0;
        padding: 15px 10px;
        display: flex;
    }

    .comment .comment_details .commentImg img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .comment .memberInfo{
        display: flex;
    }

    .comment .memberInfo p{
        color: #444;
        font-size: 18px;
        font-weight: 700;
        margin-left: 20px;
    }

    .comment .memberInfo span{
        color: #aaa;
        font-size: 14px;
        font-weight: 500;
        margin-left: 10px;
    }

    .comment .commentInfo .comment_content{
        line-height: 26px;
        font-size: 14px;
        word-wrap: break-word;
        color: #555;
        margin-left: 20px;
    }

    .main_right {
        margin: 5px;
        display: flex;
        flex-direction: column;
    }

    .main_right > div {
        margin-bottom: 20px;
    }

    .main_right ul {
        width: 400px;
    }

    .main_right li {
        display: flex;
        align-items: center;
        overflow: hidden;
        margin-bottom: 12px;
        padding-bottom: 12px;
        border-bottom: 1px dotted #ccc;
    }

    .main_right .reMen li p {
        text-indent: 0;
    }

    .main_right .reMen li:nth-child(2):before {
        content: "01";
        color: #f63;
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right .reMen li:nth-child(3):before {
        content: "02";
        color: #f63;
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right .reMen li:nth-child(4):before {
        content: "03";
        color: #f63;
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right .reMen li:nth-child(5):before {
        content: "04";
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right .reMen li:nth-child(6):before {
        content: "05";
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right .reMen li:nth-child(7):before {
        content: "06";
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right .reMen li:nth-child(8):before {
        content: "07";
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right .reMen li:nth-child(9):before {
        content: "08";
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right .reMen li:nth-child(10):before {
        content: "09";
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right .reMen li:nth-child(11):before {
        content: "10";
        font-size: 16px;
        font-style: italic;
        font-family: arial;
    }

    .main_right li img {
        width: 100px;
        height: 60px;
    }

    .main_right li p {
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        word-break: break-all;
        overflow: hidden;
        font-size: 14px;
        text-indent: 2em;
        margin-left: 5px;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .blog_footer {
        background-color: rgba(0, 0, 0, 0.6);
    }

    .footer {
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: rgba(255, 255, 255, 0.6);
        font-family: Arial;
    }
</style>