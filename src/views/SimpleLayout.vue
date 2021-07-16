<template>


  <div>
    <h2>Тестовое задание</h2>
    <div class="line-chart">
      <svg :viewBox="`0 0 ${svgWidth + paddingX} ${svgHeight + paddingY}`" xmlns="http://www.w3.org/2000/svg" class="line-chart__svg">
        <g :style="{transform: `translate(${paddingX/2}px, ${paddingY/2}px)`}">      
          <g v-for="(line, index) in data"
            :key="index">
            <g 
              v-for="(lineItem, index) in sortX(line.coords)"
              :key="index">
              <line 
                v-if="line.coords.length-1 !== index"
                :x1="getSvgX(lineItem.x)" 
                :y1="getSvgY(lineItem.y)" 
                :x2="getSvgX(line.coords[index + 1].x)" 
                :y2="getSvgY(line.coords[index + 1].y)" 
                :stroke="line.color" 
                stroke-width="2" />
              <circle 
                class="line-chart__circle"
                :cx="getSvgX(lineItem.x)" 
                :cy="getSvgY(lineItem.y)" 
                r="3" 
                :stroke="line.color" >
              </circle>
            </g>
          </g>
        </g>
        <line 
          v-for='(item, index) in axis'
          :key='index + 1'
          stroke='rgba(28, 24, 84, 0.08)'
          stroke-width='1'
          :x1="item.x1" 
          :y1="item.y1" 
          :x2="item.x2" 
          :y2="item.y2" />
      </svg>
    </div>
  </div>


</template>

<script lang="ts" src="./SimpleLayout.ts"/>

<style lang="scss" scoped>
.line-chart {
  max-width: 1000px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 30px 0;
  &__svg {
    overflow: visible;
    width: 66%;
  } 
  &__circle {
    fill: #ffffff;
    stroke-width: 1;
  } 
}

</style>
