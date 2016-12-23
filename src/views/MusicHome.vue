<template>
	<div id="home" v-scroll>
		<!-- 轮播图 -->
		<section class="mu-banner swiper-container">
			<ul class="swiper-wrapper clearfix">

				<li class="swiper-slide" v-for="item in imgPath">
					<a href="#"><img :src=item alt="qqMusic"></a>
				</li>
			</ul>
			<ul class="swiper-pagination">
			</ul>
		</section>
		
		<!-- 电台 -->
		<section class="radio clearfix">
			<h2 class="art-head" @click="play">电台</h2>
			<figure v-for="item in radioData">
				<img :src=item.path alt="#">
				<figcaption>
					<p>{{item.desc}}</p>
				</figcaption>
			</figure>
		</section>

		<!-- 热门歌单 -->
		<section id="wrapper" class="hotSongs clearfix">
			<h2 class="art-head">热门歌单</h2>
			<div id="box">
				<figure v-for="item of songsData">
					<img :src=item.path alt="">
					<figcaption>
						<span><i></i>{{item.times}}</span>
						<p>{{item.desc}}</p>
						<em>{{item.author}}</em>
					</figcaption>
				</figure>
			</div>
		</section>

		<div v-if="isEnd">
			<music-load></music-load>
		</div>
	</div>
</template>
<script>
	// 引入swiper
	import '../common/swiper.min.js'
	import MusicLoad from '../components/MusicLoad.vue'
	import router from '../router'

	export default {
		data(){
			return {
				imgPath: ['src/assets/banner1.jpg','src/assets/banner2.jpg','src/assets/banner3.jpg','src/assets/banner4.jpg'],
				radioData : [
					{
						"path":"src/assets/content1.jpg",
						"desc":"热歌"
					},{
						"path":"src/assets/content2.jpg",
						"desc":"一人一首招牌歌"
					},{
						"path":"src/assets/content3.jpg",
						"desc":"记忆深处的那首歌"
					},{
						"path":"src/assets/content4.jpg",
						"desc":"奈何情深缘浅"
					}
					,{
						"path":"src/assets/content5.jpg",
						"desc":"曾经年少轻狂，岁月静好"
					}
					,{
						"path":"src/assets/content6.jpg",
						"desc":"一个人的狂欢"
					}
				],
				songsData : [
					{
						"path":"src/assets/hotsongs1.jpg",
						"desc":"编辑推荐 | 迷失北欧系列",
						"times":"128.4万",
						"author": "小太阳"
					},{
						"path":"src/assets/hotsongs2.jpg",
						"desc":"华语 | 谁把民谣听成了酒",
						"times":"105.5万",
						"author": "南山"
					},{
						"path":"src/assets/hotsongs3.jpg",
						"desc":"欧美 | 暖冬依偎在阳光",
						"times":"49.3万",
						"author": "snnny"
					},{
						"path":"src/assets/hotsongs4.jpg",
						"desc":"韩语 | 二段横踢作品精选",
						"times":"29.8万",
						"author": "Kevin"
					}
					,{
						"path":"src/assets/hotsongs5.jpg",
						"desc":"走心 | 寂寞的时候还",
						"times":"105.2万",
						"author": "Suunto"
					}
					,{
						"path":"src/assets/hotsongs6.jpg",
						"desc":"唱一首名叫自己的歌",
						"times":"105.2万",
						"author": "maya"
					}
				],
				isEnd: false
			}
		},
		components: {
			MusicLoad
		},
		watch: {
			isEnd(newVal, oldVal){

			     // this.$http.get('songsData.json',{params:{wd: 6}})
			     // .then(function (res) {
			     // 	console.log(res);
			     // }, function (err) {
			     // 	console.log(err.status)
			     // })

				this.songsData.push(...[{
					"path":"src/assets/hotsongs7.jpg",
					"desc":"编辑推荐 | 迷失北欧系列",
					"times":"100.1万",
					"author": "snnny"
				},{
					"path":"src/assets/hotsongs8.jpg",
					"desc":"华语 | 谁把民谣听成了酒",
					"times":"77.9万",
					"author": "诗人"
				},{
					"path":"src/assets/hotsongs9.jpg",
					"desc":"欧美 | 暖冬依偎在阳光",
					"times":"95.2万",
					"author": "暮色瑾年"
				},{
					"path":"src/assets/hotsongs10.jpg",
					"desc":"韩语 | 二段横踢作品精选",
					"times":"139.0万",
					"author": "穆里奇"
				}
				,{
					"path":"src/assets/hotsongs11.jpg",
					"desc":"走心 | 寂寞的时候还",
					"times":"85.5万",
					"author": "露琪"
				}
				,{
					"path":"src/assets/hotsongs1.jpg",
					"desc":"唱一首名叫自己的歌",
					"times":"128.2万",
					"author": "陆宇"
				}])
				// var _this = this;
				// setTimeout(function(){
				// 	this.isEnd = false;
				// 	alert('重置isEnd')
				// },1000)
				console.log(newVal,oldVal)
				setTimeout(()=>this.isEnd = false ,3000)
			}
		},
		methods: {
			play(){
				router.push({path: '/play'})
			}
		},
		directives: {
			scroll:{
				bind(el,binding,v) {
					window.addEventListener('scroll',function(){
						var pageY = $('body,html').height(),//1766
								winY = $(window).height(); //667
								var tarY = Math.round(pageY - winY);	
								if(tarY - $(this).scrollTop() === 0){
									v.context._data.isEnd = true;
									console.log('到底了')
								}

							})
				}
			}}
		}
	// var isEnd = false;
	$(function(){
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 3000,//可选选项，自动滑动
			autoplayDisableOnInteraction : false,
			loop: true,
			touchRatio : 0.5,//拖动大于一半才会换图
			pagination : '.swiper-pagination',
			paginationElement : 'li',
		})
	})
