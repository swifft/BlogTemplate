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
                        <div class="left_carousel">
                            <el-carousel height="340px">
                                <el-carousel-item v-for="item in 4" :key="item">
                                    <h3 class="small">{{ item }}</h3>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                        <div class="article_list">
                            <ul>
                                <li>
                                    <div>
                                        <a href="#" title="我的家乡山东作文500字" target="_blank"><i><img
                                                src="../assets/images/part502.jpg" alt="我的家乡山东作文500字"></i></a>
                                    </div>
                                    <div>
                                        <h2>我的家乡山东作文500字</h2>
                                        <p class="article_list_info">
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，一个是鲁国。古代好多名人的家乡都在这两个国家。其中最有名的要数孔子了。孔子的家乡在鲁国曲阜，他的学生把他的言行记了下来，编成了《论语》。孔子死后，人们为他建了一座中国最大的孔庙，每到孔子的诞辰的当天，会有很多人来祭祀。</p>
                                        <p class="article_list_time"><span><a href="#"
                                                                              target="_blank">向阳而生</a></span><span>时间：2020-03-06</span><span>点击：2</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="#" title="我的家乡山东作文500字" target="_blank"><i><img
                                                src="../assets/images/part502.jpg" alt="我的家乡山东作文500字"></i></a>
                                    </div>
                                    <div>
                                        <h2>我的家乡山东作文500字</h2>
                                        <p class="article_list_info">
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，一个是鲁国。古代好多名人的家乡都在这两个国家。其中最有名的要数孔子了。孔子的家乡在鲁国曲阜，他的学生把他的言行记了下来，编成了《论语》。孔子死后，人们为他建了一座中国最大的孔庙，每到孔子的诞辰的当天，会有很多人来祭祀。</p>
                                        <p class="article_list_time"><span><a href="#"
                                                                              target="_blank">向阳而生</a></span><span>时间：2020-03-06</span><span>点击：2</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="#" title="我的家乡山东作文500字" target="_blank"><i><img
                                                src="../assets/images/part502.jpg" alt="我的家乡山东作文500字"></i></a>
                                    </div>
                                    <div>
                                        <h2>我的家乡山东作文500字</h2>
                                        <p class="article_list_info">
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，一个是鲁国。古代好多名人的家乡都在这两个国家。其中最有名的要数孔子了。孔子的家乡在鲁国曲阜，他的学生把他的言行记了下来，编成了《论语》。孔子死后，人们为他建了一座中国最大的孔庙，每到孔子的诞辰的当天，会有很多人来祭祀。</p>
                                        <p class="article_list_time"><span><a href="#"
                                                                              target="_blank">向阳而生</a></span><span>时间：2020-03-06</span><span>点击：2</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="#" title="我的家乡山东作文500字" target="_blank"><i><img
                                                src="../assets/images/part502.jpg" alt="我的家乡山东作文500字"></i></a>
                                    </div>
                                    <div>
                                        <h2>我的家乡山东作文500字</h2>
                                        <p class="article_list_info">
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，一个是鲁国。古代好多名人的家乡都在这两个国家。其中最有名的要数孔子了。孔子的家乡在鲁国曲阜，他的学生把他的言行记了下来，编成了《论语》。孔子死后，人们为他建了一座中国最大的孔庙，每到孔子的诞辰的当天，会有很多人来祭祀。</p>
                                        <p class="article_list_time"><span><a href="#"
                                                                              target="_blank">向阳而生</a></span><span>时间：2020-03-06</span><span>点击：2</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="#" title="我的家乡山东作文500字" target="_blank"><i><img
                                                src="../assets/images/part502.jpg" alt="我的家乡山东作文500字"></i></a>
                                    </div>
                                    <div>
                                        <h2>我的家乡山东作文500字</h2>
                                        <p class="article_list_info">
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，一个是鲁国。古代好多名人的家乡都在这两个国家。其中最有名的要数孔子了。孔子的家乡在鲁国曲阜，他的学生把他的言行记了下来，编成了《论语》。孔子死后，人们为他建了一座中国最大的孔庙，每到孔子的诞辰的当天，会有很多人来祭祀。</p>
                                        <p class="article_list_time"><span><a href="#"
                                                                              target="_blank">向阳而生</a></span><span>时间：2020-03-06</span><span>点击：2</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <a href="#" title="我的家乡山东作文500字" target="_blank"><i><img
                                                src="../assets/images/part502.jpg" alt="我的家乡山东作文500字"></i></a>
                                    </div>
                                    <div>
                                        <h2>我的家乡山东作文500字</h2>
                                        <p class="article_list_info">
                                            在两千多年前的春秋时期，现在的山东省是两个小国家，一个是齐国，一个是鲁国。古代好多名人的家乡都在这两个国家。其中最有名的要数孔子了。孔子的家乡在鲁国曲阜，他的学生把他的言行记了下来，编成了《论语》。孔子死后，人们为他建了一座中国最大的孔庙，每到孔子的诞辰的当天，会有很多人来祭祀。</p>
                                        <p class="article_list_time"><span><a href="#"
                                                                              target="_blank">向阳而生</a></span><span>时间：2020-03-06</span><span>点击：2</span>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
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
    }

    .left_carousel {
        padding: 5px;
    }

    .article_list {
        padding: 5px;

    }

    .article_list ul {
        padding: 5px;
        background-color: rgba(255, 255, 255, 0.8);
    }

    .article_list li {
        display: flex;
        overflow: hidden;
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px dotted #ccc;
    }

    .article_list li h2 {
        font-family: 楷体;
        margin-left: 5px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        word-break: break-all;
        overflow: hidden;
    }

    .article_list li .article_list_info {
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        word-break: break-all;
        overflow: hidden;
        text-indent: 2em;
        margin: 5px;
        color: rgba(0, 0, 0, 0.8);
        font-family: 微软雅黑;
    }

    .article_list li .article_list_time span {
        margin-left: 5px;
        margin-right: 5px;
        color: #888;
        font-size: 13px;
    }

    .article_list li .article_list_time span a {
        color: #ed4040;
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

    .blog_footer{
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