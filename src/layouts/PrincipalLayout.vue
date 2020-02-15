<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar square>
            <img src="statics/Andec.png">
          </q-avatar>
          Procesador de chatarra Vezzani
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer :overlay="true" v-model="left" side="left" bordered>
      <q-list>
        <q-item-label header>Menu Principal</q-item-label>

        <q-item clickable :to="{ path: '/home' }">
          <q-item-section avatar>
            <q-icon name="fas fa-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable :to="{ path: '/cnt-hidraulico' }">
          <q-item-section avatar>
            <q-icon name="fas fa-industry" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Central Hidráulica</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable :to="{ path: '/mov-hidraulico' }">
          <q-item-section avatar>
            <q-icon name="fas fa-cogs" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Movimientos Hidráulicos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable :to="{ path: '/transductores' }">
          <q-item-section avatar>
            <q-icon name="fas fa-tools" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Transductores de Presión</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable :to="{ path: '/alarmas' }">
          <q-item-section avatar>
            <q-icon name="fas fa-bullhorn" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Alarmas</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false
    }
  }
}
</script>
