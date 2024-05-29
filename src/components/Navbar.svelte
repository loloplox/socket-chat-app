<script>
    import { authStore } from "../store/authStore.js"

    export let handleConnect
</script>

<nav class="w-full h-full flex justify-center items-center p-4 gap-6">
    <div
        class="w-1/3 h-full bg-gray-900 rounded-2xl py-4 px-4 flex justify-between">
        <div class="flex items-center">
            <div
                class="w-2 h-2 {$authStore.isConnect ? 'bg-green-400' :
                'bg-red-400'} rounded-full m-2"></div>
            <h2 class="text-gray-300 text-2xl">
                {$authStore.user}
            </h2>
        </div>
        <button
            on:click={handleConnect}
            class="bg-gray-800 hover:bg-gray-950 rounded text-gray-300 transition-all w-[100px]">
            {#if $authStore.isConnect}
                Desconectar
            {:else}
                Conectar
            {/if}
        </button>
    </div>
    <div class="w-2/3 h-full bg-gray-900 rounded-2xl py-4">
        <h2 class="text-gray-300 text-4xl text-center">Chat</h2>
    </div>
</nav>