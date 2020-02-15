<template>
  <q-page>
    <div class="q-pa-xs">
      <div class="column items-center">
        <div class="col">
          <bombas
            :bomba1="comMqtt.bomba1"
            :bomba2="comMqtt.bomba2"
            :bomba3="comMqtt.bomba3"
            :bomba4="comMqtt.bomba4"
            :fallaBomba1="comMqtt.fallaBomba1"
            :fallaBomba2="comMqtt.fallaBomba2"
            :S1A="comMqtt.S1A"
            :S1B="comMqtt.S1B"
            :presionAcumulador="comMqtt.presionAcumulador"
            :presionLinea="comMqtt.presionLinea"
          />
        </div>

        <div class="col">
          <q-table
            id="tabla1"
            :columns="columnas"
            :data="datos"
            flat
            bordered
            color="primary"
            card-class="bg-light-blue-2"
            hide-bottom
          >

            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                  class="text-blue"
                >
                  <div class="text-h6">
                    {{ col.label }}
                  </div>
                </q-th>
              </q-tr>
            </template>
          </q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import bombas from '../components/Bombas'

export default {
  name: 'CentralHidraulica',

  components: {
    bombas
  },

  data: () => ({
    columnas: [
      { name: 'variables', field: 'variables', label: '', align: 'left' },
      { name: 'bomba1', field: 'bomba1', label: 'M 1', align: 'center' },
      { name: 'bomba2', field: 'bomba2', label: 'M 2', align: 'center' },
      { name: 'bomba3', field: 'bomba3', label: 'M 3', align: 'center' },
      { name: 'bomba4', field: 'bomba4', label: 'M 4', align: 'center' }
    ],

    datos: [
      { variables: 'Pr', bomba1: 20, bomba2: 20, bomba3: 20, bomba4: 20 },
      { variables: 'Cil', bomba1: 20, bomba2: 20, bomba3: 20, bomba4: 20 },
      { variables: 'Pot', bomba1: 20, bomba2: 20, bomba3: 20, bomba4: 20 },
      { variables: '[Bar]', bomba1: 20, bomba2: 20, bomba3: 20, bomba4: 20 },
      { variables: '[CC]', bomba1: 20, bomba2: 20, bomba3: 20, bomba4: 20 }
    ],

    comMqtt: {
      bomba1: false,
      bomba2: false,
      bomba3: false,
      bomba4: false,
      fallaBomba1: false,
      fallaBomba2: false,
      S1A: false,
      S1B: false,
      presionAcumulador: 0.00,
      presionLinea: 0.00
    }
  }),

  mqtt: {
    'Entrada_1' (data) {
      // console.log(JSON.parse(data.toString()))
      this.comMqtt.bomba1 = JSON.parse(data.toString()) === 1
    },

    'Entrada_2' (data) {
      this.comMqtt.bomba2 = JSON.parse(data.toString()) === 1
    },

    'Entrada_3' (data) {
      this.comMqtt.bomba3 = JSON.parse(data.toString()) === 1
    },

    'Entrada_4' (data) {
      this.comMqtt.bomba4 = JSON.parse(data.toString()) === 1
    },

    'Entrada_5' (data) {
      this.comMqtt.fallaBomba1 = JSON.parse(data.toString()) === 1
    },

    'Entrada_6' (data) {
      this.comMqtt.fallaBomba2 = JSON.parse(data.toString()) === 1
    },

    'Salida_1' (data) {
      this.comMqtt.S1A = JSON.parse(data.toString()) === 1
    },

    'Salida_2' (data) {
      this.comMqtt.S1B = JSON.parse(data.toString()) === 1
    },

    'presion' (data) {
      this.comMqtt.presionAcumulador = JSON.parse(data.toString())
    },

    'nivelMw' (data) {
      this.comMqtt.presionLinea = JSON.parse(data.toString())
    }
  },

  mounted () {
    console.log('montado')
    this.$mqtt.subscribe('presion')
    this.$mqtt.subscribe('nivelMw')

    this.$mqtt.subscribe('Marca_1')
    this.$mqtt.subscribe('Marca_2')
    this.$mqtt.subscribe('Marca_3')
    this.$mqtt.subscribe('Marca_4')
    this.$mqtt.subscribe('Marca_5')
    this.$mqtt.subscribe('Marca_6')

    this.$mqtt.subscribe('Salida_1')
    this.$mqtt.subscribe('Salida_2')
    this.$mqtt.subscribe('Salida_3')
    this.$mqtt.subscribe('Salida_4')

    this.$mqtt.subscribe('Entrada_1')
    this.$mqtt.subscribe('Entrada_2')
    this.$mqtt.subscribe('Entrada_3')
    this.$mqtt.subscribe('Entrada_4')
    this.$mqtt.subscribe('Entrada_5')
    this.$mqtt.subscribe('Entrada_6')
  },

  destroyed () {
    console.log('destruido')
    this.$mqtt.unsubscribe('presion')
    this.$mqtt.unsubscribe('nivelMw')

    this.$mqtt.unsubscribe('Marca_1')
    this.$mqtt.unsubscribe('Marca_2')
    this.$mqtt.unsubscribe('Marca_3')
    this.$mqtt.unsubscribe('Marca_4')
    this.$mqtt.unsubscribe('Marca_5')
    this.$mqtt.unsubscribe('Marca_6')

    this.$mqtt.unsubscribe('Salida_1')
    this.$mqtt.unsubscribe('Salida_2')
    this.$mqtt.unsubscribe('Salida_3')
    this.$mqtt.unsubscribe('Salida_4')

    this.$mqtt.unsubscribe('Entrada_1')
    this.$mqtt.unsubscribe('Entrada_2')
    this.$mqtt.unsubscribe('Entrada_3')
    this.$mqtt.unsubscribe('Entrada_4')
    this.$mqtt.unsubscribe('Entrada_5')
    this.$mqtt.unsubscribe('Entrada_6')
  }
}
</script>

<style lang="stylus" scoped>
  #tabla1{
    width: 900px
  }
</style>
