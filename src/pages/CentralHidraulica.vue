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
            :fallaBomba3="comMqtt.fallaBomba3"
            :fallaBomba4="comMqtt.fallaBomba4"
            :s1A="comMqtt.s1A"
            :s1B="comMqtt.s1B"
            :s3A="comMqtt.s3A"
            :s3B="comMqtt.s3B"
            :s5A="comMqtt.s5A"
            :s5B="comMqtt.s5B"
            :s7A="comMqtt.s7A"
            :s7B="comMqtt.s7B"
            :presionLinea="comMqtt.presionLinea"
            :presionAcumulador="comMqtt.presionAcumulador"
            :temperaturaAceite="comMqtt.temperaturaAceite"
            :horasTrabajo="comMqtt.horasTrabajo"
            :longitudCorte="comMqtt.longitudCorte"
          />
        </div>

        <div class="col">
          <q-table
            id="tabla1"
            :columns="columnas"
            :data="dataTabla"
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
      { name: 'bomba1', field: 'bomba1', label: 'VALVULA PROPORC. MB1', align: 'center' },
      { name: 'bomba2', field: 'bomba2', label: 'VALVULA PROPORC. MB2', align: 'center' },
      { name: 'bomba3', field: 'bomba3', label: 'VALVULA PROPORC. MB3', align: 'center' },
      { name: 'bomba4', field: 'bomba4', label: 'VALVULA PROPORC. MB4', align: 'center' }
    ],

    datos: [
      { variables: 'Comando Presión', bomba1: 10, bomba2: 10, bomba3: 10, bomba4: 10 },
      { variables: 'Comando Flujo', bomba1: 20, bomba2: 20, bomba3: 20, bomba4: 20 },
      { variables: 'Comando Potencia', bomba1: 30, bomba2: 30, bomba3: 30, bomba4: 30 },
      { variables: 'Presión [Bar]', bomba1: 40, bomba2: 40, bomba3: 40, bomba4: 40 },
      { variables: 'Flujo [CC]', bomba1: 50, bomba2: 50, bomba3: 50, bomba4: 50 }
    ],

    comMqtt: {
      bomba1: true,
      bomba2: false,
      bomba3: false,
      bomba4: false,
      fallaBomba1: true,
      fallaBomba2: false,
      fallaBomba3: false,
      fallaBomba4: false,
      s1A: true,
      s1B: false,
      s3A: false,
      s3B: false,
      s5A: false,
      s5B: false,
      s7A: false,
      s7B: false,
      presionLinea: 10.00,
      presionAcumulador: 20.00,
      temperaturaAceite: 30.00,
      horasTrabajo: 40.00,
      longitudCorte: 500.00,

      comandoPMb1: 50.00,
      comandoPMb2: 60.00,
      comandoPMb3: 70.00,
      comandoPMb4: 80.00,

      comandoFMb1: 90.00,
      comandoFMb2: 100.00,
      comandoFMb3: 110.00,
      comandoFMb4: 120.00,

      comandoPotMB1: 130.00,
      comandoPotMB2: 140.00,
      comandoPotMB3: 150.00,
      comandoPotMB4: 160.00,

      presioMB1: 170.00,
      presioMB2: 180.00,
      presioMB3: 190.00,
      presioMB4: 200.00,

      flujoMB1: 210.00,
      flujoMB2: 220.00,
      flujoMB3: 230.00,
      flujoMB4: 240.00
    }
  }),

  computed: {
    dataTabla () {
      return [
        { variables: 'Comando Presión', bomba1: this.comMqtt.comandoPMb1, bomba2: this.comMqtt.comandoPMb2, bomba3: this.comMqtt.comandoPMb3, bomba4: this.comMqtt.comandoPMb4 },
        { variables: 'Comando Flujo', bomba1: this.comMqtt.comandoFMb1, bomba2: this.comMqtt.comandoFMb2, bomba3: this.comMqtt.comandoFMb3, bomba4: this.comMqtt.comandoFMb4 },
        { variables: 'Comando Potencia', bomba1: this.comMqtt.comandoPotMB1, bomba2: this.comMqtt.comandoPotMB2, bomba3: this.comMqtt.comandoPotMB3, bomba4: this.comMqtt.comandoPotMB4 },
        { variables: 'Presión [Bar]', bomba1: this.comMqtt.presioMB1, bomba2: this.comMqtt.presioMB2, bomba3: this.comMqtt.presioMB3, bomba4: this.comMqtt.presioMB4 },
        { variables: 'Flujo [CC]', bomba1: this.comMqtt.flujoMB1, bomba2: this.comMqtt.flujoMB2, bomba3: this.comMqtt.flujoMB3, bomba4: this.comMqtt.flujoMB4 }
      ]
    }
  },

  mqtt: {
    'motorBomba1On' (data) {
      // console.log(JSON.parse(data.toString()))
      this.comMqtt.bomba1 = JSON.parse(data.toString()) === 1
    },

    'motorBomba2On' (data) {
      this.comMqtt.bomba2 = JSON.parse(data.toString()) === 1
    },

    'motorBomba3On' (data) {
      this.comMqtt.bomba3 = JSON.parse(data.toString()) === 1
    },

    'motorBomba4On' (data) {
      this.comMqtt.bomba4 = JSON.parse(data.toString()) === 1
    },

    'motorBomba1Falla' (data) {
      this.comMqtt.fallaBomba1 = JSON.parse(data.toString()) === 1
    },

    'motorBomba2Falla' (data) {
      this.comMqtt.fallaBomba2 = JSON.parse(data.toString()) === 1
    },

    'motorBomba3Falla' (data) {
      this.comMqtt.fallaBomba3 = JSON.parse(data.toString()) === 1
    },

    'motorBomba4Falla' (data) {
      this.comMqtt.fallaBomba4 = JSON.parse(data.toString()) === 1
    },
    'selenoideS1A' (data) {
      this.comMqtt.s1A = JSON.parse(data.toString()) === 1
    },
    'selenoideS1B' (data) {
      this.comMqtt.s1B = JSON.parse(data.toString()) === 1
    },
    'selenoideS3A' (data) {
      this.comMqtt.s3A = JSON.parse(data.toString()) === 1
    },
    'selenoideS3B' (data) {
      this.comMqtt.s3B = JSON.parse(data.toString()) === 1
    },
    'selenoideS5A' (data) {
      this.comMqtt.s5A = JSON.parse(data.toString()) === 1
    },
    'selenoideS5B' (data) {
      this.comMqtt.s5B = JSON.parse(data.toString()) === 1
    },
    'selenoideS7A' (data) {
      this.comMqtt.s7A = JSON.parse(data.toString()) === 1
    },
    'selenoideS7B' (data) {
      this.comMqtt.s7B = JSON.parse(data.toString()) === 1
    },

    'presionLinea' (data) {
      this.comMqtt.presionLinea = JSON.parse(data.toString())
    },

    'presionAcumulador' (data) {
      this.comMqtt.presionAcumulador = JSON.parse(data.toString())
    },
    'temperaturaAceite' (data) {
      this.comMqtt.temperaturaAceite = JSON.parse(data.toString())
    },
    'horasTrabajo' (data) {
      this.comMqtt.horasTrabajo = JSON.parse(data.toString())
    },
    'posicionPortelon' (data) {
      this.comMqtt.longitudCorte = JSON.parse(data.toString())
    },
    'comandoPresionMb1' (data) {
      this.comMqtt.comandoPMb1 = JSON.parse(data.toString())
    },
    'comandoPresionMb2' (data) {
      this.comMqtt.comandoPMb2 = JSON.parse(data.toString())
    },
    'comandoPresionMb3' (data) {
      this.comMqtt.comandoPMb3 = JSON.parse(data.toString())
    },
    'comandoPresionMb4' (data) {
      this.comMqtt.comandoPMb4 = JSON.parse(data.toString())
    },
    'comandoFlujoMb1' (data) {
      this.comMqtt.comandoFMb1 = JSON.parse(data.toString())
    },
    'comandoFlujoMb2' (data) {
      this.comMqtt.comandoFMb2 = JSON.parse(data.toString())
    },
    'comandoFlujoMb3' (data) {
      this.comMqtt.comandoFMb3 = JSON.parse(data.toString())
    },
    'comandoFlujoMb4' (data) {
      this.comMqtt.comandoFMb4 = JSON.parse(data.toString())
    },
    'comandoPotenciaMb1' (data) {
      this.comMqtt.comandoPotMB1 = JSON.parse(data.toString())
    },
    'comandoPotenciaMb2' (data) {
      this.comMqtt.comandoPotMB2 = JSON.parse(data.toString())
    },
    'comandoPotenciaMb3' (data) {
      this.comMqtt.comandoPotMB3 = JSON.parse(data.toString())
    },
    'comandoPotenciaMb4' (data) {
      this.comMqtt.comandoPotMB4 = JSON.parse(data.toString())
    },
    'presionMb1' (data) {
      this.comMqtt.presioMB1 = JSON.parse(data.toString())
    },
    'presionMb2' (data) {
      this.comMqtt.presioMB2 = JSON.parse(data.toString())
    },
    'presionMb3' (data) {
      this.comMqtt.presioMB3 = JSON.parse(data.toString())
    },
    'presionMb4' (data) {
      this.comMqtt.presioMB4 = JSON.parse(data.toString())
    },
    'flujoMb1' (data) {
      this.comMqtt.flujoMB1 = JSON.parse(data.toString())
    },
    'flujoMb2' (data) {
      this.comMqtt.flujoMB2 = JSON.parse(data.toString())
    },
    'flujoMb3' (data) {
      this.comMqtt.flujoMB3 = JSON.parse(data.toString())
    },
    'flujoMb4' (data) {
      this.comMqtt.flujoMB4 = JSON.parse(data.toString())
    }
  },

  mounted () {
    console.log('montado')
    this.$mqtt.subscribe('motorBomba1On')
    this.$mqtt.subscribe('motorBomba2On')
    this.$mqtt.subscribe('motorBomba3On')
    this.$mqtt.subscribe('motorBomba4On')
    this.$mqtt.subscribe('motorBomba1Falla')
    this.$mqtt.subscribe('motorBomba2Falla')
    this.$mqtt.subscribe('motorBomba3Falla')
    this.$mqtt.subscribe('motorBomba4Falla')
    this.$mqtt.subscribe('selenoideS1A')
    this.$mqtt.subscribe('selenoideS1B')
    this.$mqtt.subscribe('selenoideS3A')
    this.$mqtt.subscribe('selenoideS3B')
    this.$mqtt.subscribe('selenoideS5A')
    this.$mqtt.subscribe('selenoideS5B')
    this.$mqtt.subscribe('selenoideS7A')
    this.$mqtt.subscribe('selenoideS7B')
    this.$mqtt.subscribe('presionLinea')
    this.$mqtt.subscribe('presionAcumulador')
    this.$mqtt.subscribe('temperaturaAceite')
    this.$mqtt.subscribe('horasTrabajo')
    this.$mqtt.subscribe('posicionPortelon')
    this.$mqtt.subscribe('comandoPresionMb1')
    this.$mqtt.subscribe('comandoPresionMb2')
    this.$mqtt.subscribe('comandoPresionMb3')
    this.$mqtt.subscribe('comandoPresionMb4')
    this.$mqtt.subscribe('comandoFlujoMb1')
    this.$mqtt.subscribe('comandoFlujoMb2')
    this.$mqtt.subscribe('comandoFlujoMb3')
    this.$mqtt.subscribe('comandoFlujoMb4')
    this.$mqtt.subscribe('comandoPotenciaMb1')
    this.$mqtt.subscribe('comandoPotenciaMb2')
    this.$mqtt.subscribe('comandoPotenciaMb3')
    this.$mqtt.subscribe('comandoPotenciaMb4')
    this.$mqtt.subscribe('presionMb1')
    this.$mqtt.subscribe('presionMb2')
    this.$mqtt.subscribe('presionMb3')
    this.$mqtt.subscribe('presionMb4')
    this.$mqtt.subscribe('flujoMb1')
    this.$mqtt.subscribe('flujoMb2')
    this.$mqtt.subscribe('flujoMb3')
    this.$mqtt.subscribe('flujoMb4')
  },

  destroyed () {
    this.$mqtt.unsubscribe('motorBomba1On')
    this.$mqtt.unsubscribe('motorBomba2On')
    this.$mqtt.unsubscribe('motorBomba3On')
    this.$mqtt.unsubscribe('motorBomba4On')
    this.$mqtt.unsubscribe('motorBomba1Falla')
    this.$mqtt.unsubscribe('motorBomba2Falla')
    this.$mqtt.unsubscribe('motorBomba3Falla')
    this.$mqtt.unsubscribe('motorBomba4Falla')
    this.$mqtt.unsubscribe('selenoideS1A')
    this.$mqtt.unsubscribe('selenoideS1B')
    this.$mqtt.unsubscribe('selenoideS3A')
    this.$mqtt.unsubscribe('selenoideS3B')
    this.$mqtt.unsubscribe('selenoideS5A')
    this.$mqtt.unsubscribe('selenoideS5B')
    this.$mqtt.unsubscribe('selenoideS7A')
    this.$mqtt.unsubscribe('selenoideS7B')
    this.$mqtt.unsubscribe('presionLinea')
    this.$mqtt.unsubscribe('presionAcumulador')
    this.$mqtt.unsubscribe('temperaturaAceite')
    this.$mqtt.unsubscribe('horasTrabajo')
    this.$mqtt.unsubscribe('posicionPortelon')
    this.$mqtt.unsubscribe('comandoPresionMb1')
    this.$mqtt.unsubscribe('comandoPresionMb2')
    this.$mqtt.unsubscribe('comandoPresionMb3')
    this.$mqtt.unsubscribe('comandoPresionMb4')
    this.$mqtt.unsubscribe('comandoFlujoMb1')
    this.$mqtt.unsubscribe('comandoFlujoMb2')
    this.$mqtt.unsubscribe('comandoFlujoMb3')
    this.$mqtt.unsubscribe('comandoFlujoMb4')
    this.$mqtt.unsubscribe('comandoPotenciaMb1')
    this.$mqtt.unsubscribe('comandoPotenciaMb2')
    this.$mqtt.unsubscribe('comandoPotenciaMb3')
    this.$mqtt.unsubscribe('comandoPotenciaMb4')
    this.$mqtt.unsubscribe('presionMb1')
    this.$mqtt.unsubscribe('presionMb2')
    this.$mqtt.unsubscribe('presionMb3')
    this.$mqtt.unsubscribe('presionMb4')
    this.$mqtt.unsubscribe('flujoMb1')
    this.$mqtt.unsubscribe('flujoMb2')
    this.$mqtt.unsubscribe('flujoMb3')
    this.$mqtt.unsubscribe('flujoMb4')
  }
}
</script>

<style lang="stylus" scoped>
  #tabla1{
    width: 905px
  }
  .text-h6 {
    font-size: 0.835rem;
    font-weight: 600;
    line-height: 2rem;
    letter-spacing: 0.00125rem;
}

.text-blue {
    color: #24327f !important;
}
</style>
