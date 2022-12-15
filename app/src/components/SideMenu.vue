<template>
  <div class="column is-4-tablet is-3-desktop is-2-widescreen">
    <nav class="menu">
      <p class="menu-label">{{$t('global.data')}}</p>
      <ul class="menu-list">
        <li><router-link to="/dishes">{{ $t('theNavbar.Dishes')}}</router-link></li>
        <li><router-link to="/restaurants">{{ $t('theNavbar.Restaurants')}}</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style></style>
