<script>
    import { authStore } from "../store/authStore.js"
    import { navigate } from "svelte-routing"
    import Navbar from "../components/Navbar.svelte"
    import Connected from "../components/Connected.svelte"
    import Chat from "../components/Chat.svelte"
    import { io } from "socket.io-client"

    const socket = io("localhost:3000", {
        auth: {
            user: $authStore.user
        }
    }).disconnect()
    let connections = []
    let messages = []

    $: {
        console.log($authStore)
    }

    $: {
        if ($authStore.user === "" || $authStore.user === undefined) {
            navigate("/", { replace: true })
        }
    }


    function handleConnect() {
        if (!$authStore.isConnect) {
            socket.connect()
        } else {
            socket.disconnect()
            connections = []
        }
        authStore.setConnect(!$authStore.isConnect)
    }

    socket.on("on-clients-connected", (data) => {
        connections = data
    })

    socket.on("on-clients-disconnected", (data) => {
        connections = data
    })

    socket.on("on-message-received", (data) => {
        messages = [...messages, data]
    })

    function onSendMessage(inputMessage) {
        if (inputMessage !== "") {
            socket.emit("send-message", inputMessage)
        }
    }
</script>

<div class="w-full h-full">
    <div class="w-full h-[100px]">
        <Navbar {handleConnect} />
    </div>
    <div
        class="w-full h-[calc(100vh-100px)] flex justify-center items-center gap-6 p-4">
        <Connected {connections} />
        <Chat {onSendMessage} {messages} />
    </div>
</div>