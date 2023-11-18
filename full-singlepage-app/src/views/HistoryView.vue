<template>
    <div>
        <div v-for="item in searchHistory" :key="item.id">
            <i class="search-icon"></i>
            <span>{{ item.prompt }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchHistory: ['apple', 'banana', 'orange', 'pear', 'grape'],
        };
    },
};
</script>