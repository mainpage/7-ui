import Vue from 'vue';
import entry from './app.vue';
import VueRouter from 'vue-router';
import configRouter from './route.config';
import demoBlock from './components/demo-block.vue';
import MainFooter from './components/footer.vue';
import MainHeader from './components/header.vue';
import SideNav from './components/side-nav.vue';
import FooterNav from './components/footer-nav';
import sfButton from 'sf-button';


Vue.use(VueRouter);

Vue.component('sf-button', sfButton);


Vue.component('demo-block', demoBlock);
Vue.component('main-footer', MainFooter);
Vue.component('main-header', MainHeader);
Vue.component('side-nav', SideNav);
Vue.component('footer-nav', FooterNav);

const router = new VueRouter({
	mode: 'hash',
	base: __dirname,
	routes: configRouter
});

new Vue({ // eslint-disable-line
	render: h => h(entry),
	router
}).$mount('#app');
