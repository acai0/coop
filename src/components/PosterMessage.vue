<template>
  <form class="box" @submit.prevent="poster">
    <div class="field">
      <div class="control">
          <input type="text" class="input" v-model="message"/>
          </div>
    </div>
    <div class="buttons">
        <button class="button">Poster un message</button>
        </div>
  </form>
</template>
<script>
export default {
    props:["conversation"],
    data(){
        return {
            message:'',
        };
    },
    methods:{
        poster(){
               // for(let i=0;1<20;i++){
            this.$api.post(`channels/${this.conversation.id}/posts`,{
                message: this.message,
                channel_id: this.conversation.id,
                member_id: this.$store.state.member.id,
            }).then(response=>{
                console.log(response.data) 
                message++;
                 //this.buts.$emit('charger-messages');
          // },
            });
            
        },
    },
};
</script>
