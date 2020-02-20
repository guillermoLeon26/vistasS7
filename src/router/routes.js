
const routes = [
  {
    path: '/',
    component: () => import('layouts/PrincipalLayout.vue'),
    children: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: () => import('pages/Home.vue') },
      { path: '/mov-hidraulico', component: () => import('pages/MovimientoHidraulico.vue') },
      { path: '/cnt-hidraulico', component: () => import('pages/CentralHidraulica.vue') },
      { path: '/transductores', component: () => import('pages/Transductores.vue') },
      { path: '/alarmas', component: () => import('pages/Alarmas.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
