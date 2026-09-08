<template>
  <div class="min-h-screen flex flex-col bg-slate-50 selection:bg-primary-100 selection:text-primary-700">
    <!-- Header ስሙን LayoutAppHeader ብለው ይጠሩት -->
    <LayoutAppHeader />
    
    <main class="flex-grow">
      <!-- እዚህ ጋር Transition ብንጨምርበት ገጾቹ ሲቀያየሩ ያምራል -->
      <slot />
    </main>

    <LayoutAppFooter />
  </div>
</template>

<style>
/* ለአጠቃላይ ገጹ ለስላሳ ሽግግር */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>