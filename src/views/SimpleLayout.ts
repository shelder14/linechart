import { Component, Vue } from "vue-property-decorator";
import LineChart from './LineChart'

interface Coords {
  x: number, 
  y: number
}

interface ChartData {
  color: string,
  description: string,
  coords: Coords[]
}

@Component({
  components:{
    LineChart
  }
})


export default class SimpleLayout extends Vue {
  data: ChartData[] = [
    {
      color: '#E07001',
      description: 'line1',
      coords: [
        {
          x: 0,
          y: 0,
        },
        {
          x: 100,
          y: 300,
        },
        {
          x: 150,
          y: 400,
        },
        {
          x: 200,
          y: 500,
        },
        {
          x: 230,
          y: 700,
        },
        {
          x: 300,
          y: 900,
        },
        {
          x: 350,
          y: 800,
        },
        {
          x: 430,
          y: 750,
        },
        {
          x: 450,
          y: 800,
        },

        {
          x: 550,
          y: 700,
        },
        {
          x: 700,
          y: 600,
        },
        {
          x: 850,
          y: 600,
        },
        {
          x: 900,
          y: 500,
        },
      ]
    },
    {
      color: '#7A73DE',
      description: 'line2',
      coords: [
        {
          x: 50,
          y: 50,
        },
        {
          x: 100,
          y: 240,
        },
        {
          x: 180,
          y: 300,
        },
        {
          x: 220,
          y: 400,
        },
        {
          x: 330,
          y: 850,
        },
        {
          x: 450,
          y: 800,
        },
        {
          x: 500,
          y: 900,
        },
        {
          x: 550,
          y: 850,
        },
        {
          x: 600,
          y: 800,
        },

        {
          x: 750,
          y: 700,
        },
        {
          x: 800,
          y: 650,
        },
        {
          x: 850,
          y: 600,
        },
        {
          x: 900,
          y: 400,
        },
      ]
    }  
  ]
}
