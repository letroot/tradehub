import Vue from 'vue';
import Flutterwave from 'flutterwave-vue-v3';

export default () =>
  Vue.use(Flutterwave, {
    publicKey: 'FLWPUBK-0516abebba38af60a443278f6d65159c-X',
  });
