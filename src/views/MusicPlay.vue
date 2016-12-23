<template>

	<div id="music-play">

		<!-- 背景 -->
		<div class="bg-box">
			<img :src=songData.path class="blur" alt="">
		</div>

		<!-- 头部 -->
		<div class="head">
			<div class="singer-box">
				<img id='singer' :src=songData.path alt="">
			</div>
			
			<div class="head-info">
				<h2 class="songName" :data-song=songData.songName>{{songData.songName}}</h2>
				<p class="singer">{{songData.singer}}</p>
			</div>
			
			<music-controller @transData="receiveData" @toPlay="playSong">
				
			</music-controller>
			<music-playway></music-playway>
		</div>

		<!-- 歌曲内容 -->
		<div class="play-content">
			<!-- 旋转动画 -->
			<div class="play-rotate" :class="{show: isPlay}" :style="{backgroundImage: 'url('+ songData.path +')', animationPlayState: animation}" >
				<div class="play-center"></div>
			</div>
			<!-- 歌词 -->	
			<div class="song-wrap">
				<div class="song-box">
					<p  v-for="(item,line) of content"  :data-line=line>
						{{item}}
					</p>
				</div>
			</div>
		</div>
		
		<!-- 音乐播放器 -->
		<audio>
			<source :src=songData.song>
		</audio>
		<!-- 控制条 -->
		<div class="control-box">
			<div class="control-bar">
				<div class="startTime">
					<i class="startMinute">{{startMinute.m}}</i>:<i class="startSecond">{{startSecond.s}}</i>
				</div>
				<div class="endTime">
					<i class="endMinute">{{endMinutes}}</i>:<i class="endSecond">{{endSeconds}}</i>
				</div>
				<div class="progress">
					<div class="currentPro" :style="{width: pWidth}"></div>
				</div>
			</div>
		</div>

		<!-- 模式切换 -->
		<div id="modes" if-show="change">
			<p>以切换到{{modes}}</p>
		</div>
	</div>
