<script setup>
import { useBattleStore } from "../stores/battleStore"
import { useRouter } from "vue-router"
import confetti from 'canvas-confetti' // ตัวทำพลุฉลอง
import { onMounted } from "vue"

const store = useBattleStore()
const router = useRouter()
const handlePlayAgain = () => {
    store.resetGame() // ล้างค่าเดิมทิ้ง
    router.push('/')  // กลับไปหน้าแรกเพื่อใส่ไอเดียใหม่
}

onMounted(() => {
    // ถ้าไม่มีผู้ชนะ (เข้าหน้านี้มามั่วๆ) ให้กลับไปหน้าแรก
    if (!store.winner) return router.push("/")
    
    // แสดงพลุฉลองชัยชนะ
    confetti({ 
        particleCount: 150, 
        spread: 70, 
        origin: { y: 0.6 }
    })
})
</script>

<template>
    <div class="min-h-screen bg-indigo-600 flex flex-col items-center justify-center text-white p-6 text-center">
        <div class="bg-white/10 backdrop-blur-lg p-12 rounded-[3rem] border border-white/20 shadow-2xl">
            <span class="text-indigo-200 uppercase tracking-[0.3em] font-bold">The Ultimate Winner</span>
            
            <h1 class="text-7xl md:text-9xl font-black mt-4 mb-12 drop-shadow-2xl">
                {{ store.winner?.value }}
            </h1>

            <button
                @click="router.push('/')"
                class="bg-white text-indigo-600 px-10 py-4 rounded-full font-black text-xl hover:bg-indigo-50 transition-all hover:shadow-xl active:scale-90"
            >
                START NEW BATTLE
            </button>
        </div>
    </div>
</template>