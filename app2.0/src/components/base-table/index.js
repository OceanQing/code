import { Table } from 'ant-design-vue'
export default {
  name: 'BaseTable',
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
    return (
      <a-table
        {...{
          props: this.$props,
          scopedSlots: this.$scopedSlots,
          on: this.$listeners,
        }}
      />
    )
  }
}