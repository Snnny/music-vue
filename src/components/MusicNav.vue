<template>
	<div id="nav">
		<ul class="nav-list clearfix">
			<router-link tag="li" to="/topics/home" class='current'><p>推荐</p></router-link>
            <router-link tag="li" to="/topics/ranking"><p>排行榜</p></router-link>
            <router-link tag="li" to="/topics/search"><p>搜索</p></router-link>
		</ul>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script></script>
<style lang="sass" scoped>

@import '../common/common.scss';

$q_green:#31c27c;
#nav{
	width: 100%;
	ul{
		li{
			float: left;
			width: (100% / 3);
			height: rem(100);
			text-align: center;
			line-height: rem(100);
			p{
				@include font-dpr2(36px);
			}
			
			&.router-link-active{
				border-bottom: rem(5) solid $q_green;
				p{
					color: $q_green;
				}
			}
		}
	}
}	
</style>