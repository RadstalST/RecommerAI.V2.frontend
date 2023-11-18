<template>
  <div class="content d-flex flex-column">
    <!-- Rest of your App.vue template -->
    <div class = "row flex-column">
      <h1 class="text-center mb-5 logo">Recommer.AI</h1>
    </div>
    <SearchComponent
      v-model="searchValues"
      ref="searchComponentRef"
      :isDisabled="isDisabled"
      :hasOptions="hasOptions"
      :isSearchInitiated="isSearchInitiated"
      :showSummaryOnly="showResults"
    />

    <!-- Results Component -->
    <div v-if="showResults">
      <ResultComponent :products="searchResults" :searchValues="searchValues" />
    </div>

    <!-- Buttons -->
    <div class="row my-3">
      <div class="col text-center">
        <button
          v-if="!showResults"
          @click="hasOptions ? searchAgain() : navigateToOptions()"
          class="btn btn-primary m-2"
        >
          Search
        </button>
        <button v-if="hasOptions" @click="resetSearch" class="btn btn-secondary m-2" type="reset">
          Reset
        </button>
      </div>
    </div>
  </div>
</template>




<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SearchComponent from '../components/SearchComponent.vue';
import ResultComponent from '../components/ResultsComponent.vue';

const searchValues = ref({ searchInput: '', summary: '' });
const isDisabled = ref(false);
const isSearchInitiated = ref(false);
const hasOptions = ref(false);
const searchResults = ref([]);  // Array that will store product search results
const showResults = ref(false); // To control when to display the results
const searchComponentRef = ref(null);


const router = useRouter();


const navigateToOptions = () => {
  console.log('goto option')
  isDisabled.value = true;
  hasOptions.value = true;
  isSearchInitiated.value = true;
  // After navigating to options, hide results
  showResults.value = false;
  console.log(searchValues.value);
  router.push({ path: '/options', query: { search: searchValues.value.searchInput} });
};

const resetSearch = () => {
  searchValues.value = { searchInput: '', summary: '' };
  isDisabled.value = false;
  hasOptions.value = false;
  isSearchInitiated.value = false;
  showResults.value = false;

  // Call the child's reset function directly using the ref
  if (searchComponentRef.value) {
    searchComponentRef.value.clearSearch();
  }

  console.log(searchValues.value);

  router.push('/');
};

const searchAgain = () => {
  // Logic to fetch product search results based on modified options
  // For the sake of demonstration, let's assume an API call:
  console.log(searchValues.value);

  // mockup
  showResults.value = true;


  // API
  /*fetch("/api/search?query=" + searchInput.value)
    .then(response => response.json())
    .then(data => {
      searchResults.value = data.products; 
      showResults.value = true;
    });
  */
};
</script>

