<template>
  <ComponentPage
    title="Toasts"
    :demos="[
      { title: 'Basic' },
      { title: 'Success' },
      { title: 'Error' },
      { title: 'Persistent' },
      { title: 'Using Message Component' },
    ]"
  >
    <template #description>
      This is where we add a short description of <p-code inline>
        p-toasts
      </p-code>. Describe the components intent, not hyper specific documentation that belongs on vitepress page.
    </template>

    <template #basic>
      <p-button @click="defaultToast">
        Show Toast
      </p-button>
    </template>
    <template #success>
      <p-button @click="successToast">
        Show Toast
      </p-button>
    </template>
    <template #error>
      <p-button @click="errorToast">
        Show Toast
      </p-button>
    </template>
    <template #persistent>
      <p-button @click="noTimeoutToast">
        Show Toast
      </p-button>
    </template>
    <template #using-message-component>
      <p-button @click="componentToast">
        Show Toast
      </p-button>
    </template>
  </ComponentPage>
</template>

<script lang="ts" setup>
  import { showToast } from '@/plugins/Toast'
  import ComponentPage from '@/demo/components/ComponentPage.vue'
  import ToastMessage from '@/demo/components/ToastMessage.vue'

  const defaultToast = (): void => {
    showToast('This is default message', 'default')
  }

  const successToast = (): void => {
    showToast('This is success!', 'success')
  }

  const errorToast = (): void => {
    showToast('Something went wrong..', 'error')
  }

  const noTimeoutToast = (): void => {
    showToast('Waiting for you to dismiss', 'default', { timeout: false })
  }

  const componentToast = (): void => {
    showToast(ToastMessage)
  }
</script>