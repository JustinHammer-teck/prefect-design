import { Section } from '../../router/routeRecords'

export const components: Section = {
  breadCrumbs: () => import('./BreadCrumbs.vue'),
  button: () => import ('./Buttons.vue'),
  card: () => import ('./Card.vue'),
  code: () => import ('./Code.vue'),
  divider: () => import ('./Divider.vue'),
  emptyState: () => import ('./EmptyState.vue'),
  forms: () => import ('./Forms.vue'),
  iconButtonMenu: () => import ('./IconButtonMenu.vue'),
  iconText: () => import ('./IconText.vue'),
  keyValue: () => import ('./KeyValue.vue'),
  links: () => import ('./Links.vue'),
  listItems: () => import ('./ListItems.vue'),
  modals: () => import ('./Modals.vue'),
  overflowMenu: () => import ('./OverflowMenu.vue'),
  popOver: () => import ('./PopOver.vue'),
  tab: () => import ('./Tab.vue'),
  tables: () => import ('./Tables.vue'),
  tags: () => import ('./Tags.vue'),
  toasts: () => import ('./Toasts.vue'),
  typography: () => import ('./Typography.vue'),
}