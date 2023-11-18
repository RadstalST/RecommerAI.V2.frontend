<script setup>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
    <div>
        <table class="w-full border-2">
            <thead>
                <tr>
                    <th class="px-4 py-2">Title</th>
                    <th class="px-4 py-2">Author</th>
                    <th class="px-4 py-2">Created Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="doc in docs" :key="doc.id">
                    <td class="px-4 py-2">{{ doc.title }}</td>
                    <td class="px-4 py-2">{{ doc.user_id }}</td>
                    <td class="px-4 py-2">{{ doc.created_at }}</td>
                </tr>
            </tbody>
        </table>

        <div v-if="docs.length === 0" class="mt-4">No documents found.</div>

        <div v-if="loading" class="mt-4">Loading...</div>

        <div v-if="error" class="mt-4">{{ error }}</div>

        <div v-if="success" class="mt-4">Documents loaded successfully.</div>

        <div class="mt-4">
            <button @click="loadDocuments" class="px-4 py-2 bg-blue-500 text-white rounded">refresh</button>
        </div>

        <!-- <div class="mt-4">
            <input type="text" v-model="search" placeholder="Search..." class="px-4 py-2 border border-gray-300 rounded" />
            <button @click="searchDocuments" class="px-4 py-2 bg-blue-500 text-white rounded">Search</button>
        </div> -->

        <div class="mt-4">
            <button @click="previousPage" :disabled="currentPage === 1" class="px-4 py-2 bg-blue-500 text-white rounded" :class="{ 'opacity-50 cursor-not-allowed': currentPage === 1 }">Previous</button>
            <span class="px-4 py-2">{{ currentPage }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-blue-500 text-white rounded" :class="{ 'opacity-50 cursor-not-allowed': currentPage === totalPages }">Next</button>
        </div>
    </div>
</template>


<script>
export default {
    name: 'SearchDocsTable',
    props: {
       
    },
    data() {
        return {
            docs: [],
            search: '',
            loading: false,
            error: null,
            success: false,
            user: null,
            access_token: localStorage.getItem('access_token'),
            currentPage: 1,
            pageSize: 5,
            totalPages: 0
        }
    },
    methods: {
        async loadDocuments() {
            // TODO: Implement logic to load documents from API using access_token
            // Set the docs, totalPages, and success/error based on the API response
            let response = await axios.get(
                "/proxy/v2/searchDoc/mine",{
                    headers: {
                        'Authorization': 'Bearer ' + this.access_token
                    },
                    params: {
                        page: this.currentPage,
                        limit: this.pageSize
                    }
                }
            ).then((response) => {
                console.log("response",response)
                this.docs = response.data
                
            }).catch((error) => {
                console.log("error",error)
                if (error.response.status === 401) {
                }
            })

        },
        searchDocuments() {
            // TODO: Implement logic to search documents based on the search query
            // Set the docs, totalPages, and success/error based on the search results
        },
        previousPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.loadDocuments();
            }
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.loadDocuments();
            }
        }
    },
    beforeMount() {
        this.loadDocuments();
    },
}
</script>



