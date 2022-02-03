<template>
 <router-link :to="{name:'Conversation', params : {idConversation:conversation.id}}" class="box">
     <p class="title is-4">{{conversation.topic}}</p>
     <p class="subtitle is-6">{{conversation.label}}</p>
     </router-link>
     </template>
<script>
    export default{
        props:["conversation"],
    };
</script>

<style>

</style>
         
