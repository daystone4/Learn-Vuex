<template>
  <Counter />
  <CounterSquared />
  <Buttons />
  <ColorCode />
</template>

<script>
import Counter from '@/components/Counter'
import CounterSquared from '@/components/CounterSquared'
import Buttons from '@/components/Buttons'
import ColorCode from '@/components/ColorCode'


export default {
  name: 'Home',
  
  components: {
    Counter,
    CounterSquared,
    Buttons,
    ColorCode,
  }
}
</script>

<style >
div {
  margin-bottom: 10px;
}

.counter  {
  font-size: 80px;
}

.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
