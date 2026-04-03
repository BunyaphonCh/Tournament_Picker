import { defineStore } from "pinia"
import { shuffle } from "../utils/shuffle"

export const useBattleStore = defineStore("battle" , {
    state: () => ({
        items: [],
        remaining: [],
        currentPair: [],
        winner: null
    }),

    actions: {
        loadFromStorage() {
            const data = localStorage.getItem("versus-items")
            if (data) this.items = JSON.parse(data)
        },

        saveToStorage() {
            localStorage.setItem("versus-items", JSON.stringify(this.items))
        },

        addItem(val) {
            const newItem = { id: Date.now(), value: val }
            this.items.push(newItem)
            this.saveToStorage()
        },

        startBattle() {
            if (this.items.length < 2) return
            this.winner = null
            
            const shuffled = shuffle([...this.items])
            
            const first = shuffled.shift()
            const second = shuffled.shift()
            this.currentPair = [first, second]
            
            this.remaining = shuffled 
        },

        chooseWinner(selectedItem) {
            if (this.remaining.length === 0) {
                this.winner = selectedItem
                this.currentPair = []
                return
            }

            const challenger = this.remaining.shift()
            this.currentPair = [selectedItem, challenger]
        },

                // ใน actions: { ... }
        resetGame() {
            console.log("Reset gamee")
            this.items = []
            this.remaining = []
            this.currentPair = []
            this.winner = null
            // บันทึกค่าว่างลงไปทับค่าเดิมใน LocalStorage
            this.saveToStorage() 
        },
    }

})