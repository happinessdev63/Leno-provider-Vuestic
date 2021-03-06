import { Doughnut, mixins } from 'vue-chartjs'
import DefaultOptions from '../DefaultOptions'

export default Doughnut.extend({
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],

  data () {
    return {
      defaultOptions: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
    }
  },

  mounted () {
    let options = Object.assign(
      {},
      DefaultOptions,
      this.defaultOptions,
      this.options
    )
    this.renderChart(this.chartData, options)
  }
})
