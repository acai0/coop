<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="column is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <div class="box">
            <h1 class="title">Coop</h1>
    <h2 class="subtitle">Se connecter</h2>
    </div>
    <form class="box" @submit.prevent="validation">
    <div class="field">
      <label for class="label">Email</label>
      <div class="control has-icons-left">
    <input type="email" v-model="email" class="input" required/>
    <span class="icon is-small is-left">
      <i class="fa fa-envelope"></i>
    </span> 
  </div>
    </div>
      <div class="field">
        <label for class="label">Password</label>
        <div class="control has-icons-left">
    <input type="password" v-model="password" class="input" required/>
    <span class="icon is-small is-left">
      <i class="fa fa-lock"></i>
    </span>
  </div>
  </div>
  <div class="buttons">
  <button class="button">Valider</button>
  <router-link classs="button is-text" to="creation-compte">Créer un compte</router-link>
  </div>
  </form>
  </div>
      </div>
    </div>
    </div>
</section>  
</template>

<script>
export default{
  mounted(){
    if(this.$store.state.token){
      this.$router.push("/")
    }
  },
  data(){
    return{
      email:'alicecai08@hotmail.com',
      password:'test'
    };
  },
  methods:{
    
    validation(){
      //alert('OK!')
      let donnes={
      email:this.email,
      password:this.password,
    };
      this.$api
      .post('members/signin',donnes)
      .then((response)=> {
        //console.log(response)
        this.$store.commit('setToken', response.data.token);
        this.$store.commit('setMember', response.data.member);
        this.$router.push("/");
        //this.$router.push('/connection');
     // console.log(response.data)
    })  
    .catch((error)=>{
                    alert(error.response.data.message);
      //console.log(error)
    });
    },
  },
};
</script>
<style>

</style>