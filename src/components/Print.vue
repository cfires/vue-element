<template>
  <div class="table">
    <div class="tableList">
      <div id="printMe">
        <div class="title">打印模板</div>
        <div class="content-table-three">
          <div class="table-name-three">XXXX</div>
          <div class="table-info-three">{{ list.fromName }}</div>
          <div class="table-name-three">XXXX</div>
          <div class="table-info-three">{{ list.fromIdCard }}</div>
          <div class="table-name-three">XXXX</div>
          <div class="table-info-three">{{ list.fromPhone }}</div>
        </div>
      </div>
      <div  class="table-btn">
        <Button type="info" v-print="printObj" class="btn-no">打印</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'printInfo',
  data () {
    return {
      list: [],
      printObj: {
        id: 'printMe',
        popTitle: '打印模板',
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      }
    }
  },
  methods: {},
  computed: {},
  created () { }
}
</script>

<style   scoped>
.table {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}
.tableList {
  width: 900px;
  margin: auto;
  margin-top: 20px;
}
.title {
  font-size: 20px;
  width: 100%;
  text-align: center;
}
.table-name-three,
.table-info-three {
  border: 0.55px solid;
  width: 16.7%;
}
.table-name-two,
.table-info-two {
  border: 0.55px solid;
  width: 25%;
  line-height: 100px;
  text-align: center;
}
.table-info-img {
  border: 0.55px solid;
  width: 75%;
}

.table-info-one {
  border: 0.55px solid;
  width: 75%;
}
.table-name-one {
  border: 0.55px solid;
  width: 25%;
}
.content-table-one,
.content-table-two,
.content-table-three {
  display: flex;
  height: 100px;
  width: 100%;
  line-height: 100px;
  text-align: center;
}
.content-table-img {
  display: flex;
  height: 100px;
  width: 100%;
  line-height: 100px;
  text-align: center;
}
img {
  max-width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
}
.imgsrc {
  width: 90%;
  margin: auto;
  height: 90%;
  margin-top: 5px;
}
.table-btn {
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
</style>
