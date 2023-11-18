<template>
  <div class="d-flex flex-column h-full">
    <!-- Rest of your App.vue template -->

    <div v-if="showResults" class="row recommend">
      <h3 class="text-center mb-5 recommend">We recommend</h3>
    </div>

    <!-- Pass the productType ref as a prop to SearchComponent -->
    <SearchComponent
      v-model="searchValues"
      ref="searchComponentRef"
      :isDisabled="isDisabled"
      :hasOptions="hasOptions"
      :isSearchInitiated="isSearchInitiated"
      :showSummaryOnly="showResults"
      :productType="productType"
      @productTypeChange="handleProductTypeChange"
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

<script>
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

<style scope>

</style>
