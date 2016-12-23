import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter);

import MusicHome from '../views/MusicHome.vue'
import MusicRank from '../views/MusicRank.vue'
import MusicSearch from '../views/MusicSearch.vue'
import MusicPlay from '../views/MusicPlay.vue'
import MusicHeader from '../components/MusicHeader.vue'
import MusicNav from '../components/MusicNav.vue'

function fullRouter(){
	console.log('确定要跳转吗')
}

export default new VueRouter({
	// mode: 'history',
	routes: [

			{  path: '/topics/home', 
				components: {
				head: MusicHeader,
				nav: MusicNav,
				default: MusicHome
			}
			},
			{	 path: '/topics/ranking', 
				components: {
				head: MusicHeader,
				nav: MusicNav,
				default: MusicRank
			}
			},
			{	 path: '/topics/search', 
				components: {
				head: MusicHeader,
				nav: MusicNav,
				default: MusicSearch
			}
			},
			{	path: '../play', 
				components: {
					play: MusicPlay
				}
			},
			{	path: '/', 
				redirect: '/topics/home'
			},
			{
				path: '/play',
				component: MusicPlay
			}

	]

})