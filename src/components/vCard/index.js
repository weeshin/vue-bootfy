import vCard from './vCard.vue';
import vCardBlock from './vCardBlock.vue';
import vCardBlockquote from './vCardBlockquote.vue';
import vCardBody from './vCardBody.vue';
import vCardColumns from './vCardColumns.vue';
import vCardDeck from './vCardDeck.vue';
import vCardFooter from './vCardFooter.vue';
import vCardHeader from './vCardHeader.vue';
import vCardImg from './vCardImg.vue';
import vCardImgOverlay from './vCardImgOverlay.vue';
import vCardLink from './vCardLink.vue';
import vCardText from './vCardText.vue';
import vCardTitle from './vCardTitle.vue';

export default function install(Vue) {
  Vue.component('v-card', vCard);
  Vue.component('v-card-block', vCardBlock);
  Vue.component('v-card-blockquote', vCardBlockquote);
  Vue.component('v-card-body', vCardBody);
  Vue.component('v-card-columns', vCardColumns);
  Vue.component('v-card-deck', vCardDeck);
  Vue.component('v-card-footer', vCardFooter);
  Vue.component('v-card-header', vCardHeader);
  Vue.component('v-card-img', vCardImg);
  Vue.component('v-card-img-overlay', vCardImgOverlay);
  Vue.component('v-card-link', vCardLink);
  Vue.component('v-card-text', vCardText);
  Vue.component('v-card-title', vCardTitle);
}
