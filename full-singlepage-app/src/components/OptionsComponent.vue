<template>
  <!-- <div class="d-flex flex-row">
    <div v-for="option in options" :key="option" class="form-check p-2">
      <input v-model="selectedOptions" :value="option" class="form-check-input" type="checkbox" :id="option">
      <label class="form-check-label" :for="option">{{ option }}</label>
    </div>
  </div> -->
  <div v-if="isLoading" class="loading-animation text-center">
      <!-- Add your loading animation here -->
      <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <div>Loading Options...</div>
    </div>
  <div v-else>
    <div v-for="(row, rowIndex) in optionRows" :key="rowIndex" class="row mb-3">
      <div class="col" v-for="(option, index) in row" :key="option">
        <div class="form-check">
          <input v-model="selectedOptions" :value="option" class="form-check-input" type="checkbox" :id="`option-${rowIndex}-${index}`">
          <label class="form-check-label" :for="`option-${rowIndex}-${index}`">{{ option }}</label>
        </div>
      </div>
    </div>
    <div class="input-group mb-3">
      <input v-model="customInput" type="text" class="form-control" placeholder="Input custom details (optional)">
    </div>
  </div>
</template>

<script>
import { toRefs, ref, computed, watch, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios'
export default {
  emits: ['updateOptions','updateProductType'],
  props: {
    searchInput: String,
  },
  setup(props, { emit }) {
    const router = useRouter();
    const route = useRoute();

    const hasOptions = ref(true); 
    const { searchInput } = toRefs(props);
    const selectedOptions = ref([]);
    const customInput = ref('');
    const options = ref([]);
    const product_type = ref('');
    const optionRows = ref([]);
    const isLoading = ref(false); 
    console.log(props.searchInput);

    const fetchOptions = () => {
      try {
        options.value = ['sample1', 'sample2', 'sample3'];
        product_type.value = 'sample_product_type';
        updateOptionRows();
      } catch (error) {
        console.error('Fetching options failed:', error);
      } finally {
        isLoading.value = false; // Set loading state to false
      }
    };

    // const fetchOptions = async () => {
    //   try {
    //     if (localStorage.getItem('access_token') == null) {
    //         return
    //     }
    //     // Construct the URL with the query parameter
    //     const url = '/proxy/v2/AI/search/variations/';
    //     isLoading.value = true;
    //     const response = await axios.get(url, {
    //       params: {
    //         desire: props.searchInput,
    //       },
    //       headers: {
    //         Authorization: 'Bearer ' + localStorage.getItem('access_token') ,
    //         'Content-Type': 'application/json',
    //       },
    //     });

    //     // Check if the response status is OK (2xx)
    //     if (response.status >= 200 && response.status < 300) {
    //       const data = response.data;
    //       options.value = data.list_variations;
    //       product_type.value = data.product_type;
    //       console.log(url)
    //       console.log(options.value);
    //       // Now, data will contain the response from the URL with the 'desire' parameter
    //       // You can access the 'desire' parameter value in the response if it's included.
    //       updateOptionRows();
    //     } else {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //   } catch (error) {
    //     console.error('Fetching options failed:', error);
    //   } finally {
    //     isLoading.value = false; // Set loading state to false
    //   }
    // };


    const updateOptionRows = () => {
      const rowSize = 3; // Number of options per row
      const rows = [];
      for (let i = 0; i < options.value.length; i += rowSize) {
        rows.push(options.value.slice(i, i + rowSize));
      }
      optionRows.value = rows;
    };

    const combinedOptions = computed(() => {
      let allOptions = [...selectedOptions.value];
      if (customInput.value) {
        allOptions.push(customInput.value);
      }
      return allOptions.join(', ');
    });

    const emitOptions = () => {
      emit('updateOptions', combinedOptions.value);
    };
    const emitProductType = () => {
      emit('updateProductType', product_type.value); // Emit the product_type value
    };
    watch(selectedOptions, emitOptions);
    watch(customInput, emitOptions);

    watch(selectedOptions, emitOptions);
    watch(customInput, emitOptions);
    watch(product_type, emitProductType); // Add watcher for product_type

    onMounted(fetchOptions);


    return {
      hasOptions,
      selectedOptions,
      customInput,
      options,
      optionRows,
      product_type,
      combinedOptions,
      isLoading,
    };
  },
};
</script>

<style scoped>
/* Additional styles if needed */

</style>