</script>
<style lang="sass" scoped>
@import '../common/common.scss';
@import '../common/swiper.scss';

section.swiper-container{
	ul.swiper-wrapper{
		li{
			a{
				img{
					width: 100%
				}
			}
		}
	}
	.swiper-pagination{
		bottom: 5px;
		height: rem(30);
		.swiper-pagination-bullet{
			display: inline-block;
				width: rem(30);
			    height: rem(30);
			    border-radius: 50%;
			    background: #000;
			    opacity: .5;
			    margin: 0 5px ;
		} 
		.swiper-pagination-bullet-active{
				background-color: #31c27c;
				margin: 0 5px;
		}
	}

}
%style {
	width:100%;
	margin-top: rem(20);
	h2{
		@include font-dpr2(40px);
		font-weight: 400;
		line-height: rem(40);
		padding-left: rem(10);
	}
	figure{
		float:left; ;
		position: relative;
		z-index: 2;
		width: (100% / 2);
		text-align: center;
		&::before{
			content:'';
			display: block;
			position: absolute;
			right: rem(20);
			bottom:rem(75);
			width: rem(50);
			height: rem(50);
			background-image:url(../assets/list_sprite.png);
			background-size: cover;
		};
		img{
			width: 95%;
			margin: 5px auto;
		}
		span{
			position: absolute;
			left: rem(20);
			bottom: rem(45);
			width: rem(130);
			height: rem(30);
			color: #fff;
			@include font-dpr2(20px);
			line-height: rem(30);
			i{
				position: absolute;
				height: 100%;
				width: rem(30);
				left: 0;
				bottom: 0;
				background-image: url(../assets/list_sprite.png);
				background-repeat: no-repeat;
    			background-size: rem(48) rem(120);
    			background-position: 0 rem(-100);
			}
		}
		figcaption {
			position: relative;
			height: rem(60);
			em{
				position: absolute;
				left: rem(5);
				top: rem(30);
				color: gray;
				@include font-dpr2(20px);
			}
			p{
			@include font-dpr2(24px);
			padding-left: rem(5);
			text-align: left;
			margin: 3px 0 20px;
			}
		}
	}
}
section.radio,
section.hotSongs{
	@extend %style;
}
</style>
<style>
	.swiper-pagination-bullet{
		display: inline-block;
			width: 8px;
		    height: 8px;
		    border-radius: 50%;
		    background: #000;
		    opacity: .5;
		    margin: 0 5px ;
	} 
	.swiper-pagination-bullet-active{
			background-color: #31c27c;
			margin: 0 5px;
	}
</style>
