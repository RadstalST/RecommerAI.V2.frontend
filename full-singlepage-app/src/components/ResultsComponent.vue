<template>
  <div>
    <div v-for="product in products" :key="product.id" class="card mb-4">
      <div class="row g-0">
        <!-- Product Image & Name -->
        <div class="col-md-5">
          <img :src="product.image" class="img-fluid product-img" alt="...">
          <div class="card-body">
            <h6 class="card-title">{{ product.name }}</h6>
            <p class="card-text">{{ product.details.detail }}</p>
          </div>
        </div>

        <!-- Comparison (Pros/Cons) -->
        <div class="col-md-4 pros-cons-list">
          <div class="card-body">
            <div class="row">
              <h4 class="card-title">Pros</h4>
              <ul class="list-group list-group-flush">
                <li v-for="(pro, index) in product.comparison.pros.pros" :key="index" class="list-group-item">- {{ pro }}</li>
              </ul>
            </div>
            <div class="row">
              <h4 class="card-title">Cons</h4>
              <ul class="list-group list-group-flush">
                <li v-for="(con, index) in product.comparison.cons.cons" :key="index" class="list-group-item">- {{ con }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Sales Channel -->
        <div class="col-md-3 sales-channel">
          <div class="card-body">
            <h4 class="card-title">Sales Channel</h4>
            <ul class="list-group list-group-flush sales-channel-list">
              <li v-for="channel in product.salesChannel.saleslist" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
                <a :href="channel.link" class="channel-link">
                  <span class="channel-name">{{ channel.name }}</span>
                  <span class="channel-price">{{ channel.price }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- ProductModal Component -->
    <!-- <product-modal v-if="currentProduct" :product="currentProduct" /> -->
  </div>
</template>


<script lang="ts">
import { ref, watch, onMounted, toRefs } from 'vue';
import axios from 'axios'
// import ProductDetails from './ProductDetails.vue';

export default {
  // components: {
  //   ProductDetails
  // },
  props: {
    searchValues: {
      type: Object as PropType<{ searchInput: string; summary: string, product_type: string }>,
      default: () => ({ searchInput: '', summary: '', product_type: '' })
    },
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
        "salesChannel": {"saleslist":[
          {
            "name":"Verizon",
            "price":"$199.99",
            "link":"https://www.verizon.com/products/apple-airpods-pro-2nd-generation?sku=sku5600070"
          },{
            "name":"CDW",
            "price":"$301.99",
            "link":"https://www.cdw.com/product/airpods-pro-2nd-generation-with-magsafe-case-usb-u2011c/7595937?cm_ven=acquirgy&cm_cat=google&cm_pla=NA-NA-Apple_HE&cm_ite=7595937"
          },{
            "name":"UScellular",
            "price":"$249.99",
            "link":"https://www.uscellular.com/accessories/apple-airpods-pro-2nd-generation-usb-c"
          }
        ]},
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
        "salesChannel": {"saleslist":[
          {
            "name":"Verizon",
            "price":"$199.99",
            "link":"https://www.verizon.com/products/apple-airpods-pro-2nd-generation?sku=sku5600070"
          },{
            "name":"CDW",
            "price":"$301.99",
            "link":"https://www.cdw.com/product/airpods-pro-2nd-generation-with-magsafe-case-usb-u2011c/7595937?cm_ven=acquirgy&cm_cat=google&cm_pla=NA-NA-Apple_HE&cm_ite=7595937"
          },{
            "name":"UScellular",
            "price":"$249.99",
            "link":"https://www.uscellular.com/accessories/apple-airpods-pro-2nd-generation-usb-c"
          }
        ]},
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
    onMounted(fetchResult);
    return {
      products
    };
  }
}
</script>


<style scoped>
.results {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.product-card {
  border: 1px solid #e0e0e0;
  padding: 1rem;
  border-radius: 5px;
}

.product-card img {
  max-width: 100%;
}

.card-body{
  padding: 10px;
}

.card{
  font-size: 0.8em; 
  padding: 20px;
}

.card .product-img{
  border-radius: var(--bs-border-radius) !important;
  width: 100%; /* or any specific size */
  height: auto; /* maintain aspect ratio */
  aspect-ratio: 1 / 1; /* 1:1 aspect ratio */
  object-fit: cover; /* ensures the image covers the area without distortion */
}

.card .row {
  padding-bottom: 20px;
}

.card .card-title{
  font-weight: bold;
}

.card .sales-channel{
  background: rgba(101, 59, 217, .65);
  color: white;
  border-radius: 10px;
  padding: 10px;  
} 

.card a.channel-link {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
  color: white;
  border-bottom: 1px solid #e0e0e0; /* Add a super light grey line */
}

.card a.channel-link:hover {
  color: hsl(256, 68%, 90%) !important;
  transition: 0.2s;
}

.card .sales-channel .channel-link .channel-name {
  text-align: left;
}

.card .sales-channel .channel-link .channel-price {
  text-align: right;
}


.pros-cons-list {
  padding-left: 10px;
}


.price {
  font-weight: bold;
}

.sales-channel-list .badge {
  margin-left: auto; /* Pushes the badge to the right */
  font-size: 0.8em; 
  background-color: rgba(101, 59, 217) !important; /* removes the blue background */
  border: 1px solid #dee2e6; /* optional: adds a subtle border for definition */
}
.sales-channel-list li {
  padding: 5px 0; /* Pushes the badge to the right */
}


.list-group-item {
  background-color: transparent;
  border: none;
  text-decoration: none;
  padding: 0.5rem 1rem; /* Provides padding within the list item */
}

.list-group-item a {
  text-decoration: none; /* Remove underline from links */
}
</style>