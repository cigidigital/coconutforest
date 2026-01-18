export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".gitkeep","images/about.jpg","images/about.svg","images/areng.jpg","images/areng.png","images/bg-home2.png","images/bg-home3.jpg","images/charcoal.png","images/charcoal2.png","images/client-coconutforest.png","images/cocofiber.jpg","images/cofo.png","images/copra.jpg","images/copraa.png","images/fani.png","images/favicon.png","images/logo2.png","images/logormbg.png","images/object1.png","images/pattern-inner.png","images/pattern.png","images/profile.png","images/quote-icon1.svg","images/quote-icon2.svg","images/rizki.png","images/semihusked.jpg","images/semihusked.png","images/serabut2.png","images/yulio.png"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.BHm-8xk3.js",app:"_app/immutable/entry/app.YMdTxydR.js",imports:["_app/immutable/entry/start.BHm-8xk3.js","_app/immutable/chunks/BrZsozuS.js","_app/immutable/chunks/DhJzkRnP.js","_app/immutable/entry/app.YMdTxydR.js","_app/immutable/chunks/DhJzkRnP.js","_app/immutable/chunks/D8JvDDAL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
