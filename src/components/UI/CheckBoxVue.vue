<template>
    <div class="checkBox-block" @click="changeValue">
        <input
            class="input"
            type="checkbox"
            v-model="value"
        >
        <label class="label d-flex align-center">{{ label }}</label>
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    name: 'CheckBoxVue',
    props: {
        val: { type: Boolean, default: false},
        label: {type: String, default: ""}
    },
    setup(props, context){
        const value = ref(props.val);

        const changeValue = () =>{
            value.value = !value.value;
            context.emit('changeValue', value.value);
        }

        return {
            value, changeValue
        }
    }
}
</script>

<style lang="scss" scoped>
  .checkBox-block{
    width: 100%;
    

    
    .input{
        display: none;
        position: absolute;
    }

    .label::before{
        cursor: pointer;
        content: '';
        display: inline-block;
        width: 2em;
        height: 2em;
        flex-shrink: 0;
        flex-grow: 0;
        border: $primary-border-style;
        background: $background-color;
        border-radius: $border-radius / 2;
        margin-right: 0.8em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

  .input:checked + .label::before{
        background-image: url("@/assets/icons/check-blue.png");
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 60%;
    }
  }

  
</style>
