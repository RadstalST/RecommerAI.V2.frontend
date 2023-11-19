<script setup>
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
    <div class=" w-full">
        <button class="btn btn-primary" @click="handleCreateDoc">Create Persona</button>
        <button class="btn  btn-secondary ml-2" @click="loadDocuments">Load Persona</button>
        <input type="text" v-model="search" class="form-control  mt-2" placeholder="Search documents">
        <div v-if="loading">Loading...</div>
        <div v-if="error" class="text-danger">{{ error }}</div>
        <div v-for="doc in filteredDocs" :key="doc._id">
            <div v-if="doc.name !== null">
                {{ doc.name }} | {{ doc.description }} | click something here to add create flow
            </div>
            <hr>
        </div>
        <div>
            <button v-if="currentPage > 1" class="btn btn-primary" @click="previousPage">Previous</button>
            <button v-if="currentPage < totalPages" class="btn btn-primary" @click="nextPage">Next</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PersonaComponent',
    props: {},
    data() {
        return {
            docs: [],
            filteredDocs: [],
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
            this.loading = true;
            this.error = null;
            try {
                const response = await axios.get('/proxy/v2/persona/mine', {
                    headers: {
                        'Authorization': 'Bearer ' + this.access_token
                    },
                    params: {
                        page: this.currentPage,
                        limit: this.pageSize
                    }
                });
                this.docs = response.data;
                this.totalPages = response.headers['x-total-pages'];
                this.filteredDocs = this.docs;
                this.success = true;
            } catch (error) {
                console.log("error", error);
                if (error.response.status === 401) {
                    // Handle unauthorized error
                }
                this.error = 'Error loading documents.';
            } finally {
                this.loading = false;
            }
        },
        async handleCreateDoc() {
            const payload = {
                "name": "my cute persona",
                "description": "this is a test persona",
                user_id: 0 // will get overridden by the backend don't worry
            }
            try {
                const response = await axios.post('/proxy/v2/persona/', payload, {
                    headers: {
                        'Authorization': 'Bearer ' + this.access_token
                    }
                });
                console.log("persona", response);
                // this.docs = response.data
            } catch (error) {
                console.log("error", error);
            }
        },
        searchDocuments() {
            this.filteredDocs = this.docs.filter(doc =>
                doc.name.toLowerCase().includes(this.search.toLowerCase()) ||
                doc.description.toLowerCase().includes(this.search.toLowerCase())
            );
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
    watch: {
        search() {
            this.searchDocuments();
        }
    }
}

</script>