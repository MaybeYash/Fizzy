<template>
    <div>
        <TonConnectUIProvider :options="options">
            <div class="flex flex-col items-center">
                <TonConnectButton class="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mb-4" />
                <TheWelcomeVue />
            </div>
        </TonConnectUIProvider>
    </div>
</template>

<script>
import {
    TonConnectUIProvider,
    TonConnectButton,
} from '@townsquarelabs/ui-vue';
import TheWelcomeVue from './Welcome.vue';

export default {
    components: {
        TonConnectUIProvider,
        TonConnectButton,
        TheWelcomeVue
    },
    setup() {
        const options = {
            manifestUrl: "https://maybeyash.github.io/Fizzy/Fizzy-Ton.json",
        };

        return {
            options,
        }
    }
}
</script>
