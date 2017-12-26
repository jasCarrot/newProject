<template>
    <div>
        {{ message }}
        {{ myValue }}
        <button @click="fucku">fucku</button>
        <slot name="header">no header</slot>
    </div>
</template>

<script>
    export default{
        props:{
            'my-value':[Number,String]
        },
        data(){
            return{
                message: 'i am a boy',
                hello: 'helloaaaaa'
            }
        },
        methods:{
            fucku(){
                this.$emit('fu', this.hello)
            }
        }
    }
</script>

<style>

</style>