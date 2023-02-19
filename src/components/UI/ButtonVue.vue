<template>
    <div class="button d-flex align-center justify-center" 
         :class="[type]"
         @click="$emit('click');">
      {{ text }}
    </div>
</template>

<script>
export default {
  name: 'ButtonVue',
  props:{
    type: {type: String, default: "solid"},
    text: {type: String, default: "Submit"},
  }
}
</script>

<style lang="scss" scoped>

    .button{
        width: 100%;
        border-radius: $border-radius;
        border: $primary-border-style;
        cursor: pointer;
        height: 40px;

        font-size: 14px;
        font-weight: 600;
    }

    .solid{
        background: $primary-color;
        color: $primary-text-color;
    }

    .outline{
        background: $background-color;
        color: $text-color;
    }
</style>
