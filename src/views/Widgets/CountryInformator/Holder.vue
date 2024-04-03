<template>
  <div v-show="dropdown">
    <div class="mb-4">
      {{
        $t(
          "Find out some details about a country you're interested in (english only)"
        )
      }}:
    </div>
    <form @submit.prevent class="max-w-md mx-auto">
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >Search</label
      >
      <div
        class="relative block w-full ps-10 text-lg text-gray-900 border border-gray-300 rounded-lg bg-my-white focus:border-gray-300 focus:ring-0"
      >
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          @focus="dropdown.show()"
          ref="searchBar"
          type="text"
          id="default-search"
          class="block relative w-full pl-0 text-lg text-gray-900 border-none z-[2] bg-transparent focus:ring-0 placeholder:text-gray-500 placeholder:text-lg"
          :placeholder="$t('Choose a country')"
          autocomplete="off"
          required
          @keypress.enter="selectCountry"
          v-model.trim="search"
        />
        <div
          v-if="search"
          class="absolute left-[40px] top-[50%] text-lg translate-y-[-50%] text-gray-400 z-[1]"
        >
          {{
            search +
            (countryList
              .find((el) =>
                search
                  ? el.name.common
                      .toLowerCase()
                      .startsWith(search.toLowerCase())
                  : el.name.common
              )
              ?.name.common.toLowerCase()
              .slice(search.length) || "")
          }}
        </div>
      </div>
      <!-- Dropdown menu -->
      <div
        id="dropdownUsers"
        class="hidden bg-white rounded-lg shadow w-60 dark:bg-gray-700"
      >
        <ul
          v-if="countryList"
          class="h-fit max-h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownUsersButton"
        >
          <li
            v-for="country in countryList.filter((el) =>
              search
                ? el.name.common.toLowerCase().startsWith(search.toLowerCase())
                : el.name.common
            )"
            :key="country"
          >
            <button
              type="button"
              @click="getSelectedCountry(country)"
              class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <img
                class="w-6 h-6 me-2 rounded-full object-cover"
                :src="country.flags.svg"
                :alt="`${country.name.common}_flag`"
              />
              <span class="truncate">{{ country.name.common }}</span>
            </button>
          </li>
        </ul>
      </div>
    </form>
  </div>

  <div
    v-if="selectedCountry"
    class="rounded-xl overflow-hidden bg-my-white/15 max-w-sm mx-auto"
  >
    <img :src="selectedCountry.flags.svg" :alt="selectedCountry.name.common" />

    <div class="p-3 grid gap-[12px]">
      <p class="text-xl font-bold">{{ selectedCountry.name.common }}</p>
      <p class="text-lg">{{ selectedCountry.region }}</p>
      <p class="country__row">
        <span>👫 </span
        >{{ (+selectedCountry.population / 1000000).toFixed(1) }} mln people
      </p>
      <p class="">
        <span>🗣️ </span>{{ Object.values(selectedCountry.languages)[0] }}
      </p>
      <p class="">
        <span>💰 </span>{{ Object.values(selectedCountry.currencies)[0].name }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { initDropdowns, Dropdown } from "flowbite";
import { onMounted, ref } from "vue";
import countries from "./countries";

const countryList = ref([]);
const dropdown = ref(null);
const search = ref(null);
const searchBar = ref(null);
const selectedCountry = ref(null);
const getCountryList = () => {
  //   fetch("https://restcountries.com/v3.1/all")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       countryList.value = res.map(({ name, flags, cca2 }) => ({
  //         name,
  //         flags,
  //         cca2,
  //       }));
  //       console.log(countryList.value);
  //     });
  countryList.value = countries;
};

onMounted(() => {
  initDropdowns();
  getCountryList();
  const $targetEl = document.getElementById("dropdownUsers");
  const $trigerEl = document.getElementById("default-search");
  const options = {
    triggerType: "none",
  };
  dropdown.value = new Dropdown($targetEl, $trigerEl, options);
});

const setCountry = (country) => {
  selectedCountry.value = country;
};

const getSelectedCountry = (country) => {
  dropdown.value.hide();
  search.value = country.name.common;
  fetch(`https://restcountries.com/v3.1/alpha/${country.cca2}`)
    .then((res) => res.json())
    .then((res) => {
      const [data] = res;
      setCountry(data);
      //   renderCountry(...res);
    });
};

const selectCountry = () => {
  const selected =
    search.value &&
    countryList.value
      .find((el) =>
        search.value
          ? el.name.common.toLowerCase().startsWith(search.value.toLowerCase())
          : el.name.common
      )
      ?.name.common.toLowerCase();

  console.log(selected);
  const isCountryValid = countryList.value.find(
    (country) => country.name.common.toLowerCase() === selected.toLowerCase()
  );
  if (!!isCountryValid) {
    search.value = isCountryValid.name.common;
    getSelectedCountry(isCountryValid);
    searchBar.value.blur();
  }
};
// const renderCountry = function (data, className = "") {
//   console.log(data);
//   const html = `
//   <article class="max-w-md mx-auto rounded-lg ${className}">
//     <img class="country__img " src="${data.flags.svg}" />
//     <div class="country__data bg-my-white">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${
//         Object.values(data.languages)[0]
//       }</p>
//       <p class="country__row"><span>💰</span>${
//         Object.values(data.currencies)[0]?.name
//       }</p>
//     </div>
//   </article>
//   `;
//   const countryCard = document.querySelector("#countryCard");
//   countryCard.insertAdjacentHTML("beforeend", html);
//   countryCard.style.opacity = 1;
// };
</script>
<!-- <style>
.country {
  background-color: #fff;
  box-shadow: 0 2rem 5rem 1rem rgba(0, 0, 0, 0.1);
  font-size: 1.8rem;
  width: 30rem;
  border-radius: 0.7rem;
  margin: 0 3rem;
  /* overflow: hidden; */
}
.country__img {
  width: 30rem;
  height: 17rem;
  object-fit: cover;
  background-color: #eee;
  border-top-left-radius: 0.7rem;
  border-top-right-radius: 0.7rem;
}

.country__data {
  padding: 2.5rem 3.75rem 3rem 3.75rem;
}

.country__name {
  font-size: 2.7rem;
  margin-bottom: 0.7rem;
}

.country__region {
  font-size: 1.4rem;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  color: #888;
}

.country__row:not(:last-child) {
  margin-bottom: 1rem;
}

.country__row span {
  display: inline-block;
  margin-right: 2rem;
  font-size: 2.4rem;
} -->
<!-- </style> -->