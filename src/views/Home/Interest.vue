<template>
  <div>
    <section-title>{{ $t("Interests") }}</section-title>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      <div
        v-for="(interest, index) in interests"
        :key="interest.name"
        class="interest-card group cursor-pointer"
        :style="{ animationDelay: `${index * 100}ms` }"
      >
        <div class="interest-icon-wrapper">
          <component :is="interest.icon" :size="32" class="interest-icon" />
        </div>
        <div class="interest-text">
          {{ $t(interest.name) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  PhCode,
  PhGuitar,
  PhSoccerBall,
  PhAirplane,
  PhPersonSimpleRun,
  PhBarbell,
  PhStrategy,
  PhTennisBall,
} from "@phosphor-icons/vue";

const interests = [
  {
    name: "Programming",
    icon: PhCode,
  },
  {
    name: "Guitar",
    icon: PhGuitar,
  },
  {
    name: "Football",
    icon: PhSoccerBall,
  },
  {
    name: "Travel",
    icon: PhAirplane,
  },
  {
    name: "Running",
    icon: PhPersonSimpleRun,
  },
  {
    name: "Gym",
    icon: PhBarbell,
  },
  {
    name: "Chess",
    icon: PhStrategy,
  },
  {
    name: "Tennis",
    icon: PhTennisBall,
  },
];
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

.interest-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.interest-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 205, 64, 0.3);
  box-shadow: 0 20px 40px rgba(255, 205, 64, 0.15);
}

.interest-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 205, 64, 0.1) 0%,
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.interest-card:hover::before {
  opacity: 1;
}

.interest-icon-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  background: rgba(255, 205, 64, 0.1);
  border: 2px solid rgba(255, 205, 64, 0.2);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.interest-card:hover .interest-icon-wrapper {
  background: rgba(255, 205, 64, 0.2);
  border-color: rgba(255, 205, 64, 0.4);
  transform: scale(1.1);
  animation: float 2s ease-in-out infinite;
}

.interest-icon {
  color: #ffcd40;
  transition: all 0.3s ease;
}

.interest-card:hover .interest-icon {
  color: #ffcd40;
  transform: scale(1.1);
}

.interest-text {
  position: relative;
  z-index: 2;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #fcfcfc;
  transition: color 0.3s ease;
}

.interest-card:hover .interest-text {
  color: #ffcd40;
}
</style>
