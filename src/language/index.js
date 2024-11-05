import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zhLocale from './zh';
import enLocale from './en';

Vue.use(VueI18n);

const messages = {
  zh: { ...zhLocale },
  en: { ...enLocale }
};

const i18n = new VueI18n({
  location: 'en',
  fallbackLocale: 'en',
  silentFallbackWarn: true, // 禁用缺失翻译的警告
  messages
});

export default i18n;
