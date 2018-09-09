<template>
	<biu-layout>
		<biu-body slot='body'>
      <biu-list-wrap title='结合list组件（推荐）'>
				<biu-list-cell type='div' icon='icon-time' iconColor='#19be6b' arrow>
					<span slot='left'>选择时间：</span>
          <biu-dateselect type="date" slot="right"></biu-dateselect>
				</biu-list-cell>
			</biu-list-wrap>

      <biu-list-wrap title='不结合list组件'>
				<biu-list-cell type='div' icon='icon-time' iconColor='#19be6b' arrow  @click.native="open">
					<span slot='left'>选择时间：</span>
          <span slot="right" v-text="dateText"></span>
				</biu-list-cell>
			</biu-list-wrap>
      <biu-dateselect ref="dateselect" type="date" :callback='dateCallback' v-show="false"></biu-dateselect>

      <biu-list-wrap title='限制可选时间范围（例：18年整年）'>
				<biu-list-cell type='div' icon='icon-time' iconColor='#19be6b' arrow>
					<span slot='left'>选择时间：</span>
          <biu-dateselect type="date" slot="right" start-date="2018-01-01" end-date="2018-12-31"></biu-dateselect>
				</biu-list-cell>
			</biu-list-wrap>

      <biu-list-wrap title='结合list组件选择时间段'>
				<biu-list-cell type='div' icon='icon-time' iconColor='#19be6b'>
					<span slot='left'>选择时间段：</span>
          <biu-dateselect type="date" slot="right" align='center' v-model="setStartText"></biu-dateselect>
          <span slot="right"> - </span>
          <biu-dateselect type="date" slot="right" :start-date="startDate" align='center'></biu-dateselect>
				</biu-list-cell>      
			</biu-list-wrap>

      <biu-list-wrap title='添加默认时间（ initEmit: true ）'>
        <biu-list-cell type='div' icon='icon-time' iconColor='#19be6b' arrow>
					<span slot='left'>Time：</span>
          <biu-dateselect type="time" slot="right" :initEmit='true' v-model="defaultTime1"></biu-dateselect>
				</biu-list-cell>
        <biu-list-cell type='div' icon='icon-time' iconColor='#19be6b' arrow>
					<span slot='left'>Day：</span>
          <biu-dateselect type="day" slot="right" :initEmit='true' v-model="defaultTime2"></biu-dateselect>
				</biu-list-cell>
        <biu-list-cell type='div' icon='icon-time' iconColor='#19be6b' arrow>
					<span slot='left'>Month：</span>
          <biu-dateselect type="month" slot="right" :initEmit='true' v-model="defaultTime3"></biu-dateselect>
				</biu-list-cell>
				<biu-list-cell type='div' icon='icon-time' iconColor='#19be6b' arrow>
					<span slot='left'>Date：</span>
          <biu-dateselect type="date" slot="right" :initEmit='true' v-model="defaultTime4"></biu-dateselect>
				</biu-list-cell>
        <biu-list-cell type='div' icon='icon-time' iconColor='#19be6b' arrow>
					<span slot='left'>DateTime：</span>
          <biu-dateselect type="datetime" slot="right" :initEmit='true' v-model="defaultTime5"></biu-dateselect>
				</biu-list-cell>
        <biu-list-cell type='div' icon='icon-time' iconColor='#19be6b' arrow>
					<span slot='left'>自定义：</span>
          <biu-dateselect type="date" 
            :yearFormat="yearFormat" 
            :month-format="monthFormat" 
            :day-format="dayFormat" 
            slot="right" 
            v-model="defaultTime6"
            :initEmit='true'>
          </biu-dateselect>
				</biu-list-cell>
			</biu-list-wrap>
		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
    return {
      time: '2018-01-01',
      dateText: '请选择',
      yearFormat: '<span style="color:#F00;">{value}<i style="font-size: 12px;margin-left: 1px;">年</i></span>',
      monthFormat: '<span style="color:#0BB20C;">{value}<i style="font-size: 12px;margin-left: 1px;">月</i></span>',
      dayFormat: '<span style="color:#FFB400;">{value}<i style="font-size: 12px;margin-left: 1px;">日</i></span>',
      setStartText: null,
      startDate: null,
      defaultTime1: null,
      defaultTime2: null,
      defaultTime3: null,
      defaultTime4: null,
      defaultTime5: null,
      defaultTime6: null
    }
  },
  watch: {
    setStartText(val) {
      if(val) {
        this.startDate = val;
      }
    }
  },
  methods: {
    open() {
      this.$refs.dateselect.open();
    },
    dateCallback(time) {
      this.dateText =  time;
    }
  }
}
</script>

<style lang="scss">

</style>