<template>
  <ComponentPage title="Empty State" :demos="[{ title: 'Empty State' }]">
    <template #description>
      This is where we add a short description of <p-code inline>
        p-empty-state
      </p-code>. Describe the components intent, not hyper specific documentation that belongs on vitepress page.
    </template>

    <template #empty-state>
      <p-empty-state>
        <template #icon>
          <p-icon icon="Squares2X2Icon" />
          <p-icon icon="EllipsisHorizontalIcon" />
          <p-icon icon="UserIcon" />
        </template>

        <template #heading>
          Create a workspace to get started
        </template>

        <template #description>
          Workspaces allow teams to organize flows into custom dashboards and
          easily share them with others.
        </template>

        <template #actions>
          <p-button>
            Create Workspace
            <p-icon icon="PlusIcon" class="ml-1 w-4 h-4" />
          </p-button>
        </template>
      </p-empty-state>
    </template>
  </ComponentPage>
</template>

<script lang="ts" setup>
  import { PEmptyState, PButton, PIcon } from '@/components'
  import ComponentPage from '@/demo/components/ComponentPage.vue'
</script>