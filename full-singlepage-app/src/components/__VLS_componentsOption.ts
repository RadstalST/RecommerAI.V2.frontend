import { ref, toRefs } from 'vue';
import { __VLS_internalComponent } from './ResultsComponent.vue.js';

// import ProductDetails from './ProductDetails.vue';
export default (await import('vue')).defineComponent({
// components: {
//   ProductDetails
// },
props: {
searchValues: {
type: Object as PropType<{ searchInput: string; summary: string; product_type: string; }>,
default: () => ({ searchInput: '', summary: '', product_type: '' }),
},
recommend_prod_nm: string
},
setup(props) {
const { searchValues } = toRefs(props);
// const products = ref([]);
// // Function to fetch products based on search input
// const fetchProducts = async () => {
//   try {
//     // API endpoint with query parameters from searchValues
//     const response = await fetch(`/api/products?search=${encodeURIComponent(searchValues.value.searchInput)}&summary=${encodeURIComponent(searchValues.value.summary)}`);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     products.value = data; // Assuming the API returns an array of products
//   } catch (error) {
//     console.error('Error fetching products:', error);
//   }
// };
// // Fetch products when the component mounts
// onMounted(fetchProducts);
// // Re-fetch products whenever searchValues changes
// watch(searchValues, fetchProducts);
console.log('ResultComponent');
console.log(searchValues.value);
const mockupRecommend = {
"item": {
"recommendation": {
"productname": "Jabra Elite 8 Active",
"comparison": "Jabra Elite 8 Active is best for all kinds of workouts and can be used beyond the gym. It is a true wireless earbud. Anker Soundcore Sport X10 is recommended for sports and is known for its sturdy, sweatproof, and tangle-proof features. It maintains a strong connection with your device throughout your workout. Sony LinkBuds is a fully open true wireless headphone that is popular among runners and bikers. It also features noise canceling capabilities.",
"suggestions": "Given your requirements for a sports headphone and a Bluetooth headphone for working out, all three options could potentially meet your needs. However, the Jabra Elite 8 Active stands out as it is specifically designed for all kinds of workouts and can be used beyond the gym. It is also a true wireless earbud, which means you won't have to deal with any wires during your workout."
},
"productlists": {
"products": [
{
"name": "Jabra Elite 8 Active",
"description": "The Best Headphones for All Kinds of Workouts. It is a true wireless earbud that can be used beyond the gym."
},
{
"name": "Anker Soundcore Sport X10",
"description": "Recommended sports headphones. It is known for its sturdy, sweatproof, and tangle-proof features."
},
{
"name": "Sony LinkBuds - Fully Open True Wireless Headphones",
"description": "It is a fully open true wireless headphone that is popular among runners and bikers."
}
]
}
}
};

const mockupData = [
{
"name": "Airpods Pro 2",
"image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985",
"comparison": {
"pros": {
"name": "Airpods Pro 2",
"pros": [
"Up to 2x more Active Noise Cancellation",
"Transparency mode to hear the world around you",
"All-new Adaptive Audio intelligently tailors noise"
]
},
"cons": {
"name": "Airpods Pro 2",
"cons": [
"Lack of EQ adjustments",
"User-reported issues",
"User-reported problems"
]
}
},
"salesChannel": {
"saleslist": [
{
"name": "Verizon",
"price": "$199.99",
"link": "https://www.verizon.com/products/apple-airpods-pro-2nd-generation?sku=sku5600070"
}, {
"name": "CDW",
"price": "$301.99",
"link": "https://www.cdw.com/product/airpods-pro-2nd-generation-with-magsafe-case-usb-u2011c/7595937?cm_ven=acquirgy&cm_cat=google&cm_pla=NA-NA-Apple_HE&cm_ite=7595937"
}, {
"name": "UScellular",
"price": "$249.99",
"link": "https://www.uscellular.com/accessories/apple-airpods-pro-2nd-generation-usb-c"
}
]
},
"details": {
"name": "AirPods Pro (2nd generation) with MagSafe Case (USB‐C)",
"detail": "The AirPods Pro 2nd generation is a product of Apple, priced around $199.99 to $301.99. It comes with a MagSafe Case and a USB-C. It has a high rating of 4.8 with about 9000 reviews. Key features include its compatibility with MagSafe and its high-quality sound performance."
}
},
{
"name": "Airpods Pro 2",
"image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTJV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1694014871985",
"comparison": {
"pros": {
"name": "Airpods Pro 2",
"pros": [
"Up to 2x more Active Noise Cancellation",
"Transparency mode to hear the world around you",
"All-new Adaptive Audio intelligently tailors noise"
]
},
"cons": {
"name": "Airpods Pro 2",
"cons": [
"Lack of EQ adjustments",
"User-reported issues",
"User-reported problems"
]
}
},
"salesChannel": {
"saleslist": [
{
"name": "Verizon",
"price": "$199.99",
"link": "https://www.verizon.com/products/apple-airpods-pro-2nd-generation?sku=sku5600070"
}, {
"name": "CDW",
"price": "$301.99",
"link": "https://www.cdw.com/product/airpods-pro-2nd-generation-with-magsafe-case-usb-u2011c/7595937?cm_ven=acquirgy&cm_cat=google&cm_pla=NA-NA-Apple_HE&cm_ite=7595937"
}, {
"name": "UScellular",
"price": "$249.99",
"link": "https://www.uscellular.com/accessories/apple-airpods-pro-2nd-generation-usb-c"
}
]
},
"details": {
"name": "AirPods Pro (2nd generation) with MagSafe Case (USB‐C)",
"detail": "The AirPods Pro 2nd generation is a product of Apple, priced around $199.99 to $301.99. It comes with a MagSafe Case and a USB-C. It has a high rating of 4.8 with about 9000 reviews. Key features include its compatibility with MagSafe and its high-quality sound performance."
}
},
];



// const fetchResult = async () => {
//   try {
//     if (localStorage.getItem('access_token') == null) {
//         return
//     }
//     // Construct the URL with the query parameter
//     const url = '/proxy/v2/AI/search/productinfodetail/';
//     // isLoading.value = true;
//     console.log(url);
//     const response = await axios.get(url, {
//       params: {
//         searchid: 'xxxx',
//         desire: searchValues.value.searchInput,
//         summary: searchValues.value.summary,
//         product_type: searchValues.value.product_type
//       },
//       headers: {
//         Authorization: 'Bearer ' + localStorage.getItem('access_token') ,
//         'Content-Type': 'application/json',
//       },
//     });
//     // Check if the response status is OK (2xx)
//     if (response.status >= 200 && response.status < 300) {
//       const data = response.data;
//       // options.value = data.list_variations;
//       // product_type.value = data.product_type;
//       // console.log(url)
//       console.log(DataTransfer);
//       // Now, data will contain the response from the URL with the 'desire' parameter
//       // You can access the 'desire' parameter value in the response if it's included.
//     } else {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//   } catch (error) {
//     console.error('Fetching options failed:', error);
//   } finally {
//     // isLoading.value = false; // Set loading state to false
//   }
// };
const products = ref(mockupData);
const recommend_prod_nm = ref(mockupRecommend.item.recommendation.productname);
console.log(recommend_prod_nm);
// onMounted(fetchResult);
return {
products
};
}
});
const __VLS_componentsOption = {};
const __VLS_name = undefined;
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'results'?: boolean; } &
{ 'product-card'?: boolean; } &
{ 'product-card'?: boolean; } &
{ 'card-body'?: boolean; } &
{ 'card'?: boolean; } &
{ 'card'?: boolean; } &
{ 'product-img'?: boolean; } &
{ 'card'?: boolean; } &
{ 'row'?: boolean; } &
{ 'card'?: boolean; } &
{ 'card-title'?: boolean; } &
{ 'card'?: boolean; } &
{ 'sales-channel'?: boolean; } &
{ 'card'?: boolean; } &
{ 'channel-link'?: boolean; } &
{ 'card'?: boolean; } &
{ 'channel-link'?: boolean; } &
{ 'card'?: boolean; } &
{ 'sales-channel'?: boolean; } &
{ 'channel-link'?: boolean; } &
{ 'channel-name'?: boolean; } &
{ 'card'?: boolean; } &
{ 'sales-channel'?: boolean; } &
{ 'channel-link'?: boolean; } &
{ 'channel-price'?: boolean; } &
{ 'pros-cons-list'?: boolean; } &
{ 'price'?: boolean; } &
{ 'sales-channel-list'?: boolean; } &
{ 'badge'?: boolean; } &
{ 'sales-channel-list'?: boolean; } &
{ 'list-group-item'?: boolean; } &
{ 'list-group-item'?: boolean; } &
{ 'recommend'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row recommend"), };
{
({} as JSX.IntrinsicElements).h3;
({} as JSX.IntrinsicElements).h3;
(__VLS_x as JSX.IntrinsicElements)['h3'] = { class: ("text-center mb-5 recommend"), };
}
}
for (const [product] of (await import('./__VLS_types.js')).getVForSourceType(__VLS_ctx.products)) {
// @ts-ignore
[products,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { key: ((product.id)), class: ("card mb-4"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row g-0"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-5"), };
{
({} as JSX.IntrinsicElements).img;
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { src: ((product.image)), class: ("img-fluid product-img"), alt: ("..."), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("card-body"), };
{
({} as JSX.IntrinsicElements).h6;
({} as JSX.IntrinsicElements).h6;
(__VLS_x as JSX.IntrinsicElements)['h6'] = { class: ("card-title"), };
(product.name);
}
{
({} as JSX.IntrinsicElements).p;
({} as JSX.IntrinsicElements).p;
(__VLS_x as JSX.IntrinsicElements)['p'] = { class: ("card-text"), };
(product.details.detail);
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-4 pros-cons-list"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("card-body"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row"), };
{
({} as JSX.IntrinsicElements).h4;
({} as JSX.IntrinsicElements).h4;
(__VLS_x as JSX.IntrinsicElements)['h4'] = { class: ("card-title"), };
}
{
({} as JSX.IntrinsicElements).ul;
({} as JSX.IntrinsicElements).ul;
(__VLS_x as JSX.IntrinsicElements)['ul'] = { class: ("list-group list-group-flush"), };
for (const [pro, index] of (await import('./__VLS_types.js')).getVForSourceType(product.comparison.pros.pros)) {
{
({} as JSX.IntrinsicElements).li;
({} as JSX.IntrinsicElements).li;
(__VLS_x as JSX.IntrinsicElements)['li'] = { key: ((index)), class: ("list-group-item"), };
(pro);
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row"), };
{
({} as JSX.IntrinsicElements).h4;
({} as JSX.IntrinsicElements).h4;
(__VLS_x as JSX.IntrinsicElements)['h4'] = { class: ("card-title"), };
}
{
({} as JSX.IntrinsicElements).ul;
({} as JSX.IntrinsicElements).ul;
(__VLS_x as JSX.IntrinsicElements)['ul'] = { class: ("list-group list-group-flush"), };
for (const [con, index] of (await import('./__VLS_types.js')).getVForSourceType(product.comparison.cons.cons)) {
{
({} as JSX.IntrinsicElements).li;
({} as JSX.IntrinsicElements).li;
(__VLS_x as JSX.IntrinsicElements)['li'] = { key: ((index)), class: ("list-group-item"), };
(con);
}
}
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-3 sales-channel"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("card-body"), };
{
({} as JSX.IntrinsicElements).h4;
({} as JSX.IntrinsicElements).h4;
(__VLS_x as JSX.IntrinsicElements)['h4'] = { class: ("card-title"), };
}
{
({} as JSX.IntrinsicElements).ul;
({} as JSX.IntrinsicElements).ul;
(__VLS_x as JSX.IntrinsicElements)['ul'] = { class: ("list-group list-group-flush sales-channel-list"), };
for (const [channel] of (await import('./__VLS_types.js')).getVForSourceType(product.salesChannel.saleslist)) {
{
({} as JSX.IntrinsicElements).li;
({} as JSX.IntrinsicElements).li;
(__VLS_x as JSX.IntrinsicElements)['li'] = { key: ((__VLS_ctx.index)), class: ("list-group-item d-flex justify-content-between align-items-center"), };
// @ts-ignore
[index,];
{
({} as JSX.IntrinsicElements).a;
({} as JSX.IntrinsicElements).a;
(__VLS_x as JSX.IntrinsicElements)['a'] = { href: ((channel.link)), class: ("channel-link"), };
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("channel-name"), };
(channel.name);
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("channel-price"), };
(channel.price);
}
}
}
}
}
}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses['row'];
__VLS_styleScopedClasses['recommend'];
__VLS_styleScopedClasses['text-center'];
__VLS_styleScopedClasses['mb-5'];
__VLS_styleScopedClasses['recommend'];
__VLS_styleScopedClasses['card'];
__VLS_styleScopedClasses['mb-4'];
__VLS_styleScopedClasses['row'];
__VLS_styleScopedClasses['g-0'];
__VLS_styleScopedClasses['col-md-5'];
__VLS_styleScopedClasses['img-fluid'];
__VLS_styleScopedClasses['product-img'];
__VLS_styleScopedClasses['card-body'];
__VLS_styleScopedClasses['card-title'];
__VLS_styleScopedClasses['card-text'];
__VLS_styleScopedClasses['col-md-4'];
__VLS_styleScopedClasses['pros-cons-list'];
__VLS_styleScopedClasses['card-body'];
__VLS_styleScopedClasses['row'];
__VLS_styleScopedClasses['card-title'];
__VLS_styleScopedClasses['list-group'];
__VLS_styleScopedClasses['list-group-flush'];
__VLS_styleScopedClasses['list-group-item'];
__VLS_styleScopedClasses['row'];
__VLS_styleScopedClasses['card-title'];
__VLS_styleScopedClasses['list-group'];
__VLS_styleScopedClasses['list-group-flush'];
__VLS_styleScopedClasses['list-group-item'];
__VLS_styleScopedClasses['col-md-3'];
__VLS_styleScopedClasses['sales-channel'];
__VLS_styleScopedClasses['card-body'];
__VLS_styleScopedClasses['card-title'];
__VLS_styleScopedClasses['list-group'];
__VLS_styleScopedClasses['list-group-flush'];
__VLS_styleScopedClasses['sales-channel-list'];
__VLS_styleScopedClasses['list-group-item'];
__VLS_styleScopedClasses['d-flex'];
__VLS_styleScopedClasses['justify-content-between'];
__VLS_styleScopedClasses['align-items-center'];
__VLS_styleScopedClasses['channel-link'];
__VLS_styleScopedClasses['channel-name'];
__VLS_styleScopedClasses['channel-price'];
}
declare var __VLS_slots: {};
return __VLS_slots;
}
