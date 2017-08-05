<template>
  <div id="infor">
   <div class="infor_title">消息</div>
   <div class="infor_content">
        <div class="infor_item">
            <div class="infor_img"><img src="./me.jpg" alt=""></div>
            <div class="user_infor">
                <div class="user_infor_left"><p>白小明 关注了你</p>
                <span>学生</span></div>
                <div class="user_infor_right"><i class="iconfont btn_add">&#xe674;</i></div>
            </div>
        </div>
        <div class="infor_item">
            <div class="infor_item">
            <div class="infor_img"><img src="./me.jpg" alt=""></div>
            <div class="user_infor">
                <div class="user_infor_left"><p>徐后标 关注了你</p>
                <span>学生</span></div>
                <div class="user_infor_right"><i class="iconfont btn_add">&#xe674;</i></div>
            </div>
        </div>
        </div>
        <div class="infor_item">
            <div class="infor_item">
            <div class="infor_img"><img src="./me.jpg" alt=""></div>
            <div class="user_infor">
                <div class="user_infor_left"><p>高常粮 关注了你</p>
                <span>学生</span></div>
                <div class="user_infor_right"><i class="iconfont btn_add">&#xe674;</i></div>
            </div>
        </div>
        </div>
   </div>
  </div>
</template>

<script>

</script>

<style>
.infor_title {
    height: 40px;
    width: 100%;
    line-height: 40px;
    text-align: center;
    color: #000;
    background-color: #f5f5f7;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.infor_content {
    background: #fff;
}
.infor_content .infor_item {
    display: flex;
    width: 100%;
    height: 60px;
    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.infor_img {
    height: 100%;
    width: 35px;
    margin-left: 10px;
    margin-top: 10px;
}
.infor_img img {
    display: block;
    height: 35px;
    width: 35px;
}
.user_infor {
    position: relative;
    flex: 1;
    margin-left: 10px;
}
.user_infor_left {
    float: left;
}
.user_infor p{
    font-size: 14px;
    padding-top: 11px;
    padding-bottom: 5px;
}
.user_infor span {
    font-size: 12px;
}
.user_infor_right {
    width: 30px;
    line-height: 60px;
    float: right;
    margin-right: 15px;
}
.user_infor .btn_add {
    font-size: 28px;
    color: #66C300;
}
</style>

<!-- <p>白小明</p><span>学生</span> -->