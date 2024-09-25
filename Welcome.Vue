<template>
    <div class="text-center">
        <div v-if="!userFriendlyAddress">
            <button @click="open" class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Connect Wallet
            </button>
        </div>
        <div v-else>
            <div>User-friendly address: {{ userFriendlyAddress }}</div>
            <button @click="logout" class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
                Disconnect
            </button>
        </div>
    </div>
</template>

<script>
import {
    useTonAddress,
    useTonWallet,
    useTonConnectModal,
    useTonConnectUI
} from '@townsquarelabs/ui-vue';
import { toUserFriendlyAddress } from '@tonconnect/sdk';

export default {
    setup() {
        const userFriendlyAddress = useTonAddress();
        const wallet = useTonWallet();
        const { open, close } = useTonConnectModal();
        const [tonConnectUI] = useTonConnectUI();

        const logout = () => {
            tonConnectUI.disconnect();
        };

        window.addEventListener('ton-connect-connection-completed', (event) => {
            console.log('Wallet connected:', event.detail.wallet_address);
        });

        return {
            userFriendlyAddress,
            open,
            logout
        };
    }
}
</script>

<style scoped>
/* */
</style>
