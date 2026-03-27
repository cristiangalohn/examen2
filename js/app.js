// Dom7
var $$ = Dom7;
// Init App
var app = new Framework7({
	id: 'com.app',
	root: '#app',
	theme: 'md',
	view: {
		pushState: true
	},
	cache: false,
	cacheDuration: 0,
	modalTitle: 'Order',
	panel: {
		swipe: true,
	},
	routes: [
		{
			path: '/home/',
			url: 'index.html',
			name: 'home',
		},
		{
			path: '/categories/',
			url: 'categories.html',
			name: 'categories',
		},
		{
			path: '/favorite/',
			url: 'categories.html',
		},
		{
			path: '/myorders/',
			url: 'categories.html',
		},
		{
			path: '/hamburger/',
			url: 'categories.html',
		},
		{
			path: '/pizzas/',
			url: 'categories.html',
		},
		{
			path: '/donuts/',
			url: 'categories.html',
		},
		{
			path: '/tienda/',
			url: 'categories.html',
		},
		{
			path: '/notificaciones/',
			url: 'categories.html',
		},
		{
			path: '/perfil/',
			url: 'categories.html',
		},

	],
	popup: {
		closeOnEscape: true,
		backdrop: false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



