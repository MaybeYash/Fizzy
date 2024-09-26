<!-- src/App.vue -->
<template>
  <div>
    <ConnectWallet />
  </div>
</template>

<script>
import ConnectWallet from './components/ConnectWallet.vue';

export default {
  name: 'App',
  components: {
    ConnectWallet,
  },
};
</script>
