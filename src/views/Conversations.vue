<template>
  <div>
      <Navigation />
    <h2>Conversations</h2>
    <p>
      Connecté en tant que <b>{{ $store.state.member.fullname }}</b>
    </p>
    <p>...</p>
     <poster-message :conversation="conversation"/>
     <conversation :key="conversation.id" :conversation="conversation"/>
  </div>
</template>
           <script>
import Conversation from "../components/Conversation.vue";
export default {
  components: {
    Conversation,
  },
  data() {
    return {
      conversations: [],
    };
  },
  mounted() {
    this.$api.get("channels").then((response) => {
      this.conversations = response.data;
    });
  },
};
