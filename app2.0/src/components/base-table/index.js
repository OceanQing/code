import { Table } from 'ant-design-vue'
export default {
  name: 'BaseTable',
  components: {
    ATable: Table
  },
  props: Object.assign({}, Table.props, {}),
  data() {
    return {
      data: []
    }
  },
  computed: {
  },
  watch: {},
  created() { },
  mounted() { },
  destroyed() { },
  methods: {},
  render() {
    console.log(Table.props)
    console.log(this.$props)
    console.log(this.$scopedSlots)
    const props = Object.assign({}, this.$props, {
      dataSource: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
      ]
    })
    this.$props
    return (
      <a-table
        {...{
          props: props,
          scopedSlots: this.$scopedSlots,
          on: this.$listeners,
        }}
      />
    )
  }
}