<script setup>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

</script>


<template>
        <div class="m-8 w-full">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="doc in docs" :key="doc._id">
                        <td>
                            <!-- params are not working properly according to the documentation -->
                            <!-- string concatination is used instead -->
                            <RouterLink :to="'/searchdoc/'+doc._id">
                                {{ doc.title }}
                            </RouterLink>
                        </td>
                        <td>{{ doc.user_id }}</td>
                        <td>{{ doc.created_at }}</td>
                        
                    </tr>
                </tbody>
            </table>

            <div v-if="docs.length === 0" class="mt-4">No documents found.</div>

            <div v-if="loading" class="mt-4">Loading...</div>

            <div v-if="error" class="mt-4">{{ error }}</div>

            <div v-if="success" class="mt-4">Documents loaded successfully.</div>

            <div class="mt-4">
                <div class="d-flex justify-content-between">
                    <button @click="loadDocuments" class="btn btn-secondary">Refresh</button>
                    <div>
                        <button @click="previousPage" :disabled="currentPage === 1" class="btn btn-primary me-2" :class="{ 'disabled': currentPage === 1 }">Previous</button>
                        <span class="px-4 py-2">{{ currentPage }}</span>
                        <button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-secondary" :class="{ 'disabled': currentPage === totalPages }">Next</button>
                    </div>
                    <!-- create button -->
                    <button class="btn btn btn-primary ml-1" @click="handleCreateDoc"> add docs</button>
                </div>
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
        async handleCreateDoc(){

            const payload = {
                "title":"test",
                user_id: 0// will get over ridden by the backend dont worry
            }
            let response = await axios.post(
                "/proxy/v2/searchDoc/",
                payload,
                {
                    headers: {
                        'Authorization': 'Bearer ' + this.access_token
                    }
                }

            ).then((response) => {
                console.log("response",response)
                // this.docs = response.data
                
            }).catch((error) => {
                console.log("error",error)
               
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