</template>
<script>
	import MusicController from '../components/MusicController.vue'
	import MusicPlayway from '../components/MusicPlayway.vue'
	import { Bus } from '../bus.js'
	import { initSong , timeMaker} from '../common/util.js'

	export default {
		data(){
			return {
				songData: {
					path:"src/assets/hotsongs11.jpg",
					songName:"安河桥",
					singer:"宇西",
					song: 'src/music/anheqiao.mp3',
					songTime:  ["[00:00.79]", "[00:02.84]", "[00:04.50]", "[00:06.43]", "[00:37.85]", "[00:40.13]", "[00:42.31]", "[00:44.34]", "[00:49.85]", "[00:52.64]", "[00:54.94]", "[00:56.80]", "[00:59.11]", "[01:01.37]", "[01:02.17]", "[01:04.23]", "[01:06.50]", "[01:10.13]", "[01:13.83]", "[01:19.67]", "[01:21.22]", "[01:24.16]", "[01:28.60]", "[01:31.85]", "[01:33.69]", "[01:36.91]", "[01:39.20]", "[01:41.10]", "[01:43.63]", "[01:46.57]", "[01:48.85]", "[01:51.69]", "[01:54.01]", "[01:56.17]", "[01:58.12]", "[01:59.55]", "[02:00.91]", "[02:03.32]", "[02:35.07]", "[02:38.79]", "[02:42.47]", "[02:48.34]", "[02:49.83]", "[02:52.78]", "[02:57.21]", "[02:59.94]", "[03:00.49]", "[03:02.21]", "[03:04.61]", "[03:08.33]", "[03:11.98]", "[03:17.95]", "[03:19.38]", "[03:23.05]", "[03:26.75]", "[03:29.03]", "[03:30.45]"],
					songContent: ["安和桥 - 宇西", "词：宋冬野", "曲：宋冬野", "", "让我再看你一遍", "从南到北", "", "像是被五环路蒙住的双眼", "", "请你再讲一遍", "关于那天", "", "抱着盒子的姑娘", "", "和擦汗的男人", "", "我知道 那些夏天", "就像青春一样回不来", "代替梦想的也只能是勉为其难", "", "我知道 吹过的牛逼", "也会随青春一笑了之", "让我困在城市里", "纪念你", "", "让我再尝一口", "秋天的酒", "", "一直往南方开", "不会太久", "", "让我再听一遍", "最美的那一句", "", "你回家了", "", "我在等你呢", "", "我知道 那些夏天", "就像青春一样回不来", "代替梦想的也只能是勉为其难", "", "我知道 吹过的牛逼", "也会随青春一笑了之", "让我困在城市里", "", "纪念你", "", "我知道 那些夏天", "就像你一样回不来", "我也不会再对谁满怀期待", "", "我知道 这个世界", "每天都有太多遗憾", "所以你好", "", "再见"]
				},
				isPlay: 'paused',
				mode: 'order',
				change: false,
				startMinute: {m: '00'},
				startSecond: {s: '00'},
				endMinute: '00',
				endSecond: '00',
				pWidth: '0%',
				nextSong: false,
				animation: '',
				start: -1,
				indexBox: []
			}
		},
		mounted(){
			this.$el.querySelector('.play-rotate').animationPlayState = this.isPlay;
			Bus.$on('playMode',(data)=>{
				if(this.mode !== data){
					var _this = this,
					target = $('#modes');
					_this.change = true;

					target.animate({
						'top': '0',
						'opacity': '1'
					},500,()=>{
						target.delay(500).animate({
							'top': '-200px',
							'opacity': '0'
						},500,()=>{
							_this.change = false;
							// console.log('动画结束')
						})
					})
				}
				this.mode = data;
			})
		},
		computed:{
			modes(){
				switch(this.mode){
					case 'order':
						return '顺序播放';
						break;
					case 'random':
						return '随机播放';
						break;
					case 'loop':
						return '列表循环';
						break;
					case 'single-play':
						return '单曲循环';
						break;
				}
			},
			endMinutes(){
				let time = this.songData.songTime;
				return time[time.length - 1].match(/\[(\d+)\:/)[1];
			},
			endSeconds(){
				let time = this.songData.songTime;
				return Math.round(time[time.length - 1].match(/\:(\S+)\]/)[1]);
			},
			content(){
				let data = this.songData;
				 data.songContent.filter((val,index,item)=> {
				 	if(val === ''){
				 		item.splice(index,1);
				 		this.indexBox.push(index);
				 	}
				 } );
				 return data.songContent;
			},
			formatTime(){
				let data = this.songData;
				for(let key of this.indexBox.reverse())
					data.songTime.splice(key, 1)
				return data.songTime;
			}
		},
		watch: {
			mode(newVal){
				console.log('模式以改变'+newVal)
			},
			nextSong(){
				console.log('切歌')
			}
		}
		,
		methods: {
			receiveData(data){
				// 切歌
				this.songData = data[0];
				// ?????数据更新，视图没有更新????
				this.pWidth = '0%';
				this.nextSong = data[1];
				console.log(this.pWidth)
				// 中间部分
				this.animation = 'paused';
				$('.play-rotate').css({
					// 'animationPlayState': 'paused',
				})
				$('audio').remove();
				$('body').append($('<audio><source src="' + data.song + '"></audio>'))
				var box = this.$el.parentNode.parentNode.parentNode;
				let audio = document.querySelector('audio');
				audio.pause();
			},

			playSong(data){
				let	audio = document.querySelector('audio');

				// 监听歌曲进度
				var _this = this;

				_this.nextSong = true;
				audio.ontimeupdate = function(){
					var current = Math.round(audio.currentTime),
						currentM = parseInt(current / 60),
						currentS = current % 60;
					_this.pWidth = current / (this.duration) * 100 + '%';
					_this.startMinute.m = currentM >= 10 ? currentM : '0' + currentM;
					_this.startSecond.s = currentS >= 10 ? currentS : '0' + currentS;

					/*
					当current === timemaker 时，设置isOn为true

					*/

					// console.log(_this.formatTime)
					_this.formatTime.forEach( (val, index) => {

						// console.log(timeMaker(val))
							// 设置当前歌词样式 0,1,2
							if(current == timeMaker(val)){
								console.log(`当前时间为当前${current},data-line为${index}`)
								$('p[data-line = '+ index +']').addClass('on').siblings().removeClass('on');
							}


					})
				}
				if(data){
					this.isPlay = 'running';
					audio.play();
				}else{
					this.isPlay = 'paused';
					audio.pause()
				}	

				document.querySelector('.play-rotate').style.animationPlayState = this.isPlay;
			}
		},
		components: {
			MusicController,
			MusicPlayway
		}
	}
</script>
<style lang="sass" scoped>
@import '../common/common.scss';

