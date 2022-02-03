<template>
    <div> 
        <Header />
        <section class="section">
            <div class="box" v-if="conversation">
                <p class="title is-4">{{conversation.topic}}<span class="tag"></span></p>
                <p class="subtitle is-6">{{conversation.label}}</p>
                </div>
                <poster-message :conversation="conversation"/>
                <template v-for="message in messages">
                    <message message="message" :key="message.id"/>
                    </section>
                    <!--
                    <section class="section">
                        
                   <template v-for="message in messages">
                       <div class="card mb-2">
                           <div class="card-content">{{message.message}}</div>>
                       </div></template> 
                       
                    </section> -->
                    
    </div> 
</template>
<script> 
import Header from "../components/Header.vue";
import PosterMessage from '../components/PosterMessage.vue';
export default{
    components:{
        Header,
        PosterMessage, 
    },
    data(){
        return{
            conversation:false,
        };
    },
    mounted(){
        let id= this.$route.params.idConversation;
       // alert(this.$route.params.idConversation);
            this.$api.get(`channels/${id}`).then((response)=>{
            this.conversation= response.data;
            /*
            this.$api
            .get(`channels/${this.conversation.id}`)
            .then((response)=>{
                this.messages = response.data;
            })
            */
        });
    },
};
</script>     