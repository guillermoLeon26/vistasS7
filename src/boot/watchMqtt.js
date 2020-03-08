// import something here
import { Loading } from 'quasar'

// "async" is optional
export default ({ Vue }) => {
  Vue.prototype.$mqtt.on('offline', () => {
    Loading.show({
      message: '<span class="text-white" style="font-weight: bold;">Servidor de comunicación fuera de red...</span>'
    })
  })

  Vue.prototype.$mqtt.on('connect', () => {
    Loading.hide()
  })
}
