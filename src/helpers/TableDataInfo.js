class TableDataInfo {
  constructor (data) {
    if (data) {
      this.datas = { data }
      this.fields = Object.keys(data[0]).map((ele, index) => {
        return {
          name: ele,
          title: ele,
          dataClass: index === 0 ? 'text-center' : '',
          sortField: ele
        }
      })
      this.sortFunctions = {
        ...Object.keys(data[0]).map(ele => {
          return {
            [ele]: function (item1, item2) {
              return item1 >= item2 ? 1 : -1
            }
          }
        })
      }
    } else {
      this.datas = []
      this.fields = []
      this.sortFunctions = []
    }
  }
}

export default TableDataInfo
