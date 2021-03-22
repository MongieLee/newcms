<template>
  <div>
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
      checkbox
    >
      <GridColumn align="center" cellCss="datagrid-td-rownumber" width="30">
        <template slot="body" slot-scope="scope">
          <CheckBox @checkedChange="handleRowCheck($event, scope)" />
        </template>
        <template slot="header">
          <CheckBox
            v-model="allChecked"
            @checkedChange="handleAllCheck($event)"
          />
        </template>
      </GridColumn>
      <GridColumn align="center" cellCss="datagrid-td-rownumber" width="40">
        <template slot="header">序号</template>
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
export default {};
</script>

<style lang="scss" scoped>
</style>