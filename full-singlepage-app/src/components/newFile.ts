import { ref, watch } from 'vue';

export default (await import('vue')).defineComponent({
components: {
OptionsComponent
},
props: {
modelValue: {
type: Object as PropType<{ searchInput: string; summary: string; productType: string; }>,
default: () => ({ searchInput: '', summary: '', productType: '' })
},
searchInput: String,
isDisabled: Boolean,
hasOptions: Boolean,
isSearchInitiated: Boolean,
value: String,
showSummaryOnly: Boolean
},
emits: ['update:modelValue'],
setup(props, { emit }) {

const products = ref([]);
const localSearchInput = ref(props.modelValue.searchInput || '');
const summary = ref(props.modelValue.summary || '');
const productType = ref(props.modelValue.productType || '');

// Watch for changes to the prop and update the local state
watch(
() => props.searchInput,
newVal => {
if (newVal !== localSearchInput.value) {
localSearchInput.value = newVal;
}
}
);

// Emit initial values in case they are not empty
emit('update:modelValue', { searchInput: localSearchInput.value, summary: summary.value, productType: productType.value });

// Whenever the local search input changes, emit the updated object
watch(localSearchInput, (newValue) => {
emit('update:modelValue', { searchInput: newValue, summary: summary.valu, productType: productType.value });
});

// Watchers for localSearchInput, summary, and productType
watch(localSearchInput, (newVal) => {
emit('update:modelValue', { ...props.modelValue, searchInput: newVal });
});

watch(summary, (newVal) => {
emit('update:modelValue', { ...props.modelValue, summary: newVal });
});

watch(productType, (newVal) => {
emit('update:modelValue', { ...props.modelValue, productType: newVal });
});

const updateSummary = (options) => {
summary.value = `${options}`;
};
const updateProductType = (type) => {
productType.value = type;
};
const clearSearch = () => {
summary.value = ''; // Reset summary
localSearchInput.value = ''; // Reset local input
productType.value = ''; // Reset productType

// Also, if you are emitting an update to the parent, do it here.
emit('update:modelValue', { searchInput: '', summary: '', productType: '' });
};



return {
summary,
updateSummary,
clearSearch,
localSearchInput,
updateProductType
};
}
});
