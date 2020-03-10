<template>
    <div class="page">
        <div class="header-part">
            <span>{{companyName}}</span>
            <div class="header-menu">
                <div v-for="(menuItem, menuIndex) in menuList"  class="menu-item" :key="menuIndex" @click="titleChange(menuIndex)">
                    <span class="item-name">{{menuItem.name}}</span>
                    <div v-show="menuIndex === activeIndex" class="item-line"></div>
                </div>
            </div>
        </div>
        <div>
            <el-carousel ref="carousel" :height="carouselHeight" :interval="5000" :loop="true" arrow="always" :initial-index="activeIndex" @change="menuChange">
                <el-carousel-item v-for="(carouselItem, carouselIndex) in carouselList" :key="carouselIndex" name="carouselIndex">
                    <div class="carousel-img" :style="{backgroundImage: 'url( '+ carouselItem.imgUrl +')'}"></div>
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="company-title">
            <h2>{{companyName}}</h2>
            <h3>Shen Yang Gao Bi technology co,.LTD  </h3>
        </div>
    </div>
</template>

<script>
import '../assets/styles/index.css'
const planeUrl = require('../assets/imgs/plane.jpg')
const medicalUrl = require('../assets/imgs/medical.jpg')
export default {
    name: "index",
    created() {
        let me = this
        me.init()
    },
    data() {
        return {
            companyName: '沈阳高比科技有限公司',
            activeIndex: 0,
            menuList: [
                { index: '0', name: '无人机'},
                { index: '1', name: '解决方案'},
                { index: '2', name: 'AI'},
                { index: '3', name: '智能医疗'},
            ],
            carouselList: [
                { imgUrl: planeUrl},
                { imgUrl: medicalUrl},
                { imgUrl: planeUrl},
                { imgUrl: medicalUrl}
            ],
            carouselHeight: ''
        }
    },
    methods: {
        init () {
            let me = this
            me.carouselHeight = document.body.clientWidth * 1/3 + 'px'  // 图片高度比长度
        },
        menuChange(indexNow) {
            let me = this
            me.activeIndex = indexNow
        },
        titleChange(indexNow) {
            let me = this
            me.$refs.carousel.setActiveItem(indexNow)
        }
    }
}
</script>
