<template>
  <div>
    <h1>Créer un compte</h1>
    <form @submit.prevent="validation">
    <div>
    <input type="text" required v-model="fullname"/>
  </div>
    <div>
    <input type="email" required v-model="email"/>
  </div>
    <div>
    <input type="password" required v-model="password"/>
  </div>
  <button>Valider</button>
  <p><router-link to="connection">Suivez ce lien pour vous connecter</router-link></p>
  </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default{
  data(){
    return{
      fullname: 'CAI Alice',
      email:'alicecai08@hotmail.com',
      password:'test'
    };
  },
  methods:{
    
    validation(){
      //alert('OK!')
      let donnes={
      fullname:this.fullname,
      email:this.email,
      password:this.password
    };
      this.$api.post('members', donnes).then((response)=> {
        alert('Votre compte a été créé. Vous pouvez vous connecter.');
        this.$router.push('/connection');
     // console.log(response.data)
    }).catch((error)=>{
      alert (error.response.data.message)
      //console.log(error)
    })
    },
  },
};
</script>
