<template>
  <div>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
export default{
    data(){
        return{
            member:false,
    };
},
mounted(){
    this.member = this.$store.getters.getMembre(this.$route.params.idMembre);
    console.log(this.member);
    this.$api.get('channels').then((response)=>{
        response.data.forEach((conversation)=>{
            this.$api.get(`channels/${conversation.id}/posts_`)
            .then((response)=>{
                response.data.forEach(message=>{
                    if(message.member_id==this.member_id){
                        this.allMessages.push(message);
                    }
                });
            });
        });
    });
},
computed:{
    messages(){
        return this.allMessages.sort((ma, mb)=>new Data(ma.created_at)>new Data(mb.created_at)).slice(0,10);
    },
    created_at(){
        if(this.member){
            let d=new Data(this.member.created_at);
            return(
                d.toLocalDataString("fr-FR") + " à " +d.toLocalDataString("fr-FR")
            );
        }
    },
}
};
</script>
<style> 
</style>