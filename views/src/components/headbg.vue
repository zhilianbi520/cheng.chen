<template>
  <div id="header">
    <main>
      <div class="segmenter"></div>
      <h2 class="trigger-headline trigger-headline--hidden"><span>个</span><span>人</span><span>简</span><span>历</span></h2>
      <div class="bottom-nav">
        <button class="btn btn--trigger btn--hidden">点我  点我</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'headbg',
  data() {
    return {
      header: 'headercommon',
    };
  },
  created: () => {
  },
  mounted() {
    this.changebg();
  },
  methods: {
    changebg() {
      const self = this;
      const headline = document.querySelector('.trigger-headline');
      const trigger = document.querySelector('.btn--trigger');
      let segmenter = window.Segmenter;
      segmenter = new Segmenter(document.querySelector('.segmenter'), {
        onReady() {
          trigger.classList.remove('btn--hidden');
          trigger.addEventListener('click', function () {
            setTimeout(() => {
              self.$router.push('main');
            }, 2000);
            segmenter.animate();
            headline.classList.remove('trigger-headline--hidden');
            this.classList.add('btn--hidden');
          });
        },
      });
    },
  },
};
</script>

<style scoped>
  .segmenter{
    background: url(../assets/headerbg.jpg) 50% 48%;
  }
</style>
