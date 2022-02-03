<template>
  <div id="app">
    <div id="nav">
     <p>Coop</p>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default{
        name:'App',
            mounted(){
                this.$api.get('ping').then()
                if(!this.$store.state.token){
                    this.$router.push('connection');
                } else{
                  this.$api
                  .get(`members/${this.$store.state.member.id}/signedin`)
                  .then(this.demarrer)
                  .catch(this.seConnecter);
                }
            },
       
        methods:{
ready(){
  this.$store.commit("setReady", true);
},
demarrer(){
  this.$api.get("members").then((response)=>{
    this.$store.commit("setMembers", response.data);
    this.ready();
  });
},
seConnecter(){
  this.$store.commit("setToken", false);
  this.$router.push("/connection");
  this.ready();
}
        }
        }
</script> 
<style long="scss">
html{
  height:100%;
}
html, body{
min-height:100%;
}
.chargement{
  position:fixed;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
  text-align:center;
}
</style>
