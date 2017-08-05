<template>
  <transition name="move">
    <div>
      <div v-show="showFlag" class="information">
        <div class="information-head"><i class="iconfont" @click="hide">&#xe687;</i>修改资料</div>
        <div class="information-img" @click="showcamera()">头像<span><img id="user-image" src="./me.jpg"></span></div>
        <div>
          <div class="information-list" @click="selectModify(item)" v-for="item in gather">{{item.name}}<span>{{item.result}}</span></div>
        </div>
        <modify :modify_item="selectedItem" ref="modify"></modify>
      </div>
      <div class="bg" v-show="showCamera"></div>
       <transition name="moveCamera">
      <div class="camera-layer" ref="camera-layer" v-show="showCamera" @click="hideCamera()">
        <div class="camera-bg">
          <div class="camera-layer-top">
            <ul>
                <li class="select">选择</li>
                <li class="photo">拍照
                  <input id="fileBtn" class="fileBtn" type="file" accept="image/*" capture="camera" onchange="_upload()" >
                </li>
                <li class="photo-album">从相册选择 <input id="" class="file-select" type="file" accept="image/*"></li>
            </ul>
          </div>
          <div class="camera-cancle" @click="hideCamera()">取消</div>
        </div>
      </div>
      </transition>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import modify from 'base/modify/modify'

  export default {
    data() {
      return {
        showFlag: false,
        showCamera: false,
        gather: [
          {
            "name": "姓名",
            "result": "途中人"
          },
          {
            "name": "职位",
            "result": "前端工程师"
          },
          {
            "name": "公司",
            "result": "求实习工作"
          },
          {
            "name": "简介",
            "result": "双向绑定"
          },
          {
            "name": "博客地址",
            "result": "www.upyang.com"
          }
        ],
        selectedItem: {}
      };
    },
    props: {

    },
    mounted() {

    },
    methods: {
      show() {
        this.showFlag = true;
      },
      hide() {
        this.showFlag = false;
      },
      selectModify(item) {
        this.selectedItem = item;
        this.$refs.modify.show()
      },
      showcamera() {
        this.showCamera = true;
      },
      hideCamera() {
        this.showCamera = false;
      },
      _upload() {
        let User_img = document.getElementById('#user-image');
        let aim_img = document.getElementById('#fileBtn')
        let file = User_img.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          console.log(file);
          aim_img.setAttribute("src",e.event.target.result);
        }
      }
    },
    components: {
      modify
    }
  };
</script>

<style>
.information {
  z-index: 1100;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  background: #efeff4;
}
.information-head {
  height: 40px;
  width: 100%;
  line-height: 40px;
  text-align: center;
  color: #000;
  background-color: #f5f5f7;
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;
}
.information-head i {
  position: absolute;
  padding: 0 10px 0 10px;
  display: block;
  transform:rotate(180deg);
  color: #007AFF;
  font-size: 20px;
  font-weight: 600;
}
.information-img {
  width: 100%;
  height: 80px;
  line-height: 80px;
  background: #fff;
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  color: #000;
  padding-left: 10px;
}
.information-img span {
  float: right;
  display: block;
  height: 60px;
  width: 60px;
  margin-right: 20px;
  margin-top: 10px;
}
.information-img span img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.information-list {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  color: #000;
  padding-left: 10px;
}
.information-list span {
  float: right;
  display: block;
  margin-right: 20px;
  color: #8b8b8b;
}
.bg {
  z-index: 1500;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.4);
}
.camera-bg {
  z-index: 1600;
  position: fixed;
  bottom: 0;
  width: 100%;
}
.moveCamera-enter-active, .moveCamera-leave-active {
      transition: all 0.2s linear;
}
.moveCamera-enter, .moveCamera-leave-active {
  transform: translate3d(0, 100%, 0);
}
.camera-layer {
  z-index: 1500;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100%;

}
.camera-layer-top {
  margin: 0 15px 10px 15px;
}
.camera-layer-top ul li {
  display: block;
  width: 100%;
  background: #fff;
  text-align: center;
}
.select {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.photo {
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #007AFF;
  box-shadow: inset 0px -1px 1px -1px #A7A7AB;

}
.photo-album {
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  color: #007AFF;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.camera-cancle {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  font-weight: 500;
  color: #007AFF;
  background: #fff;
  text-align: center;
  border-radius: 10px;
  margin: 0 15px 15px 15px;
}
.fileBtn {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
}
.file-select {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>