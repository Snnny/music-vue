<template>
	<div id="songDesc">
		<figure>
			<img src="<%= items[i].path%>" alt="">
			<figcaption>
				<slot name="listen"></slot>
				<p><%= items[i].desc%></p>
				<slot name="song-desc"></slot>
			</figcaption>
		</figure>
	</div>
</template>

<style lang="sass" scoped>

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
		right: 15px;
		bottom:55px;
		width: 30px;
		height: 30px;
		background-image:url(../assets/list_sprite.png);
		background-size: cover;
	};
	img{
		width: 95%;
		margin: 5px auto;
	}
	span{
		position: absolute;
		left: 15px;
		bottom: 45px;
		width: 75px;
		height: 10px;
		color: #fff;
		line-height: 10px;
		i{
			position: absolute;
			height: 100%;
			width: 15px;
			left: 0;
			bottom: 0;
			background-image: url(../assets/list_sprite.png);
			background-repeat: no-repeat;
			background-size: 24px 60px;
			background-position: 0 -50px;
		}
	}
	figcaption {
		position: relative;
		em{
			position: absolute;
			left: 5px;
			top: 20px;
		}
		p{
		font-size: 14px;
		padding-left: 5px;
		text-align: left;
		margin: 3px 0 20px;
		}
	}
}
</style>