<template>
    <div class="select-block" 
        @blur="open = false">

        <div    class="selected" 
                :class="[{open: open}]"
                @click="open = !open"
                >
                    {{ (select.selected == null) ? "Choose" : select.selected }}
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div    v-for="(option, i) of options"
                    :key="i"
                    @click="changeValue(option)"
                >
                {{ option }}
            </div>
        </div>
        <label v-if="label != ''" class="label">{{ label }}</label>
  </div>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    name: 'SelectVue',
    props: {
        options: {type: Array, required: true},
        selected: {type: String, default: null},
        label: {type: String, default: ''}
    },
    setup(props, context){
        const open = ref(false);

        const select = reactive({
            options: props.options,
            selected: props.selected
        });


        const changeValue = (option) => {
            open.value = false;
            select.selected = option;
            context.emit('changeValue', option);
        }

        return {
            open, select, changeValue
        }
    }
};
</script>

<style lang="scss" scoped>
    .select-block {
        position: relative;
        width: 100%;
        text-align: left;
        outline: none;
        font-family: 'Montserrat';
        
        

        .selected{
            cursor: pointer;
            user-select: none;
            padding: 10px 15px;
            font-size: 14px;
            font-weight: 600;
            border-radius: $border-radius;
            background: $background-color;
            border: $primary-border-style;
        }
        .selected.open{
            border-radius: $border-radius $border-radius 0px 0px;
            
        }


        .items{
            overflow: hidden;
            position: absolute;
            left: 0;
            right: 0;
            max-height: 250px;
            overflow-y: scroll;
            border: $primary-border-style;
            border-top: 0px;
            border-radius: 0px 0px $border-radius $border-radius ;
            z-index: 2;

            div {
                padding: 10px 15px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                user-select: none;
                background: $background-color;

                
            }

            div:hover {
                background-color: $hover-color;
            }
        }

        .items::-webkit-scrollbar { width: 0; }
    }
    .selectHide {
        display: none;
    }
</style>
