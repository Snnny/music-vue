<template>
	<div id="play-method" :class = classNameList[index] @click="changeMode">
	</div>
</template>
<script>
	import {Bus} from '../bus.js'
	export default{
		data(){
			return {
				classNameList:['order','random','loop','single-play'],
				index: 0
			}
		},
		methods: {
			changeMode(){
				this.index++;
				if(this.index === 4)
					this.index = 0;
				Bus.$emit('playMode',this.classNameList[this.index]);
			}
		}
	}
	
</script>
<style lang="sass" scoped>
@import '../common/common.scss';

#play-method{
		position: absolute;
		bottom: rem(10);
		right: rem(5);
		height: rem(36);
		padding: rem(20);
		width: rem(40);
		box-sizing: content-box;
		background-origin: content-box;
		background-clip: content-box;
		background-image: url(../assets/player.png);
		background-repeat: no-repeat;
		background-size: 500%;
		&.order{
			background-position:  rem(5) rem(-390);
		}
		&.random{
					background-position:  0px rem(-109);
		} 
		&.loop{
			background-position:  rem(2) rem(-310);
		}
		&.single-play{
			background-position:  rem(2) rem(-350);
		}  
}
</style>