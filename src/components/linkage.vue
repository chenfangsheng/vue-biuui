<template>
	<biu-layout>
		<biu-body slot='body'>
			<biu-list-wrap title='城市联动'>
				<biu-list-cell type='div' icon-name='city' icon-color='#19be6b' arrow @click.native="show = true">
					<span slot='left'>所在城市：</span>
					<span slot='right' v-text="modelText"></span>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-list-wrap title='普通联动'>
				<biu-list-cell type='div' icon-name='popup' icon-color='#19be6b' arrow @click.native="show1 = true">
					<span slot='left'>所在年级：</span>
					<span slot='right' v-text="modelText1"></span>
				</biu-list-cell>
			</biu-list-wrap>
			
			<biu-linkage v-model="show" :callback="result" :items="district" title="所在城市"></biu-linkage>
			<biu-linkage v-model="show1" :callback="result1" :items="gradeList" title="所在年级"></biu-linkage>
		</biu-body>
	</biu-layout>
</template>

<script>
import District from 'ydui-district/dist/jd_province_city_area_id';
export default {
	data() {
    return {
      show: false,
      show1: false,
      modelText: '未选择',
      modelText1: '未选择',
      district: District,
      gradeList: [
      	{
      		"v": "1000",
	        "n": "初中一年级",
	        "c": [
            {
              "v": "1001",
              "n": "上学期"
            },
            {
              "v": "1002",
              "n": "下学期"
            }
	        ]
      	},
      	{
      		"v": "2000",
	        "n": "初中二年级",
	        "c": [
            {
              "v": "2001",
              "n": "上学期"
            },
            {
              "v": "2002",
              "n": "下学期"
            }
	        ]
      	},
      	{
      		"v": "3000",
	        "n": "初中三年级",
	        "c": [
            {
              "v": "3001",
              "n": "上学期"
            },
            {
              "v": "3002",
              "n": "下学期"
            }
	        ]
      	}
      ]
    }
  },
  methods: {
    result(ret) {
      this.modelText = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
    },
    result1(ret) {
      this.modelText1 = ret.itemName1 + ' ' + ret.itemName2;
    }
  }
}
</script>

<style lang="scss">

</style>