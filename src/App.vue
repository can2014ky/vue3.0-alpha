<template>
  <div class='des'>
      hello {{title}}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
    setup(){
        return {
            title: 'word',
        }
    },
})
</script>
<style>
    .des {
        color: red;
    }
</style>
