import { Component, Vue, Prop } from "vue-property-decorator";

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


export default class LineChart extends Vue {
  @Prop({default: () => {return []}}) public data!: ChartData[];
  svgWidth: number = 0
  dividersCount: number =  4
  mounted() {
    this.svgWidth = this.$el.getBoundingClientRect().width
  }
  get svgHeight() {
    return this.svgWidth * 2 / 3
  }
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
  getSvgX(x: number) {
    return (x / this.maxX) * this.svgWidth
  }
  getSvgY(y: number) {
    return this.svgHeight - (y / this.maxY) * this.svgHeight
  }
  get dividers() {
    const dividers = []
    for (let i = 0; i < this.dividersCount; i++) {
      dividers.push({
        x1: 0,
        y1: this.svgHeight / (this.dividersCount - 1) * i,
        x2: this.svgWidth,
        y2: this.svgHeight / (this.dividersCount - 1) * i
      })
    }
    return dividers
  }
}
