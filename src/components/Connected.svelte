<script>
    export let connections = []
</script>

<div class="w-1/3 h-full">
    <div
        class="w-full h-full bg-gray-900 rounded-2xl">
        <div>
            {#each connections as connection}
                <div
                    class="w-full h-16 flex justify-between items-center px-4 border-b border-gray-800 overflow-y-auto">
                    <div class="flex items-center">
                        <div
                            class="w-2 h-2 bg-green-400 rounded-full m-2"></div>
                        <h2 class="text-gray-300 text-xl">
                            {connection.username}
                        </h2>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>