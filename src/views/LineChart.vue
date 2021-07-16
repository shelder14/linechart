<template>
<div>
  <svg :viewBox="`0 0 ${svgWidth} ${svgHeight}`" xmlns="http://www.w3.org/2000/svg" class="line-chart">
    <g>      
      <g>
        <line 
          v-for='(item, index) in dividers'
          :key='index + 1'
          stroke='#edecf1'
          stroke-width='1'
          :x1="item.x1" 
          :y1="item.y1" 
          :x2="item.x2" 
          :y2="item.y2" />
      </g>
      <g v-for="(line, index) in data"
        :key="index">
        <g 
          v-for="(lineItem, index) in line.coords"
          :key="index">
          <line 
            v-if="line.coords.length-1 !== index"
            :x1="getSvgX(lineItem.x)" 
            :y1="getSvgY(lineItem.y)" 
            :x2="getSvgX(line.coords[index + 1].x)" 
            :y2="getSvgY(line.coords[index + 1].y)" 
            :stroke="line.color" 
            stroke-width="4" />
          <circle 
            class="line-chart__circle"
            :cx="getSvgX(lineItem.x)" 
            :cy="getSvgY(lineItem.y)" 
            r="6" 
            :stroke="line.color" >
          </circle>
        </g>
      </g>
    </g>

  </svg>
</div>
</template>

<script lang="ts" src="./LineChart.ts"/>

<style lang="scss" scoped>
.line-chart {
  overflow: visible;
  &__circle {
    fill: #ffffff;
    stroke-width: 1;
  } 
}

</style>
