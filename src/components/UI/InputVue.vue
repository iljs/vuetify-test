<template>
    <div class="input-block">
        <input class="input"
            :type           = " type"
            :value          = " value"
            :placeholder    = " placeholder"
            @input          = "changeValue"
        >

        <label v-if="label != ''" class="label">{{ label }}</label>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: 'InputVue',
  props: {
      val: { type: String, default: ''},
      type: {type: String, default: "text"},
      placeholder: {type: String, default: ""},
      label: {type: String, default: ''}
    },
    setup(props, context){
        const value = ref(props.val);

        const changeValue = (event) => {
            value.value = event.target.value;
            context.emit('changeValue', value.value);
        }

        return {
            value, changeValue
        }
    }
}
</script>

<style lang="scss" scoped>
  .input-block{
    width: 100%;

    .input{
      width: 100%;
      box-sizing: border-box;
      color: $text-color;
      border: $primary-border-style;
      border-radius: $border-radius;
      padding: 10px 15px;
      font-size: 14px;
      font-weight: 600;
      background: $background-color;
    }

    .label{
      margin-top: 100px;
    }
  }
</style>
