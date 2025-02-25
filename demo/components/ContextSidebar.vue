<template>
  <p-context-sidebar class="context-sidebar">
    <template #header>
      <template v-if="!mobileMenuOpen">
        <div class="context-sidebar__header">
          <p-icon class="context-sidebar__icon" icon="PrefectLight" />
          <span class="context-sidebar__heading">Prefect Design</span>
        </div>
      </template>


      <p-type-ahead
        v-model="searchTerm"
        class="context-sidebar__search-box"
        placeholder="Search"
        :options="Object.keys(routeRecordsFlat)"
        @selected="selectedSearchTerm"
      >
        <template #append>
          <p-icon icon="MagnifyingGlassIcon" class="mr-2" />
        </template>
      </p-type-ahead>
    </template>

    <template v-for="record in routeRecords" :key="record.name">
      <component :is="getComponentForRecord(record)" v-bind="getContextProps(record)" />
    </template>

    <template #footer>
      <div class="context-sidebar__footer">
        <p-theme-toggle />
      </div>
    </template>
  </p-context-sidebar>
</template>

<script lang="ts" setup>
  import { PContextAccordionItem, PContextNavItem } from '@/components'
  import { ContextAccordionChildItem } from '@/types/contextAccordionChildItem'
  import { ref } from 'vue'
  import { RouteLocationRaw, RouteRecordRaw, useRouter } from 'vue-router'
  import { routeRecords } from '@/demo/router'
  import { mobileMenuOpen } from '@/demo/router/menu'
  import { routeRecordsFlat } from '@/demo/router/routeRecordsFlat'

  function getComponentForRecord(record: RouteRecordRaw): typeof PContextAccordionItem | typeof PContextNavItem {
    if (record.children) {
      return PContextAccordionItem
    }

    return PContextNavItem
  }

  function getContextProps(record: RouteRecordRaw): { title: string, children: ContextAccordionChildItem[] } | { title: string, to: RouteLocationRaw } {
    const title = record.name?.toString() ?? ''

    if (!record.children) {
      const to = { name: record.name }
      return {
        title,
        to,
      }
    }

    return {
      title,
      children: record.children.map(({ name, path }) => ({
        title: `p-${path}`,
        to: { name },
      })),
    }
  }

  const router = useRouter()
  const searchTerm = ref('')

  function selectedSearchTerm(value: string | null): void {
    searchTerm.value = ''

    if (value && routeRecordsFlat[value]) {
      router.push(routeRecordsFlat[value])
    }
  }
</script>

<style>
.context-sidebar { @apply
  z-50
}

.context-sidebar__header { @apply
  flex
  gap-1
  items-center
  mb-5
}

.context-sidebar__icon { @apply
  h-10
  w-10
}

.context-sidebar__heading { @apply
  font-normal
  text-xl
}

.context-sidebar__search-box { @apply
  text-foreground-600
}

.context-sidebar .p-context-accordion-item__title,
.context-sidebar .p-context-nav-item { @apply
  capitalize
}

.context-sidebar__footer { @apply
  min-h-[36px]
  flex
  justify-center
  items-center
}
</style>