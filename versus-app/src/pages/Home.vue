<script setup>
import { useBattleStore } from "../stores/battleStore"
import AddItem from "../components/AddItem.vue"
import { useRouter } from "vue-router"

const store = useBattleStore()
const router = useRouter()

store.loadFromStorage()

function start() {
    if (store.items.length < 2) {
        alert('ต้องใส่อย่างน้อย 2 idea นะ')
        return
    }
    store.startBattle()
    router.push("/battle")
}
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col items-center p-8">
    <h1 class="text-6xl font-black text-slate-900 mb-8 italic">Versus App</h1>

    <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
      <AddItem />

      <div class="mt-8">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-sm font-bold text-slate-400 uppercase tracking-widest">Current Items</h2>
          <button 
            v-if="store.items.length > 0"
            @click="store.resetGame()"
            class="text-xs font-bold text-rose-500 hover:text-rose-700 transition-colors"
          >
            CLEAR ALL
          </button>
        </div>

        <ul class="space-y-2">
          <li 
            v-for="item in store.items" 
            :key="item.id"
            class="p-4 bg-slate-50 rounded-xl border border-slate-100 font-medium text-slate-700 flex justify-between group"
          >
            {{ item.value }}
          </li>
        </ul>

        <div v-if="store.items.length === 0" class="text-center py-10 text-slate-300 italic">
          No ideas yet. Add some above!
        </div>
      </div>

      <button
        @click="store.startBattle(); $router.push('/battle')"
        :disabled="store.items.length < 2"
        class="w-full mt-8 py-4 bg-emerald-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-200 hover:bg-emerald-600 disabled:bg-slate-200 disabled:shadow-none transition-all active:scale-95"
      >
        Start Battle
      </button>
    </div>
  </div>
</template>