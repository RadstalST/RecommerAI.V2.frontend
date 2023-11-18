<template>
  <!-- Search Row -->
  <div v-if="!showSummaryOnly" class = "w-full">
    <div class="d-flex flex-row justify-center align-items-center">
      <div class="p-2">
        <h5>I want to find</h5>
      </div>
      <div  class="d-flex p-2">
        <input v-model="localSearchInput" @input="updateSearch" type="text" class="form-control p-2" placeholder="Enter what you're looking for..." :disabled="isDisabled" > 
      </div>
    </div>
    <div v-if="hasOptions" class="option">
      <OptionsComponent :searchInput="modelValue.searchInput" @updateOptions="updateSummary" @updateProductType="updateProductType" />
    </div>
  </div>
  <!-- Summary Sentence -->
  <div v-if="hasOptions" id='summary-sentence' class="mb-3 text-center">
    I want to find <b>{{ modelValue.searchInput }}</b><span v-if="summary"> that has <b> {{ modelValue.summary }} </b></span>.
  </div>

</template>


<script lang="ts">
import { defineProps, toRefs, ref, watch} from 'vue';
import OptionsComponent from './OptionsComponent.vue';


export default {
  components: {
    OptionsComponent
  },
  props: {
    modelValue: {
      type: Object as PropType<{ searchInput: string; summary: string, product_type: string }>,
      default: () => ({ searchInput: '', summary: '', product_type: '' })
    },
    searchInput: String,
    isDisabled: Boolean,
    hasOptions: Boolean,
    isSearchInitiated: Boolean,
    value: String,
    showSummaryOnly: Boolean
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {  // <-- Notice the second parameter here

    const products = ref([]);
    const localSearchInput = ref(props.modelValue.searchInput || '');
    const summary = ref(props.modelValue.summary || '');
    const productType = ref(props.modelValue.product_type || '');
    // Watch for changes to the prop and update the local state
    watch(
      () => props.searchInput,
      newVal => {
        if(newVal !== localSearchInput.value) {
          localSearchInput.value = newVal;
        }
      }
    );

    // Emit initial values in case they are not empty
    emit('update:modelValue', { searchInput: localSearchInput.value, summary: summary.value, product_type: productType.value });

    // Whenever the local search input changes, emit the updated object
    watch(localSearchInput, (newValue) => {
      emit('update:modelValue', { searchInput: newValue, summary: summary.value, product_type: productType.value });
    });

    // Watchers for localSearchInput and summary
    watch(localSearchInput, (newVal) => {
      emit('update:modelValue', { ...props.modelValue, searchInput: newVal });
    });

    watch(summary, (newVal) => {
      emit('update:modelValue', { ...props.modelValue, summary: newVal });
    });
    
    const updateSummary = (options) => {
      summary.value = `${options}`;
    };
    const updateProductType = (types) => {
      productType.value = `${types}`;
    };
    const clearSearch = () => {
      summary.value = ''; // Reset summary
      localSearchInput.value = ''; // Reset local input
      productType.value = '';
      // Also, if you are emitting an update to the parent, do it here.
      emit('update:modelValue', { searchInput: '', summary: '', product_type: '' });
    };


    return {
      summary,
      updateSummary,
      updateProductType,
      clearSearch,
      localSearchInput
    };
  }
}
</script>

<style scoped>
.option {
  margin-top: 20px;
  max-width: 500px;
  margin: 20px auto;
}
</style>