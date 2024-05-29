<script>
    import { navigate, Route, Router } from "svelte-routing"
    import Login from "./pages/Login.svelte"
    import { authStore } from "./store/authStore.js"
    import Chatting from "./pages/Chatting.svelte"

    export let url = ""

    $: {
        if ($authStore.user !== "" && $authStore.user !== undefined) {
            navigate("/chat", { replace: true })
        }
    }
</script>

<Router {url}>
    <div class="w-screen h-screen bg-gray-800">
        <Route path="/" component={Login} />
        <Route path="/chat" component={Chatting} />
    </div>
</Router>