import { onMounted, ref, toRefs, PropType } from 'vue';
import axios from 'axios';

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
recommendation: Object
},
setup(props) {
const { searchValues } = toRefs(props);
const isLoading = ref(false);
const recommendation = ref({});
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
// const mockupRecommend = {"item":{"recommendation": {
//       "productname": "Jabra Elite 8 Active",
//       "comparison": "Jabra Elite 8 Active is best for all kinds of workouts and can be used beyond the gym. It is a true wireless earbud. Anker Soundcore Sport X10 is recommended for sports and is known for its sturdy, sweatproof, and tangle-proof features. It maintains a strong connection with your device throughout your workout. Sony LinkBuds is a fully open true wireless headphone that is popular among runners and bikers. It also features noise canceling capabilities.",
//       "suggestions": "Given your requirements for a sports headphone and a Bluetooth headphone for working out, all three options could potentially meet your needs. However, the Jabra Elite 8 Active stands out as it is specifically designed for all kinds of workouts and can be used beyond the gym. It is also a true wireless earbud, which means you won't have to deal with any wires during your workout."
//     },
//     "productlists": {
//       "products": [
//         {
//           "name": "Jabra Elite 8 Active",
//           "description": "The Best Headphones for All Kinds of Workouts. It is a true wireless earbud that can be used beyond the gym."
//         },
//         {
//           "name": "Anker Soundcore Sport X10",
//           "description": "Recommended sports headphones. It is known for its sturdy, sweatproof, and tangle-proof features."
//         },
//         {
//           "name": "Sony LinkBuds - Fully Open True Wireless Headphones",
//           "description": "It is a fully open true wireless headphone that is popular among runners and bikers."
//         }
//       ]
//     }
//   }
// };
const mockupData = [
{
"name": "Jabra Elite 8 Active",
"image": "https://www.cnet.com/a/img/resize/c509cb4f09bfbeeb66057711c679e385cff3e238/hub/2023/08/30/8ce6c1da-3894-4a47-8a1e-d1a7b8781c14/jabra-elite-8-earbuds-2.jpg?auto=webp&fit=crop&height=1200&width=1200",
"comparison": {
"pros": {
"name": "Jabra Elite 8 Active",
"pros": [
"Good for workouts and daily use",
"Comfortable and well-built",
"Rated IP68 for dust and water resistance",
"Rugged design",
"Delivers punchy audio",
"Ideal exercise companions",
"Offers a boost in ANC performance",
"Excellent sound and great battery life"
]
},
"cons": {
"name": "Jabra Elite 8 Active",
"cons": [
"ANC is not on par with Apple, Bose, or Sony flagship earbuds",
"Sound quality out of the box was considered terrible by some users"
]
}
},
"salesChannel": {
"saleslist": [
{
"name": "Lazada",
"price": "฿6,990.00 - ฿7,690.00",
"link": "https://www.lazada.co.th/shop-headphones-headsets/jabra/"
}
]
},
"details": {
"name": "Jabra Elite 8 Active",
"detail": "The Jabra Elite 8 Active is a Bluetooth Sports True Wireless Earbuds with Secure in-Ear Fit for All-Day Comfort. It features Military Grade Durability and Active Noise Cancellation. It is priced at $199.99."
}
},
{
"name": "Anker Soundcore Sport X10",
"image": "https://www.digitaltrends.com/wp-content/uploads/2022/06/Anker-Soundcore-Sport-X10-front.jpg?p=1",
"comparison": {
"pros": {
"name": "Anker Soundcore Sport X10",
"pros": [
"Quality noise cancellation",
"Bold sound",
"Customizable fit",
"Fitness-friendly design",
"Comfort",
"Good battery life",
"Sturdy build",
"Active noise cancellation",
"Transparency mode"
]
},
"cons": {
"name": "Anker Soundcore Sport X10",
"cons": [
"There seems to be a bug that Anker has ignored, which is considered unprofessional",
"The lack of touch controls is a surprise and could be seen as a disadvantage"
]
}
},
"salesChannel": {
"saleslist": [
{
"name": "Verizon",
"price": "2,275 THB",
"link": "https://www.verizon.com/products/soundcore-by-anker-sport-x10-true-wireless-headphones?sku=sku6000514"
},
{
"name": "Abt Electronics & Appliances",
"price": "2,275 THB",
"link": "https://www.abt.com/Soundcore-by-Anker-Sport-X10-True-Wireless-Workout-Earbuds-in-Black-A3961Z11/p/199089.html?utm_source=google&utm_medium=sc_organic&utm_campaign=surfaces%20across%20google&utm_source=google&utm_medium=sc_organic&utm_campaign=surfaces%20across%20google"
},
{
"name": "AliExpress.com",
"price": "1,835 THB",
"link": "https://s.click.aliexpress.com/deep_link.htm?aff_short_key=UneMJZVf&dl_target_url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F3256805896381286.html%3F_randl_currency%3DUSD%26_randl_shipto%3DUS%26src%3Dgoogle"
}
]
},
"details": {
"name": "Anker Soundcore Sport X10",
"detail": "The Anker Soundcore Sport X10 is a model of wireless Bluetooth 5.2 workout headphones. They feature 6 microphones and noise cancellation technology, unique over-ear hooks that rotate up to 210° for a secure and comfortable fit, and an IPX7-rated waterproof build. The Soundcore app allows customization and includes in-app breathing exercises. They are praised for their powerful, bass-forward sound and noise cancellation capabilities, and are sold at a price of $79."
}
}, {
"name": "Sony LinkBuds - Fully Open True Wireless Headphones",
"image": "https://m.media-amazon.com/images/I/41nBcPIusdL._AC_UF894,1000_QL80_.jpg",
"comparison": {
"pros": {
"name": "Sony LinkBuds - Fully Open True Wireless Headphones",
"pros": [
"Truly wireless design",
"Open-ear feature for ambient sounds",
"Built-in Alexa",
"Suitable for sports and mobile phone use"
]
},
"cons": {
"name": "Sony LinkBuds - Fully Open True Wireless Headphones",
"cons": [
"Truly wireless design",
"Open-ear feature for ambient sounds",
"Built-in Alexa",
"Suitable for sports and mobile phone use"
]
}
},
"salesChannel": {
"saleslist": [
{
"name": "eBay",
"price": "$69.99",
"link": "https://www.ebay.com/itm/196029320029?chn=ps&mkevt=1&mkcid=28"
},
{
"name": "Sony",
"price": "$129.99",
"link": "https://electronics.sony.com/audio/headphones/truly-wireless-earbuds/p/wfl900-h"
},
{
"name": "Sony",
"price": "$249.99",
"link": "https://electronics.sony.com/audio/headphones/all-headphones/p/wfl900uc-h"
}
]
},
"details": {
"name": "Sony LinkBuds - Fully Open True Wireless Headphones",
"detail": "Sony LinkBuds are true wireless open-ear earbuds designed for sports and mobile phone use. They have a battery life of 5.5 hours and connect via Bluetooth. They feature an open-ring design for ambient sounds and have Alexa built-in."
}
}
];


const fetchResult = async () => {
try {
if (localStorage.getItem('access_token') == null) {
return;
}
// Construct the URL with the query parameter
const url = '/proxy/v2/AI/search/productinfodetail/';
isLoading.value = true;
console.log(url);
const response = await axios.get(url, {
params: {
searchid: 'item',
desire: searchValues.value.searchInput,
summary_desire: searchValues.value.summary,
product_type: searchValues.value.product_type
},
headers: {
Authorization: 'Bearer ' + localStorage.getItem('access_token'),
'Content-Type': 'application/json',
},
});

// Check if the response status is OK (2xx)
if (response.status >= 200 && response.status < 300) {
const data = response.data;
// options.value = data.list_variations;
// product_type.value = data.product_type;
// console.log(url)
console.log(data);
recommendation.value = data.item.recommendation;
// Now, data will contain the response from the URL with the 'desire' parameter
// You can access the 'desire' parameter value in the response if it's included.
} else {
throw new Error(`HTTP error! status: ${response.status}`);
}
} catch (error) {
console.error('Fetching options failed:', error);
} finally {
isLoading.value = false; // Set loading state to false
}
};


const products = ref(mockupData);
// const recommendation = ref(mockupRecommend.item.recommendation);
onMounted(fetchResult);

return {
products,
recommendation,
isLoading,
};
}
});
