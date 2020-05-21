<template>
  <div class=''>
    <div>{{name}}获取到父组件传递的数据：~~~~~~{{props.content}}~~~~~</div>
    <button @click="onChange">子组件emit触发事件</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    content: {
      type: String,
      default: '',
    }
  }
  ,
  setup(props, { emit }) {
    console.log(999, props)
    const onChange = () => {
      emit('onChildClick', '子组件触发，传递过来的数据')
    }
    return {
      name: '子组件',
      props,
      onChange,
    }
  }
})
</script>