#music-play {
	.bg-box{
		position: fixed;
		left: 0;
		top: 0;
		height: 100%; 
		.blur {	
			height: 100%;
		    -webkit-filter: blur(20px); /* Chrome, Opera */
		       -moz-filter: blur(20px);
		        -ms-filter: blur(20px);    
		            filter: blur(20px);
				 filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=10, MakeShadow=false); /* IE6~IE9 */
		}
	}
	.head{
		position: relative;
		height: rem(280);
		width:100%;
		background: rgba(0,0,0,.2);
		padding: rem(20);
		.singer-box{
			position: relative;
			img{
				width: rem(220);
				height: rem(220);
				float: left;
				margin-top: rem(10);
			}
			.song-menu{
				position: absolute;
				top: 50px;
				left: 0;
				width: 20px;
				height: 20px;
				background: url(../assets/sprite_play.png) 0px -460px;
				background-size: 80%;
			}
		}
		
		.head-info{
			position: relative;
			float: left;
			color: #fff;
			padding-left: rem(10);
			h2{
				@include font-dpr2(36px);
				margin-top: rem(60);
				font-weight: 400;
			}
			p{
				@include font-dpr2(30px);
				white-space: nowrap;
			}
		}
	}
	#modes{
		position: absolute;
		left: 0;
		top: -200px;
		width: 100%;
		height: rem(100);
		background: #31c27c;
		line-height: rem(100);
		text-align:center;
		opacity: 0;
		overflow: hidden;
		p{
			color: #fff;
			@include font-dpr2(30px);
			letter-spacing: rem(5);
		}
	}
}
/*.animated{
	-webkit-animation-duration:1s;
			animation-duration:1s;
	-webkit-animation-fill-mode:both;
			animation-fill-mode:both;
}
.moveIn{
	-webkit-animation-name: moveIn;
}
@-webkit-keyframes moveIn
{
	0%{
		transform: translateY(-100%);
		opacity: 0;
	}
	30%{
		transform: translateY(0);
		opacity: 1;
	}
	70%{
		transform: translateY(0);
		opacity: 1;
	}
	100%{
		transform: translateY(-100%);
		opacity: 0;
	}
} 
*/

@keyframes Rotate
{
	0%{
		-webkit-transform: rotate(0deg);
	}
	100%{
		-webkit-transform: rotate(360deg);
	}
}
.play-content{
		position: relative;
		margin: 10px auto; 
		width: 90%;
		height: rem(600);
		text-align: center;
		padding-top: rem(100);
		.play-rotate{
			position: relative;
			display: inline-block;
			width: rem(350);
			height: rem(350);
			top: rem(10);
			border: 1px solid #f4f4f4;
			border-radius: 50%;
			box-shadow: 0px 0px 2px 2px rgba(255,0,0,0.5);
			background: url(../assets/hotsongs11.jpg) no-repeat;
			background-size: cover;
			-webkit-transform: rotateY(0deg);

			animation: Rotate 10s linear infinite;
			-webkit-animation-play-state: paused;
			.play-center{
				position: absolute;
				z-index: 10;
				width: rem(100);
				height: rem(100);
				top: 50%;
				left: 50%;
				border-radius: 50%;
				transform: translate(-50%,-50%);
				background: radial-gradient(circle,
				rgba(0,0,0,.6) 10%, rgba(0,0,0,.9) 40%, rgba(0,0,0,.7) 80%);
			}
		}
		.song-wrap{
			width: 100%;
			height: rem(400);
			text-align: center;
			.song-box{
				height: 100%;
				/*overflow: hidden;*/
				/*padding-top: rem(50);*/
				p{
					&:first-child{
						margin-top:rem(50);
					};
					color: #fff;
					line-height:1.5;
					@include font-dpr2(30px);
					&.on{
						color: #31c27c
					}
				}
			}
		}
	}
.current{
	color: #31c27c;
}	
.old{
	color: #ccc;
}
//播放控制条
.control-box{
	position: fixed;
	bottom: rem(40);
	left: 0;
	width: 100%;
	height: rem(100);
	.control-bar{
		position: relative;
		width: 60%;
		margin: rem(20) auto;
		height: rem(10);
		padding-top: rem(28);
		.progress{
			position: relative;
			width: 100%;
			height: 0;
			border: rem(5) solid #ccc;
			.currentPro{
				position: absolute;
				top: rem(-4);
				left: -1px;
				height: rem(10);
				background: #31c27c;
				z-index: 2;
			}
		}
		%slide{
			position: absolute;
			top: 0px;
			height: 100%;
			width: rem(20);
			line-height: 60px;
			text-align: center;
			color: #f8f8f8;
		}
		.startTime{
			@extend %slide;
			left: rem(-80);
			@include font-dpr2(28px);
		};
		.endTime{
			@extend %slide;
			right: rem(-30);
			@include font-dpr2(28px);
		};
	}
}
</style>
