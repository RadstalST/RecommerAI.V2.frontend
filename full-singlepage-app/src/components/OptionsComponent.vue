
<script>
import { toRefs, ref, computed, watch, onMounted } from 'vue';
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
    const options = ref([]);
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


    onMounted(async () => {
      try {
        
        // Construct the URL with the query parameter
        const url = '/v2/AI/search/variations/';

        const response = await axios.get(url, {
          params: {
            desire: props.searchInput,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Check if the response status is OK (2xx)
        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          // Now, data will contain the response from the URL with the 'desire' parameter
          // You can access the 'desire' parameter value in the response if it's included.
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Fetching options failed:', error);
      }
    });

    return {
      hasOptions,
      selectedOptions,
      customInput,
      options,
      optionRows,
      combinedOptions,
    };
  },
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
