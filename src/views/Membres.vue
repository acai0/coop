<template>
  <div>
    <Navigation />
    <section class="section">
      <template v-for="member in $store.state.members">
        <router-link :to="{name:'Membre', params:{idMembr:member.id}}" :key="member.id" class="box card">

<div class="card-content">
  <div class="media">
    <div class="media-left">
      <figure class="image is-48x48">
        <img :src="avatar(member)"/>
      </figure>
    </div>
    <div class="media-content">
          <p class="title is-4">{{ member.fullname }}</p>
          <p class="subtitle is-6">{{ member.email }}</p>
        </div>
      </template>
    </section>
  </div>
</template>

<script>
export default{
    
}
</script>
<style> 
</style>
