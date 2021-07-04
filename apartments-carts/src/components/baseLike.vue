<template>
  <button class="heart-btn" @click.prevent="addLike">
    <div class="heart-btn__content" :class="{ active: isLikeActive }">
      <span class="heart-btn__heart"></span>
      <span class="heart-btn__text">Like</span>
      <span class="heart-btn__numb">{{ baseLikeCount }}</span>
    </div>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isLikeActive: false,
    };
  },
  props: {
    likeCount: Number,
  },
  emits: ["update:likeCount"],
  computed: {
    baseLikeCount: {
      get() {
        return this.likeCount;
      },
      set(value) {
        this.$emit("update:likeCount", value);
      },
    },
  },
  methods: {
    addLike() {
      this.isLikeActive = true;
      this.baseLikeCount += 1;
      setTimeout(() => {
        this.isLikeActive = false;
      }, 300);
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:600&display=swap");
.heart-btn {
  position: absolute;
  top: 5px;
  right: 5px;
  &__content {
    padding: 5px 5px;
    display: flex;
    border-radius: 5px;
    background-color: #00ff00;
    opacity: 0.8;
    cursor: pointer;
  }
  &__content.active {
    opacity: 0.8;
    transform: scale(1.1);
  }
  &__heart {
    position: absolute;
    background: url("../assets/img/like.png") no-repeat;
    background-position: left;
    background-size: 2900%;
    height: 70px;
    width: 70px;
    top: 50%;
    left: 21%;
    transform: translate(-50%, -50%);
  }
  &__text {
    font-size: 21px;
    margin-left: 30px;
    color: #000;
    font-family: "Montserrat", sans-serif;
  }
  &__numb {
    font-size: 21px;
    margin-left: 7px;
    font-weight: 600;
    color: #9c9496;
    font-family: sans-serif;
  }
  &__numb.active {
    color: #000;
  }
  &__text.active {
    color: #000;
  }
  &__heart.active {
    animation: animate 0.8s steps(28) 1;
    background-position: right;
  }
}
@keyframes animate {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
</style>
