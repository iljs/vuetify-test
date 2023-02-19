<template>
    <div class="ui ">
        <div class="default-block text">
            <h1>H1 Header</h1>
            <h2>H2 Header</h2>
            <h3>H3 Header</h3>
            <h4>H4 Header</h4>
            <h5>H5 Header</h5>
            <h6>H6 Header</h6>
            <p>Default text</p>
        </div>
        <div class="default-block">
            <h4>Forms</h4>
            <div class="default-input d-flex align-center">
                <div class="default-input-self">
                    <InputVue label="Default Input" placeholder="Default Input" :val="inputVueValue" @changeValue="event => inputVueValue = event"/>
                </div>
                <div class="defaul-input-value">
                    {{ inputVueValue }}
                </div>
            </div>
            <div class="default-input d-flex align-center">
                <div class="default-input-self">
                    <SelectVue label="Default Select Input" :options="selectVueObject.options" :selected="selectVueObject.selected" @changeValue="event => selectVueObject.selected = event"/>
                </div>
                <div class="defaul-input-value">
                    {{ selectVueObject.selected }}
                </div>
            </div>
            <div class="default-input d-flex align-center">
                <div class="default-input-self">
                    <CheckBoxVue label="Default CheckBox" :val="false" @changeValue="event => checkBoxValue = event" />
                </div>
                <div class="defaul-input-value">
                    {{ checkBoxValue }}
                </div>
            </div>
            <div class="default-input d-flex align-center">
                <div class="default-input-self">
                    <ButtonVue text="Solid Button" />
                </div>
            </div>
            <div class="default-input d-flex align-center">
                <div class="default-input-self">
                    <ButtonVue text="Outline Button" type="outline" />
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import ButtonVue from '@/components/UI/ButtonVue.vue';
import CheckBoxVue from '@/components/UI/CheckBoxVue.vue';
import InputVue from '@/components/UI/InputVue.vue';
import SelectVue from '@/components/UI/SelectVue.vue';

import { ref } from "vue";
import { reactive } from 'vue';

export default{
    components: {
    InputVue,
    SelectVue,
    CheckBoxVue,
    ButtonVue
},
    setup(){
        const inputVueValue = ref("");

        const selectVueObject = reactive({
            options: ['First', 'Second'],
            selected: null
        });

        const checkBoxValue = ref(true);

        return {
            inputVueValue, selectVueObject, checkBoxValue
        };
    }
}

</script>

<style lang="scss" scoped>
    .default-block{
        width: 500px;
        margin: 15px;

        .default-input{
            width: 100%;
            margin-top: 15px;

            .default-input-self{
                width: 300px;
            }
        }
    }
</style>