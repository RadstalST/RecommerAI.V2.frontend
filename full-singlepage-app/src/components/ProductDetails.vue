<template>
  <div class="modal fade" :id="'modal' + product.id" tabindex="-1" aria-labelledby="productDetailsModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="productDetailsModalLabel">{{ product.name }} Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- Product Specs -->
            <div class="col-md-4">
              <h6>Product specs</h6>
              <!-- Include product specs here -->
            </div>
            <!-- Positive Review -->
            <div class="col-md-4">
              <h6>Pos review</h6>
              <p>{{ product.comparison.pros.join(', ') }}</p>
            </div>
            <!-- Negative Review -->
            <div class="col-md-4">
              <h6>Neg review</h6>
              <p>{{ product.comparison.cons.join(', ') }}</p>
            </div>
          </div>
          <div class="row mt-4">
            <!-- Recommender Notes -->
            <div class="col">
              <h6>Recommender notes</h6>
              <!-- Example recommender note -->
              <p>xxx - good bad etc with AI description overview summary</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  mounted() {
    new bootstrap.Modal(this.$el).show();
  }
};
</script>
