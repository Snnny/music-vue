<template>
	<div id="load">
		<div class="load">
			<div class="load-item">
				<i class="animation"></i>
				<i class="animation"></i>加
				<i class="animation"></i>载
				<i class="animation"></i>中
				<i class="animation"></i>…
				<i class="animation"></i>
				<i class="animation"></i>
			</div>
		</div>
	</div>
	
</template>
<style lang="sass" scoped>
$q_green:#31c27c;

@-webkit-keyframes loading
{
	0%{transform: scaleY(1)}
	50%{transform: scaleY(0.4)}
	100%{transform: scaleY(1)}
}
#load{
	position: relative;
	width: 100%;
	height: 20px;
	text-align: center;
	z-index: 2;
	overflow: hidden;
	.load{
		.load-item {
			line-height: 25px;
			height: 20px;
			color: $q_green;
			i{
				display: inline-block;
				width: 3px;
				height: 20px;
				margin-right: 8px;
				background-color: $q_green;
				border-radius: 1px;
				vertical-align: middle;
				&:nth-child(1){
					 -webkit-animation:loading 1s ease-in 0.1s infinite
				};
				&:nth-child(2){
					  -webkit-animation:loading 1s ease-in 0.2s infinite
				};
				&:nth-child(3){
					 -webkit-animation: loading 1s ease-in 0.3s infinite
				};
				&:nth-child(4){
					-webkit-animation: loading 1s ease-in 0.4s infinite
				};
				&:nth-child(5){
					 -webkit-animation: loading 1s ease-in 0.5s infinite
				};
				&:nth-child(6){
					  -webkit-animation:loading 1s ease-in 0.6s infinite
				};
				&:nth-child(7){
					  -webkit-animation:loading 1s ease-in 0.7s infinite
				};
			}		
		}
	}
	.loaded{
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 20px;
		background: #f8f8f8;
		color: $q_green;
	}
}
</style>