<template>
  <div class='des'>
        <div>
          <div>1. 纯静态值</div>
          <div> hello {{title}}</div>
          <hr>
        </div>
        <div>
          <div>2. 借助 ref 实现基本数据类型的响应</div>
          <div>
              <button @click="increament">增加</button>
              <span>{{count}}</span>
          </div>
          <hr>
        </div>
        <div>
            <div>3. 借助 reactive 实现引用类型的数据响应</div>
            <div>
                <button @click="changeDes">增加</button>
                <span>{{ state.des }}</span>
            </div>
            <hr>
        </div>
        <div>
          <div>4. 计算属性</div>
          <div>{{computedNumber}}</div>
          <hr>
        </div>
        <div>
            <div>5. props通信</div>
            <Child :content="content" @onChildClick="onChildClick"></Child>
            <div>{{state.des}}</div>
            <hr>
        </div>
        <div>
          <div>6. 生命周期函数</div>
          <div>onMounted VS onUnmounted</div>
          <hr>
        </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import Child from  './components/Child.vue'

export default defineComponent ({
    components: {
        Child,
    },
    setup(){
        const count = ref(1);
        const state = reactive({
            des: '之前使用 Vue2.0'
        });
        const increament = () => {
            count.value++;
        };
        const changeDes = () => {
            state.des = "现在使用 Vue3.0"
        };
        const computedNumber = computed(() => {
            return count.value * 2
        })
        const onChildClick = (val) => {
            console.log('自组件触发事件的数据：', val)
            state.des = val;
        }
        onMounted(() => {
            console.log(666, "执行 onmounted 钩子函数")
        })
        onUnmounted(()=> {
            console.log(666, "执行 onUnmounted 钩子函数")
        })
        return {
            title: 'Vue3.0',
            count,
            content: '这是父组件传给子组件爱你的数据',
            state,
            computedNumber,
            increament,
            changeDes,
            onChildClick
        }
    },
})
</script>
<style>
    .des {
        color: red;
    }
</style>
