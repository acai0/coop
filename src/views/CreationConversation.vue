<template>
<div>
    <Header />
<section class="hero is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-5">
                    <div class="box">
                        <form class="box" @submit.prevent="validation">
                            <div class="field">
                                <label class="label">Sujet</label>
                                <div class="control">
                                    <input class="input" v-model="conversation.topic"/>
                                    </div>
                                    </div>
                                    <div class="field">
                                    <label class="label">Tags</label>
                                    <div class="control">
                                    <input class="input" v-model="conversation.label"/>
                                    </div>
                                    </div>
                                    <div class="buttons">
                                    <button class="button"> Créer cette conversation</button>
                                    <router-link class="button is-text" to="/">Annuler</router-link>
                                        </div>
                                    </form>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                </div>
</section>
                </div>
                                    </template>
<script>
    import Header from '../components/Header.vue';
    export default{
        components:{Header},
        data(){
            return{
                conversation:{
                    topic:"",
                    label:"",
                },
            };
        },
        methods:{
            validation(){
                this.$api
                .post("channels", this.conversation)
                .then((response)=>{
                    this.$router.push({name:'conversation', params:{idConversation:response.data.id}})
                })
                .catch((error)=>{
                    alert(error.response.data.message);
                });
            },
        },
    };
    </script>