<template>
  <Layout>
    <div class="recipe-content">
      <div class="return-link">
        <g-link to="/recipes">Go back to the list of recipes</g-link>
      </div>
      <section class="section">
        <div class="container">
          <!-- <p class="title is-1 has-text-weight-bold has-text-centered">{{ $page.recipe.name }}</p> -->
          <div class="columns is-centered is-vcentered">
            <div class="column is-5">
              <h1 class="title is-1 has-text-weight-semibold">
                {{ $page.recipe.name }}
              </h1>
              <h2 class="subtitle is-3">Japan</h2>
            </div>
            <div class="column is-7 has-text-centered">
              <div>
                <img :src="$page.recipe.image" />
              </div>
            </div>
          </div>
          <div class="columns is-centered">
            <!-- <div class="column is-4 image">
              <img :src="$page.recipe.image" />
            </div> -->
            <div class="column is-10">
              <div class="block">
                <p class="title is-4 has-text-weight-bold">Ingredients</p>
              </div>
              <div class="icon-and-text">
                <p class="has-text-weight-semibold">For</p>
                <b-field>
                  <b-numberinput
                    v-model="amount"
                    size="is-small"
                    min="1"
                  ></b-numberinput>
                </b-field>
                <p>{{ $page.recipe.amount.unit }}</p>
              </div>
              <div class="content">
                <ul>
                  <li
                    v-for="(ingredient, i) in $page.recipe.ingredients"
                    :key="i"
                  >
                    {{ ingredient.name }} :
                    {{ scaleQuantity(ingredient.quantity) }}
                    {{ ingredient.unit }}
                  </li>
                  <!-- here is no amout ingredients -->
                  <li
                    v-for="(ingredient, i) in $page.recipe.otherIngredients"
                    :key="i"
                  >
                    {{ ingredient.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="columns is-centered">
            <div class="column is-10">
              <div>
                <p class="title is-4 has-text-weight-bold">Steps</p>
              </div>
              <div class="content">
                <ol type="1">
                  <li v-for="(step, i) in $page.recipe.steps" :key="i">
                    {{ step.action }}
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "Recipe",
  data() {
    return {
      amount: 0,
    };
  },
  mounted() {
    this.amount = this.$page.recipe.amount.quantity;
  },
  methods: {
    scaleQuantity(quantity) {
      return this.amount * (quantity / this.$page.recipe.amount.quantity);
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
  recipe(id: $id) {
    name
    image
    amount {
      quantity
      unit
    }
    ingredients {
      name
      quantity
      unit
    }
    otherIngredients {
      name
    }
    steps {
      name
      action
    }
  }
}
</page-query>

<style scoped>
.recipe-content {
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 6rem;
}
.recipe-title {
  height: 3rem;
  margin-bottom: 0.2rem;
}

/* .columns {
  height: calc(100% - 3rem);
} */

.ingredients-and-image {
  padding-top: 0;
  padding-bottom: 0;
  height: 100%;
}

.ingredients-container {
  height: 50%;
  margin-bottom: 1rem;
}

.icon-and-text {
  display: flex;
  align-items: center;
}

.icon {
  position: relative;
  top: 0.25rem;
  left: 0.25rem;
}

.ingredients-title-container {
  height: 2rem;
}

.ingredients-quantities {
  height: 2rem;
}

.ingredients {
  padding-left: 2rem;
  height: calc(100% - 2rem - 2rem);
  overflow: scroll;
}

.ingredients-amount {
  list-style-type: disc;
  margin-top: 0px;
}

.ingredients-no-amount {
  list-style-type: disc;
  margin-top: 0.15rem;
}

.image {
  height: calc(50% - 1rem);
  /* padding: 1em 1em 1em 1em; */
}

.image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  /* padding: 1em 1em 1em 1em; */
}

.steps-container {
  height: 100%;
}

.steps {
  padding-left: 2rem;
  padding-right: 2rem;
  list-style-type: decimal;
  height: calc(100% - 2rem);
  overflow: auto;
}
</style>
