<template>
  <PageLayout title="用户">
    <div class="content-item">
      <div class="tools-bar">
        <div class="tool-item">
          <span>代码：</span>
          <TextBox placeholder="请输入查询条件"></TextBox>
        </div>
        <div class="tool-item">
          <span>名称：</span>
          <TextBox placeholder="请输入查询条件"></TextBox>
        </div>
        <div class="tool-item">
          <LinkButton iconCls="icon-search" :plain="true">查询</LinkButton>
        </div>
        <div class="tool-item">
          <ComboGrid
            style="width: 300px"
            valueField="id"
            textField="name"
            v-model="value"
            :data="data"
            :textFormatter="formatText"
            :panelStyle="{ width: '500px' }"
          >
            <DataGrid
              :lazy="true"
              slot="grid"
              pagination
              :border="false"
              :pageNumber="pageNumber"
              :loading="loading"
              :pageSize="pageSize"
              :total="total"
              :pageLayout="layout1"
              @pageChange="onPageChange($event)"
              @sortChange="fuck($event)"
            >
              <GridColumn sortable field="id" title="Item ID"></GridColumn>
              <GridColumn
                sortable
                field="name"
                title="Name"
                width="30%"
              ></GridColumn>
              <GridColumn
                sortable
                field="inv"
                title="inv"
                align="right"
              ></GridColumn>
              <GridColumn
                sortable
                field="amount"
                title="amount"
                align="right"
              ></GridColumn>
              <GridColumn
                sortable
                field="price"
                title="price"
                align="center"
              ></GridColumn>
            </DataGrid>
          </ComboGrid>
        </div>
      </div>
      <div class="datagrid-wrapper">
        <DataGrid
          selectionMode="single"
          :data="data"
          :style="{ flex: 1 }"
          :lazy="true"
          pagination
          :loading="loading"
          :pageNumber="pageNumber"
          :pageSize="pageSize"
          :pageLayout="layout1"
          :total="total"
          @pageChange="onPageChange($event)"
          @sortChange="fuck($event)"
          @rowClick="fuck2($event)"
        >
          <GridColumn field="ck" :width="50" align="center">
            <template slot="header" slot-scope="scope">
              <CheckBox
                v-model="allChecked"
                @checkedChange="onAllCheckedChange($event, scope)"
              ></CheckBox>
            </template>
            <template slot="body" slot-scope="scope">
              <CheckBox
                v-model="scope.row.selected"
                @checkedChange="onCheckedChange($event)"
              ></CheckBox>
            </template>
          </GridColumn>
          <GridColumn sortable field="id" title="Item ID"></GridColumn>
          <GridColumn
            sortable
            field="name"
            title="Name"
            width="30%"
          ></GridColumn>
          <GridColumn
            sortable
            field="inv"
            title="inv"
            align="right"
          ></GridColumn>
          <GridColumn
            sortable
            field="amount"
            title="amount"
            align="right"
          ></GridColumn>
          <GridColumn
            sortable
            field="price"
            title="price"
            align="center"
          ></GridColumn>
        </DataGrid>
      </div>
    </div>

    <div class="content-item2">
      <div class="tools-bar">
        <div class="tool-item">
          <span>代码：</span>
          <TextBox placeholder="请输入查询条件"></TextBox>
        </div>
        <div class="tool-item">
          <span>名称：</span>
          <TextBox placeholder="请输入查询条件"></TextBox>
        </div>
        <div class="tool-item">
          <LinkButton iconCls="icon-search" :plain="true">查询</LinkButton>
        </div>
      </div>
      <div class="datagrid-wrapper">
        <DataGrid
          selectionMode="single"
          :data="data"
          :lazy="true"
          pagination
          :loading="loading"
          :pageNumber="pageNumber"
          :pageSize="pageSize"
          :pageLayout="layout1"
          :total="total"
          @pageChange="onPageChange($event)"
          @sortChange="fuck($event)"
          @rowClick="fuck2($event)"
        >
          <GridColumn field="ck" :width="50" align="center">
            <template slot="header" slot-scope="scope">
              <CheckBox
                v-model="allChecked"
                @checkedChange="onAllCheckedChange($event, scope)"
              ></CheckBox>
            </template>
            <template slot="body" slot-scope="scope">
              <CheckBox
                v-model="scope.row.selected"
                @checkedChange="onCheckedChange($event)"
              ></CheckBox>
            </template>
          </GridColumn>
          <GridColumn sortable field="id" title="Item ID"></GridColumn>
          <GridColumn
            sortable
            field="name"
            title="Name"
            width="30%"
          ></GridColumn>
          <GridColumn
            sortable
            field="inv"
            title="inv"
            align="right"
          ></GridColumn>
          <GridColumn
            sortable
            field="amount"
            title="amount"
            align="right"
          ></GridColumn>
          <GridColumn
            sortable
            field="price"
            title="price"
            align="center"
          ></GridColumn>
        </DataGrid>
      </div>
    </div>
  </PageLayout>
</template>
 
<script>
import PageLayout from "./PageLayout.vue";

export default {
  components: { PageLayout },
  name: "User",
  mounted() {},
  data() {
    return {
      value: null,
      data: [],
      allChecked: false,
      rowClicked: false,
      row: null,
      total: 0,
      pageNumber: 1,
      pageSize: 10,
      loading: false,
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
      data2: [
        {
          code: "FI-SW-01",
          name: "Koi",
          unitcost: 10.0,
          status: "P",
          listprice: 36.5,
          attr: "Large",
          itemid: "EST-1",
        },
        {
          code: "K9-DL-01",
          name: "Dalmation",
          unitcost: 12.0,
          status: "P",
          listprice: 18.5,
          attr: "Spotted Adult Female",
          itemid: "EST-10",
        },
      ],
    };
  },
  created() {
    this.loadPage(this.pageNumber, this.pageSize);
  },
  computed: {
    checkedRows() {
      return this.data.filter((row) => row.selected);
    },
  },
  methods: {
    formatText(value) {
      if (this.value && this.value.length > 3) {
        return this.value.length + " rows selected";
      }
      return value;
    },
    fuck(el) {
      console.log(el);
      this.loadPage();
    },
    fuck2(el) {
      console.log(el);
    },
    onPageChange(event) {
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

    onAllCheckedChange(checked) {
      if (this.rowClicked) {
        return;
      }
      this.data = this.data.map((row) => {
        return Object.assign({}, row, {
          selected: checked,
        });
      });
    },
    onCheckedChange(checked) {
      console.log(checked);
      this.allChecked = this.checkedRows.length === this.data.length;
      console.log(this.checkedRows);
      console.log(this.data);
      console.log(this.allChecked);
      this.rowClicked = true;
      this.$nextTick(() => (this.rowClicked = false));
    },

    getData(pageNumber, pageSize) {
      let total = 22;
      let data = [];
      let start = (pageNumber - 1) * pageSize;
      for (let i = start + 1; i <= start + pageSize; i++) {
        let amount = Math.floor(Math.random() * 1000);
        let price = Math.floor(Math.random() * 1000);
        data.push({
          id: i,
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
.content-item {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  .datagrid-wrapper {
    flex-grow: 1;
    overflow: auto;
  }
}
.content-item2 {
  min-height: 380px;
  display: flex;
  flex-direction: column;
  .datagrid-wrapper:first-child {
    flex-grow: 1.1;
    overflow: auto;
  }
  .datagrid-wrapper:last-child {
    flex-grow: 1;
    overflow: auto;
  }
}
.tools-bar {
  height: 40px;
  margin: 2px;
  display: flex;
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