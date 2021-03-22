<template>
  <div
    :style="{
      margin: '8px',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    }"
  >
    <PageHeader />
    <div class="tools-bar">
      <div class="tool-item">
        <span>微信ID：</span>
        <TextBox placeholder="请输入查询条件"></TextBox>
      </div>
      <div class="tool-item">
        <span>昵称：</span>
        <TextBox placeholder="请输入查询条件"></TextBox>
      </div>
      <div class="tool-item">
        <LinkButton iconCls="icon-search" :plain="true">查询</LinkButton>
        <LinkButton iconCls="icon-add" :plain="true">新建</LinkButton>
        <LinkButton iconCls="icon-edit" :plain="true">编辑</LinkButton>
        <LinkButton iconCls="icon-remove" :plain="true">删除</LinkButton>
      </div>
    </div>
    <DataGrid
      selectionMode="single"
      :style="{ flex: 1 }"
      :pagination="true"
      :lazy="true"
      :data="data"
      :total="total"
      :loading="loading"
      loadMsg="加载中..."
      :pageNumber="pageNumber"
      :pageSize="pageSize"
      beforePageText="第"
      afterPageText="页，共{pages}页"
      :pagePosition="pagePosition"
      @pageChange="onPageChange($event)"
      :pageLayout="layout1"
      displayMsg="当前显示第{from}条到{to}条，共{total}条"
      :footer="true"
      @sortChange="fuck($event)"
      multiSort
    >
      <GridColumn align="center" cellCss="datagrid-td-rownumber" width="30">
        <template slot="body" slot-scope="scope">
          {{ scope.rowIndex + 1 }}
        </template>
      </GridColumn>
      <GridColumn field="inv" sortable title="Inv No"></GridColumn>
      <GridColumn field="name" sortable title="Name"></GridColumn>
      <GridColumn
        field="amount"
        sortable
        title="Amount"
        align="right"
      ></GridColumn>
      <GridColumn
        field="price"
        sortable
        title="Price"
        align="right"
      ></GridColumn>
      <GridColumn field="cost" sortable title="Cost" align="right"></GridColumn>
      <GridColumn field="note" sortable title="Note"></GridColumn>
    </DataGrid>
  </div>
</template>
 
<script>
import PageHeader from "./PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
  mounted() {},
  data() {
    return {
      total: 0,
      pageNumber: 1,
      pageSize: 20,
      data: [],
      loading: false,
      pagePosition: "bottom",
      pageOptions: [
        { value: "bottom", text: "Bottom" },
        { value: "top", text: "Top" },
        { value: "both", text: "Both" },
      ],
      layout1: [
        "list",
        "sep",
        "first",
        // "links",
        "manual",
        "prev",
        "next",
        "last",
        "sep",
        "refresh",
        "info",
      ],
    };
  },
  created() {
    this.loadPage(this.pageNumber, this.pageSize);
  },
  methods: {
    fuck(el) {
      console.log(el);
      this.loadPage();
    },
    onPageChange(event) {
      console.log(event);
      this.loadPage(event.pageNumber, event.pageSize);
    },
    loadPage(pageNumber, pageSize) {
      this.loading = true;
      setTimeout(() => {
        let result = this.getData(pageNumber, pageSize);
        this.total = result.total;
        this.pageNumber = result.pageNumber;
        this.data = result.rows;
        this.loading = false;
      }, 1000);
    },
    getData(pageNumber, pageSize) {
      let total = 23;
      let data = [];
      let start = (pageNumber - 1) * pageSize;
      for (let i = start + 1; i <= start + pageSize; i++) {
        let amount = Math.floor(Math.random() * 1000);
        let price = Math.floor(Math.random() * 1000);
        data.push({
          inv: "Inv No " + i,
          name: "Name " + i,
          amount: amount,
          price: price,
          cost: amount * price,
          note: "Note " + i,
        });
      }
      return {
        total: total,
        pageNumber: pageNumber,
        pageSize: pageSize,
        rows: data,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.tools-bar {
  display: flex;
  margin-bottom: 8px;
  .tool-item {
    span {
      margin-right: 8px;
    }
    &:not(:last-child) {
      margin-right: 1.1em;
    }
  }
}
</style>