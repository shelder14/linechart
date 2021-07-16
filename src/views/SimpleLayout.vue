<template>


  <div>
    <h2>Тестовое задание</h2>
    <div class="line-chart-container">
      <LineChart :data='data'/>
    </div>
  </div>


</template>

<script lang="ts" src="./SimpleLayout.ts"/>

<style lang="scss" scoped>
.line-chart-container{
  max-width: 1000px;
  margin: auto;
  justify-content: center;
  padding: 50px;
}
</style>
