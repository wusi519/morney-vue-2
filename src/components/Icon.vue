<template>
    <svg class="icon">
      <use :xlink:href="'#'+name"/>
    </svg>
</template>

<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('..assets/icons/', true, /\.svg$/));} catch (error) {
    console.log(error);
  }
  export default {
    props:['name'],
    name: 'Icon.vue'
  };
</script>

<style lang="scss" scoped>
.icon{
  width:10em;height:10em;
  vertical-align: -0.15em;
  fill:currentColor;
  overflow:hidden;
  border:1px solid orange;
}
</style>