// import something here
import VueMqtt from 'vue-mqtt'

// "async" is optional
export default ({ Vue }) => {
  Vue.use(VueMqtt, 'ws://192.168.100.7:8083/mqtt')
}
