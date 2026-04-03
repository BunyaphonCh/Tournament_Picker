<script setup>
import { useBattleStore } from "../stores/battleStore"
import { useRouter } from "vue-router"
import { onMounted } from "vue"

const store = useBattleStore()
const router = useRouter()

const handleChoose = (item) => {
    store.chooseWinner(item) 
    if (store.winner) {
        router.push("/result")
    }
}

onMounted(() => {
    if (!store.currentPair || store.currentPair.length < 2) {
        router.push("/")
    }
})
</script>

<template>
<div class="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
    <div class="mb-12 text-center">
        <h2 class="text-indigo-400 font-mono tracking-widest uppercase text-sm">King of the Hill</h2>
        <h1 class="text-5xl font-black italic tracking-tighter uppercase">Pick One!</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl relative">
        <div class="absolute inset-0 items-center justify-center pointer-events-none hidden md:flex">
            <div class="bg-indigo-500 text-white font-bold px-4 py-2 rounded-full border-4 border-slate-900 z-10 text-xl shadow-xl">VS</div>
        </div>

        <div
            v-for="(item, index) in store.currentPair"
            :key="item.id"
            @click="handleChoose(item)"
            class="group relative overflow-hidden bg-slate-800 border border-slate-700 p-12 rounded-3xl cursor-pointer hover:border-indigo-500 hover:bg-slate-750 transition-all active:scale-95 shadow-2xl flex items-center justify-center min-h-62.5"
        >
            <div class="absolute top-0 left-0 w-full h-2" :class="index === 0 ? 'bg-cyan-500' : 'bg-rose-500'"></div>
            <h3 class="text-3xl md:text-5xl font-bold text-center group-hover:text-indigo-300 transition-colors uppercase">
                {{ item.value }}
            </h3>
        </div>
    </div>

    <div class="mt-12 flex items-center gap-4 text-slate-500 font-medium">
        <span class="bg-slate-800 px-3 py-1 rounded-full text-xs">
            {{ store.remaining.length }} IDEA(S) WAITING
        </span>
    </div>
</div>
</template>