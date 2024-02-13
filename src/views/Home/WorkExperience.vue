<template>
  <div>
    <section-title>{{ $t("Work experience") }}</section-title>
    <div class="flex md:grid gap-[30px] md:grid-cols-6 pt-[30px]">
      <div
        class="md:col-span-3 w-full flex flex-col items-end justify-center relative"
      >
        <div
          class="relative text-lg text-end uppercase font-semibold leading-4 pb-[5px]"
        >
          <img
            src="../../assets/accent-circle.png"
            class="min-w-[150px] w-[150px] absolute top-[-70px] right-[-50px]"
            alt="accent"
          />Frontend <span class="text-accent">&nbsp;Developer</span>
        </div>
        <div class="text-end">Yax Interactive (Software house), Wrocław</div>
        <div class="text-sm font-light text-end">
          {{
            $t("Developing customizable frontstore for online shopping (Vue).")
          }}
        </div>
      </div>
      <div class="text-lg text-nowrap min-w-[123px] sm:min-w-fit">
        2023 - {{ $t("present") }}
      </div>
    </div>
    <div class="flex md:grid gap-[30px] grid-cols-6 pt-[30px]">
      <div class="md:col-span-2"></div>
      <div class="text-lg text-nowrap min-w-[123px] sm:min-w-fit">
        2022 - {{ $t("present") }}
      </div>
      <div
        class="md:col-span-3 w-full flex flex-col items-start justify-center relative"
      >
        <div
          class="relative text-lg flex flex-wrap gap-[2px] uppercase font-semibold leading-4 pb-[5px]"
        >
          <img
            src="../../assets/accent-circle.png"
            class="min-w-[150px] w-[150px] absolute top-[-70px] left-[-50px] rotate-[30deg]"
            alt="accent"
          />Frontend<span class="text-accent">Developer</span>
        </div>
        <div>Rating Captain, Wrocław</div>
        <div class="text-sm font-light">
          {{
            $t("Developing SaaS application and landing page (Vue, Laravel).")
          }}
        </div>
      </div>
    </div>
    <div class="flex md:grid gap-[30px] md:grid-cols-6 pt-[30px]">
      <div
        class="md:col-span-3 w-full flex flex-col items-end justify-center relative"
      >
        <div
          class="relative text-lg text-end uppercase font-semibold leading-4 pb-[5px]"
        >
          <img
            src="../../assets/accent-circle.png"
            class="min-w-[150px] w-[150px] absolute top-[-70px] right-[-50px]"
            alt="accent"
          />Junior Frontend <span class="text-accent">&nbsp;Developer</span>
        </div>
        <div class="text-end">Yax Interactive (Software house), Wrocław</div>
        <div class="text-sm font-light text-end">
          {{
            $t(
              "Developing Web application and sites with responsive design, working with UX/UI designers."
            )
          }}
        </div>
      </div>
      <div class="text-lg text-nowrap min-w-[123px] sm:min-w-fit">2021</div>
    </div>
    <div class="flex md:grid gap-[30px] grid-cols-6 pt-[30px]">
      <div class="md:col-span-2"></div>
      <div class="text-lg text-nowrap min-w-[123px] sm:min-w-fit">
        2018 - 2019
      </div>
      <div
        class="md:col-span-3 w-full flex flex-col items-start justify-center relative"
      >
        <div
          class="relative text-lg flex flex-wrap gap-[2px] uppercase font-semibold leading-4 pb-[5px]"
        >
          <img
            src="../../assets/accent-circle.png"
            class="min-w-[150px] w-[150px] absolute top-[-70px] left-[-50px] rotate-[30deg]"
            alt="accent"
          />Associate
        </div>
        <div>Koło Naukowe Pojazdów i Robotów Mobilnych</div>
        <div class="text-sm font-light">
          {{
            $t(
              "Activity in the science club at Wroclaw University of Science and Technology."
            )
          }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
