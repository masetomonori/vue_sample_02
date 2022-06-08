<template>
  <div>
    <header-component></header-component>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent'

export default {
  components: {
    'header-component':HeaderComponent,
  }
}
</script>
