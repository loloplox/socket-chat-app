<script>
    import { authStore } from "../store/authStore.js"

    export let messages
    let inputMessage = ""

    export let onSendMessage
</script>

<div class="w-2/3 h-full">
    <div class="w-full h-full bg-gray-900 rounded-2xl">
        <div class="w-full h-[calc(100%-80px)]">
            {#each messages as msg}
                <div
                    class="w-full h-16 flex justify-between items-center px-4 border-b border-gray-800 overflow-y-auto">
                    <div class="flex items-center">
                        <h2 class="text-gray-300 text-xl {$authStore.user ===
                         msg.user ? 'font-bold text-white' : ''}">
                            {$authStore.user === msg.user ? "Tu" : msg.user}
                        </h2>
                    </div>
                    <p class="text-gray-300 text-xl">
                        {msg.message}
                    </p>
                </div>
            {/each}
        </div>
        <div class="w-full h-[80px] flex gap-4 p-4">
            <input type="text" placeholder="Escribe algo..."
                   bind:value={inputMessage}
                   class="w-full h-full p-4 bg-gray-800 rounded outline-0 text-gray-300">
            <button
                on:click={() => {
                    onSendMessage(inputMessage)
                    inputMessage = ""
                }}
                class="w-[150px] bg-gray-800 text-gray-300 hover:bg-gray-950 transition-all rounded">
                Enviar
            </button>
        </div>
    </div>
</div>