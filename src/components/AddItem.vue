<script setup>
import { ref } from "vue"
import { useBattleStore } from "../stores/battleStore"

const store = useBattleStore()
const newItem = ref("")

function add() {
    if (!newItem.value.trim()) return
    store.addItem(newItem.value)
    newItem.value = ""
}
</script>

<template>
    <div class="flex gap-2">
        <input 
            v-model="newItem"
            @keyup.enter="add"
            placeholder="Add idea..."
            class="border p-2 rounded text-black flex-1"
        />

        <button
            @click="add"
            class="bg-blue-500 text-white px-4 py-2 rounded"
        >
            Add
        </button>
    </div>
</template>