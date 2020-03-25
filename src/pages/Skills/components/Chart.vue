<script>
import { Radar } from 'vue-chartjs'
import Chart from 'chart.js'
import { sleep } from '../../../utils'

Chart.defaults.global.defaultFontFamily = "'Nunito', sans-serif"
Chart.defaults.global.defaultFontColor = 'white'
Chart.defaults.global.elements.rectangle.backgroundColor = 'green'
Chart.defaults.global.legend = false

const { beforeDestroy, ...UpdatedRadar } = Radar

export default {
  extends: UpdatedRadar,
  props: {
    data: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: () => ({
        scale: {
          pointLabels: {
            fontSize: 17,
          },
          angleLines: {
            color: 'rgb(65, 68, 83)',
          },
          gridLines: {
            color: 'rgb(65, 68, 83)',
            circular: false,
          },
          ticks: {
            stepSize: 20,
            suggestedMin: 20,
            backdropColor: 'transparent',
            suggestedMax: 100,
          },
        },
      }),
    },
  },
  mounted() {
    this.renderChart(this.data, this.options)
  },
  async destroyed() {
    await sleep(3000)
    this.$data._chart.destroy()
  },
}
</script>

<style lang="scss" module>
canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>
