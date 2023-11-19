<template>

  <div>
    <div class="card recommend mb-4 ">
      <div v-if="isLoading" class="loading-animation text-center">
      <!-- Add your loading animation here -->
          <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <div>Loading Recommendation...</div>
      </div>
      <div v-else>
        <div class="row g-0"> 
          <div class="col-md-12">
            <h3 class="mb-3 text-center text-xl product-name">We recommend <b>{{ recommendation.productname }}</b>.</h3>
          </div>
        </div>
        <div class="row details">
          <div class="col-md-6">
            <h3 class="card-title">Proposal</h3> 
            <p>{{ recommendation.suggestions }}</p>
          </div>
          <div class="col-md-6">
            <h3 class="card-title">Comparison</h3> 
            <p>{{ recommendation.comparison }}</p>
          </div>
        </div>
      </div>
    </div>

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
            <div v-if="product.details.pros" class="row">
              <h4 class="card-title">Pros</h4>
              <ul class="list-group list-group-flush">
                <li v-for="(pro, index) in product.details.pros" :key="index" class="list-group-item">- {{ pro }}</li>
              </ul>
            </div>
            <div v-if="product.details.cons" class="row">
              <h4 class="card-title">Cons</h4>
              <ul class="list-group list-group-flush">
                <li v-for="(con, index) in product.details.cons" :key="index" class="list-group-item">- {{ con }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Sales Channel -->
        <div class="col-md-3 sales-channel">
          <div class="card-body">
            <h4 class="card-title">Sales Channel</h4>
            <ul v-if="product.salesChannel" class="list-group list-group-flush sales-channel-list">
              <li v-for="channel in product.salesChannel.saleslist" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
                <a :href="channel.link" class="channel-link d-flex flex-column">
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
import { toRefs, ref, computed, watch, onMounted } from 'vue';
import axios from 'axios'
// import ProductDetails from './ProductDetails.vue';

export default {
  // components: {
  //   ProductDetails
  // },
  props: {
    searchValues: {
      type: Object as PropType<{ searchInput: string; summary: string, product_type: string }>,
      default: () => ({ searchInput: '', summary: '', product_type: '' }),
    },
    recommendation: Object
  },

  setup(props) {
    const { searchValues } = toRefs(props);
    const isLoading = ref(false);
    const recommendation = ref({});
    const pros = ref([]);
    const cons = ref([]);
    const products = ref([]);

    console.log('ResultComponent');
    console.log(searchValues.value);
    
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
            product_type: searchValues.value.product_type,
          },
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json',
          },
        });

        // Check if the response status is OK (2xx)
        if (response.status >= 200 && response.status < 300) {
          const data = response.data;
          console.log(data);
          recommendation.value = data.item.recommendation;

          // Call another API for each product
          let productlists = data.item.productlists.products;
          for (const product of productlists) {
            await callProductinfoAPI(product.name);
            break;
          }
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } catch (error) {
        console.error('Fetching options failed:', error);
      } finally {
        isLoading.value = false; // Set loading state to false
      }
    };

    const callProductinfoAPI = async (product) => {
      try {
        // Construct the URL for the other API
        const url = '/proxy/v2/AI/productinfo/productinfo/';
        const response = await axios.get(url, {
          params: {
            productModel: product,
          },
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('access_token'),
            'Content-Type': 'application/json',
          },
        });
        // Process the response from the other API
        // Add the fetched product data to the products array
        let data = response.data;
        products.value.push(data); // Push the data object into the products array
        console.log(response.data);
      } catch (error) {
        console.error('Calling another API failed:', error);
      }
    };

    // const products = ref(mockupData);
    // const recommendation = ref(mockupRecommend.item.recommendation);

    onMounted(async () => {
      await fetchResult();
      // Load the fetched data into products
    });

    return {
      products,
      recommendation,
      isLoading,
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
  font-size: 1em; 
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
  /* display: flex;
  justify-content: space-between; */
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
  /* text-align: left; */
}

.card .sales-channel .channel-link .channel-price {
  /* text-align: right; */
  font-weight: bold;
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

.card.recommend{
  background-color: rgba(101, 59, 217, .65);;
  padding: 2em;
  border-radius: 10px;
  color: white;
}

.card.recommend .product-name{
  margin: 20px 0;
}
.card.recommend .details{
  border:1px white;
}
.card.recommend .loading-animation {
  /* Add your loading animation styles here */
  color:white;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: white;
  animation: lds-grid 1.2s linear infinite;
}
</style>
