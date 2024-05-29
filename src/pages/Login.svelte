<script>
    import { authStore } from "../store/authStore.js"
    import { navigate } from "svelte-routing"

    let user = ""

    function handleSubmit(e) {
        if (user === "") {
            alert("Por favor, ingrese su usuario y contraseña")
            return
        }

        authStore.setUser(user)
        navigate("/chat", { replace: true })

    }
</script>

<div class="w-full h-full flex justify-center items-center">
    <form on:submit|preventDefault={handleSubmit}
          class="bg-gray-900 w-[600px] p-6 rounded">
        <h2 class="text-gray-300 font-bold text-4xl text-center">
            Inicio de Sesión
        </h2>

        <div class="my-4">
            <label class="text-gray-300">
                Usuario:
                <input type="text" placeholder="Ingrese su usuario"
                       class="w-full bg-gray-800 h-[50px] p-2 rounded outline-0"
                       bind:value={user}>
            </label>
        </div>

        <button type="submit"
                class="bg-gray-800 w-full h-[50px] rounded transition-all text-gray-300 hover:bg-gray-950">
            Iniciar Sesión
        </button>
    </form>
</div>