import { createStore, Stateful } from "dreamland/core";

export let settings: Stateful<{
	name: string
}> = createStore({
	name: "",
}, { backing: "localstorage", autosave: "auto", ident: "oneshot-wasm" });

(globalThis as any).settings = settings;
