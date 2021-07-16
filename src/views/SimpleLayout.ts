import { Component, Vue, Watch } from "vue-property-decorator";

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
          x: 140,
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
          x: 200,
          y: 400,
        },
        {
          x: 380,
          y: 900,
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
          x: 550,
          y: 700,
        },
        {
          x: 500,
          y: 650,
        },
        {
          x: 800,
          y: 600,
        },
        {
          x: 900,
          y: 400,
        },
      ]
    }  
  ]
  svgWidth: number = 1000
  svgHeight: number = 500
  axisCount: number =  4
  paddingX: number  = 50
  paddingY: number  = 50
  get maxX() {
    const onlyX: number[] = []
    this.data.forEach((item) => {
      item.coords.forEach(coord => onlyX.push(coord.x))
    })
    return Math.max(...onlyX)
  }
  get maxY() {
    const onlyY: number[] = []
    this.data.forEach((item) => {
      item.coords.forEach(coord => onlyY.push(coord.y))
    })
    return Math.max(...onlyY)
  }
  sortX(coords: Coords[]) {
    return coords.sort((coordA, coordB) => {
      return coordB.x - coordA.x
    })
  }
  getSvgX(x: number) {
    return (x / this.maxX) * this.svgWidth
  }
  getSvgY(y: number) {
    return this.svgHeight - (y / this.maxY) * this.svgHeight
  }
  get axis() {
    const axis = []
    for (let i = 0; i < this.axisCount; i++) {
      axis.push({
        x1: 0,
        y1: (this.svgHeight + this.paddingY) / (this.axisCount - 1) * i,
        x2: this.svgWidth + this.paddingX,
        y2: (this.svgHeight + this.paddingY) / (this.axisCount - 1) * i
      })
    }
    return axis
  }
}
