<template>
  <ComponentPage
    title="Stepper"
    :demos="[
      { title: 'Min and Max Props' },
      { title: 'Step Size' },
    ]"
  >
    <template #description>
      This is where we add a short description of <p-code inline>
        p-stepper
      </p-code>. Describe the components intent, not hyper specific documentation that belongs on vitepress page.
    </template>

    <template #min-and-max-props>
      <div class="stepper__demo">
        <p-stepper
          v-model="minMaxValue"
          :min="min"
          :max="max"
        />
        <p-divider />
        <div class="stepper__demo-options">
          <p-label label="Min Value">
            <p-number-input v-model="min" />
          </p-label>
          <p-label label="Max Value">
            <p-number-input v-model="max" />
          </p-label>
        </div>
        {{ { minMaxValue } }}
        <p-button
          inset
          class="stepper__value-reset-button"
          size="xs"
          :disabled="minMaxValue === null"
          @click="minMaxValue = null"
        >
          Reset Value
        </p-button>
      </div>
    </template>

    <template #step-size>
      <div class="stepper__demo">
        <p-stepper
          v-model="stepValue"
          :step="step"
        />
        <p-divider />
        <div class="stepper__demo-options">
          <p-label label="Step">
            <p-number-input v-model="step" />
          </p-label>
        </div>
        {{ { stepValue } }}
        <p-button
          inset
          class="stepper__value-reset-button"
          size="xs"
          :disabled="stepValue === null"
          @click="stepValue = null"
        >
          Reset Value
        </p-button>
      </div>
    </template>
  </ComponentPage>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import ComponentPage from '@/demo/components/ComponentPage.vue'

  const min = ref<number | null>(null)
  const max = ref<number | null>(null)
  const step = ref<number>(0.25)

  const minMaxValue = ref<number | null>(null)
  const stepValue = ref<number | null>(null)
</script>

<style>
.stepper__demo { @apply
  flex
  flex-col
  justify-start
  gap-4
}

.stepper__demo .p-stepper {
  max-width: 120px;
}

.stepper__demo-options { @apply
  flex
  gap-2
}

.stepper__value-reset-button { @apply
  self-start
}
</style>