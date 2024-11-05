<template>
  <Transition name="phone">
    <div class="phone-number-mask" v-if="open" @click.self="$emit('onCancel')">
      <div class="phone-number-dialog">
        <template v-for="item in icons">
          <div
            class="item"
            :class="{ active: item.code === active.code }"
            @click.stop="handleSelect(item)"
          >
            <div class="info">
              <img class="country" :src="item.icon" alt="icon" />
              <div class="label">{{ item.label }}</div>
            </div>
            <div class="code">+{{ item.code }}</div>
          </div>
        </template>
      </div>
    </div>
  </Transition>
</template>

<script>
import icons from './data';

export default {
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  emits: ['onCancel', 'onSelect'],
  data() {
    return {
      icons,
      active: {
        icon: '',
        code: '',
        label: '',
        lang: ''
      }
    };
  },
  mounted() {
    const { icon, code, label, lang } = icons[0];
    this.active.icon = icon;
    this.active.code = code;
    this.active.label = label;
    this.active.lang = lang;

    this.$emit('onSelect', icons[0]);
  },
  methods: {
    handleSelect(item) {
      const { icon, code, label, lang } = item;
      this.active.icon = icon;
      this.active.code = code;
      this.active.label = label;
      this.active.lang = lang;
      this.$emit('onSelect', item);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';

.phone-enter-active,
.phone-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.phone-enter-from,
.phone-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
