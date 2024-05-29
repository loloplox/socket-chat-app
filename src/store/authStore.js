import { writable } from "svelte/store"

function createAuth() {
    const { subscribe, set, update } = writable({
        user: "",
        isConnect: false,
    })

    let auth = localStorage.getItem("auth")
    const authParser = JSON.parse(auth)
    localStorage.setItem(
        "auth",
        JSON.stringify({
            ...authParser,
            isConnect: false,
        }),
    )

    auth = localStorage.getItem("auth")

    if (auth) {
        set(JSON.parse(auth))
    }

    return {
        subscribe,
        setUser: (user) => {
            update((prevState) => {
                localStorage.setItem(
                    "auth",
                    JSON.stringify({
                        ...prevState,
                        user,
                    }),
                )

                return { ...prevState, user }
            })
        },
        setConnect: (isConnect) => {
            update((prevState) => {
                localStorage.setItem(
                    "auth",
                    JSON.stringify({
                        ...prevState,
                        isConnect,
                    }),
                )

                return { ...prevState, isConnect }
            })
        },
        logout: () => {
            localStorage.removeItem("user")
            set("")
        },
    }
}

export const authStore = createAuth()
