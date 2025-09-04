<template>
  <div>
    <section-title>{{ $t("Work experience") }}</section-title>
    <div
      v-for="(experience, index) in workExperiences"
      :key="index"
      class="work-experience-item flex flex-col md:grid gap-[20px] md:gap-[30px] pt-[30px] md:grid-cols-6 group"
      :style="{ animationDelay: `${index * 200}ms` }"
    >
      <div
        class="flex justify-center md:hidden text-lg duration-badge order-first"
      >
        <span
          class="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300 text-center"
        >
          {{ experience.duration }}
        </span>
      </div>
      <div
        v-if="index % 2 === 0"
        class="md:col-span-4 w-full flex flex-col items-center md:items-end justify-center relative experience-card"
      >
        <div
          class="absolute -top-2 -right-2 w-4 h-4 bg-accent/20 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute -bottom-4 -left-4 w-3 h-3 bg-accent/30 rounded-full animate-bounce"
        ></div>

        <div
          class="relative text-lg text-center md:text-end uppercase font-semibold leading-4 pb-[5px] group-hover:text-accent transition-colors duration-300"
        >
          <img
            src="../../assets/accent-circle.png"
            class="hidden md:block min-w-[150px] w-[150px] absolute top-[-70px] right-[-50px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
            alt="accent"
          />
          <span v-html="formatTitle(experience.title)"></span>
        </div>
        <div
          class="text-center md:text-end group-hover:text-accent/80 transition-colors duration-300"
        >
          {{ experience.company }}
        </div>
        <ul
          class="text-sm font-light text-center md:text-end space-y-1 ml-0 md:ml-4"
        >
          <li
            v-for="(item, itemIndex) in experience.description"
            :key="itemIndex"
            class="relative pl-0 md:pl-4 hover:text-accent/90 transition-colors duration-200"
          >
            <span
              class="md:absolute md:left-0 md:top-0 text-accent group-hover:scale-125 transition-transform duration-200 mr-2 md:mr-0"
              >•</span
            >
            {{ item }}
          </li>
        </ul>
        <div
          v-if="experience.teamSize || experience.techStack"
          class="text-xs text-center md:text-end mt-3 space-y-1"
        >
          <div
            v-if="experience.teamSize"
            class="text-accent/80 hover:text-accent transition-colors duration-200"
          >
            <strong>Team size:</strong> {{ experience.teamSize }}
          </div>
          <div
            v-if="experience.techStack"
            class="text-accent/80 hover:text-accent transition-colors duration-200"
          >
            <strong>Tech stack:</strong> {{ experience.techStack }}
          </div>
        </div>
      </div>
      <div
        v-if="index % 2 === 0"
        class="hidden md:flex md:col-span-2 items-center justify-center duration-badge"
      >
        <span
          class="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300 text-center"
        >
          {{ experience.duration }}
        </span>
      </div>
      <div
        v-if="index % 2 === 1"
        class="hidden md:flex md:col-span-2 items-center justify-center duration-badge"
      >
        <span
          class="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-accent font-medium group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-300 text-center"
        >
          {{ experience.duration }}
        </span>
      </div>
      <div
        v-if="index % 2 === 1"
        class="md:col-span-4 w-full flex flex-col items-center md:items-start justify-center relative experience-card"
      >
        <div
          class="absolute -top-2 -left-2 w-4 h-4 bg-accent/20 rounded-full animate-pulse"
        ></div>
        <div
          class="absolute -bottom-4 -right-4 w-3 h-3 bg-accent/30 rounded-full animate-bounce"
        ></div>

        <div
          class="relative text-lg text-center md:text-start flex flex-wrap gap-[2px] uppercase font-semibold leading-4 pb-[5px] group-hover:text-accent transition-colors duration-300"
        >
          <img
            src="../../assets/accent-circle.png"
            class="hidden md:block min-w-[150px] w-[150px] absolute top-[-70px] left-[-50px] rotate-[30deg] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[45deg]"
            alt="accent"
          />
          <span v-html="formatTitle(experience.title)"></span>
        </div>
        <div
          class="text-center md:text-start group-hover:text-accent/80 transition-colors duration-300"
        >
          {{ experience.company }}
        </div>
        <ul
          class="text-sm font-light text-center md:text-start space-y-1 ml-0 md:ml-4"
        >
          <li
            v-for="(item, itemIndex) in experience.description"
            :key="itemIndex"
            class="relative pl-0 md:pl-4 hover:text-accent/90 transition-colors duration-200"
          >
            <span
              class="md:absolute md:left-0 md:top-0 text-accent group-hover:scale-125 transition-transform duration-200 mr-2 md:mr-0"
              >•</span
            >
            {{ item }}
          </li>
        </ul>
        <div
          v-if="experience.teamSize || experience.techStack"
          class="text-xs text-center md:text-start mt-3 space-y-1"
        >
          <div
            v-if="experience.teamSize"
            class="text-accent/80 hover:text-accent transition-colors duration-200"
          >
            <strong>Team size:</strong> {{ experience.teamSize }}
          </div>
          <div
            v-if="experience.techStack"
            class="text-accent/80 hover:text-accent transition-colors duration-200"
          >
            <strong>Tech stack:</strong> {{ experience.techStack }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { workExperienceData } from "../../locales/workExperience.js";

const { locale } = useI18n();

const workExperiences = computed(() => {
  return workExperienceData[locale.value] || workExperienceData.en;
});

const formatTitle = (title) => {
  const words = title.split(" ");
  if (words.length > 1) {
    const lastWord = words.pop();
    return (
      words.join(" ") +
      ' <span class="text-accent">&nbsp;' +
      lastWord +
      "</span>"
    );
  }
  return title;
};
</script>

<style scoped>
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

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

.work-experience-item {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.experience-card {
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-5px);
}

.duration-badge {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  animation-delay: 0.3s;
}

@media (max-width: 768px) {
  .work-experience-item {
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .work-experience-item:last-child {
    border-bottom: none;
  }

  .experience-card {
    padding: 15px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    backdrop-filter: blur(10px);
  }

  .experience-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 205, 64, 0.3);
  }
}
</style>
