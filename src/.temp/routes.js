const c1 = () => import(/* webpackChunkName: "page--src--pages--recipes-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/src/pages/Recipes.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--photos-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/src/pages/Photos.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/buubbly/Documents/Developpement/adoseri/adoseri/src/pages/Index.vue")

export default [
  {
    path: "/recipes/",
    component: c1
  },
  {
    path: "/photos/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
