<template>
<transition name="fade">
<article class="media box" v-if="member && afficher">
  <figure class="media-left">
    <p class="image is-64x64">
      <img :src="avatar(member)"/>
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
          <router-link :to="{name:'Member', params:{idMembre:member.id}}">
       <strong>{{member.fullname}}</strong>
          </router-link>
       <small>{{member.email}}</small> /
       <small>{{dateMessage}}</small><br/>
       <span v-html="message.message"></span>
      </p>
    </div>
    <nav class="level is-mobile">
      <div class="level-left">
      </div> 
      <nav class="level is-mobile">
          <div class="level-left"></div>
<div class="level-right">
    <a 
    @click="supprimer"
    class="level-item" v-if="message.member_id== $store.state.member.id">
          <span class="icon is-small"><i class="fas fa-heart"></i></span>
        </a>
</div>
    </nav>
    </nav>
  </div>
</article>
</transition>
</template>
<script>
export default{
    props :["message"],
    data(){
      return{
        afficher:true,
    };
    },
    methods:{
        supprimer(){
            if(confirm('Supprimer ce message?')){
              this.$api.delete(`channels/${this.message.channel_id}/posts/${this.message.id}`)
            .then((response)=>{
              console.log(response);
                this.afficher=false;
            })
            }
        }
    }

}
</script>
<style scoped lang="scss">
article {
  .level {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  &:hover {
    .level {
      opacity: 1;
    }
  }
}
</style>
<style>
.fade-enter-active,
.fade-leave-article {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

