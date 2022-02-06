<template>
    <div> 
        <Navigation />
        <section class="section">
            <div class="box" v-if="conversation">
                <p class="title is-4">{{conversation.topic}}<span class="tag"></span></p>
                <p class="subtitle is-6">{{conversation.label}}</p>
                </div>
                <poster-message :conversation="conversation"/>
                <template v-for="message in messages">
                    <message :message="message" :key="message.id"/>
                </template>
                    </section>                         
    </div> 
</template>
<script> 
import PosterMessage from '../components/PosterMessage.vue';
import Message from '../components/Message.vue';
export default{
    components:{
        PosterMessage, 
        Message,
    },

    data(){
        return{
            conversation:false,
            messages:[],
        };
    },
    mounted(){
        this.chargerConversation();
       // alert(this.$route.params.idConversation);
            this.$bus.$on('charger-conversation', this.chargerConversation)
            this.$bus.$on('charger-messages', this.chargerMessages)
            /*
            this.$api
            .get(`channels/${this.conversation.id}`)
            .then((response)=>{
                this.messages = response.data;
            })
         */
},
chargerConversation(){
    let id=this.$route.params.idConversation;
    this.$api.get('channels/${id}').then((response)=>{
        this.conversation=response.data;
        this.chargerMessages();
    });
},
chargerMessages(){
    this.$api
    .get(`channels/${this.conversation.id}/posts`)
    .then((response)=>{

    })
}
}
</script>     