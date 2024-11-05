import Loading from './Loading.vue';

const LoadingPlugin = {
  install(Vue) {
    const LoadingConstructor = Vue.extend(Loading);
    const instance = new LoadingConstructor();
    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);

    Vue.prototype.$loading = {
      show() {
        instance.show();
      },
      close() {
        instance.close();
      }
    };
  }
};

export default LoadingPlugin;
