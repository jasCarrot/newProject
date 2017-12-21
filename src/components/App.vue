<template>
    <div id='app'>
        <ul>
            <li v-for="item in fruits">
                {{ item.name }}-{{ item.price }}
            </li>
        </ul>
        <a v-if="isPartA">partA</a>
        <a v-else>no</a>
        <a v-show="!isPartA">partB</a>
        <select v-model="selection">
            <option v-for="item in op" :value="item.value">{{ item.name }}</option>
        </select>
        {{ selection }}
        <input v-model="box" type="radio" value="111" >
        <input v-model="box" type="radio" value="222" >
        {{ box }}
        <button @click="toggle">toggle</button>
        <a :href="link" :title="link">oooooooo</a>
        <button v-on:click="fuck">fuck</button>
        <input type="text" v-model="myValue">{{ withoutNum }}
        <top :dataa="dataa"></top>
    </div>
</template>

<script>
    import top from './head.vue'
    import Vue from 'vue'

    export default{
        data(){
            return {
                op:[
                    {
                        name:'banana',
                        value: 0
                    },
                    {
                        name:'apple',
                        value: 1
                    }
                ],
                selection: '',
                box: '',
                isPartA:true,
                dataa: 12,
                link:'http://www.baidu.com',
                fruits: [
                    {
                        name: 'banana',
                        price: '12'
                    },
                    {
                        name: 'apple',
                        price: '34'
                    }
                ],
                list: {
                    name: 'banana',
                    price: '12',
                    color: 'yellow'
                },
                myValue: ''
            }
        },
        components: {
            top
        },
        methods: {
            fuck () {
                Vue.set(this.fruits,1,{
                    name: 'pinapple',
                    price: '45'
                })
            },
            toggle(){
                this.isPartA = !this.isPartA;
            }
        },
        computed: {
            withoutNum(){
                return this.myValue.replace(/\d/g, '')
            }
        }
    }
</script>

<style>

</style>