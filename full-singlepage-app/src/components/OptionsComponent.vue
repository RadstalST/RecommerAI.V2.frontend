
<template>
  <!-- <div class="d-flex flex-row">
    <div v-for="option in options" :key="option" class="form-check p-2">
      <input v-model="selectedOptions" :value="option" class="form-check-input" type="checkbox" :id="option">
      <label class="form-check-label" :for="option">{{ option }}</label>
    </div>
  </div> -->
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


</template>

<script>
import { toRefs, ref, computed, watch  } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  emits: ['updateOptions'],
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
    const options = ref(['4K Resolution', 'HDMI Ports', 'OLED Display', 'Built-in Wi-Fi',  /*...other options...*/]);
    // const options = ref([]);
    console.log(props.searchInput);

    const optionRows = computed(() => {
      const rowSize = 3; // Number of options per row
      const rows = [];
      for (let i = 0; i < options.value.length; i += rowSize) {
        rows.push(options.value.slice(i, i + rowSize));
      }
      return rows;
    });


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

    watch(selectedOptions, emitOptions);
    watch(customInput, emitOptions);

    watch(selectedOptions, () => {
      emitOptions();
    });
    watch(customInput, () => {
      emitOptions();
    });

    // // Function to call the API and fetch options
    // const fetchOptions = async () => {
    //   try {
    //     const response = await fetch('/api/options', {
    //       method: 'GET', // or 'POST'
    //       headers: {
    //         'Content-Type': 'application/json',
    //         // Any other headers that your API needs
    //       },
    //       // If you're using POST, you will need to send a body:
    //       // body: JSON.stringify({ search: searchInput.value }),
    //     });
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     optionsList.value = data.options; // Assuming the response contains an "options" array
    //   } catch (error) {
    //     console.error('Fetching options failed:', error);
    //   }
    // };

    // // Fetch options when the component is mounted
    // onMounted(fetchOptions);

    // Re-fetch options whenever the searchInput changes
    // watch(searchInput, (newValue) => {
    //   console.log('searchInput changed to:', newValue);
    //   fetchOptions();
    // });


    return {
      searchInput,
      selectedOptions,
      customInput,
      optionRows,
      combinedOptions,
      emitOptions
    };
  }
};
</script>
<style scoped>
/* Additional styles if needed */
</style>
