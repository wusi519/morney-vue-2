<template>
  <svg class="icon">
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">

  export default {
    props: ['name'],
    name: 'Icon.vue'
  };
</script>

<style lang="scss" scoped>
  .icon {
    width: 32px;
    height: 32px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>