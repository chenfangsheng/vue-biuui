<template>
	<biu-layout>
		<biu-body slot='body'>
      
      <h5 class="biu-remarks">普通示例</h5>
      <biu-collapse v-model="value1">
        <biu-collapse-item name="1">
            <span>VUE</span>
            <biu-list-wrap slot="content">
              <biu-list-cell type='div' mediaImg='http://www.stormfury.cn/demo/static/images/vue-logo.png'>
                <div slot='left'>
                  <span class="biu-media-title">VUE</span>
                  <p class="biu-media-info">一个易用、灵活、高效的JavaScript 框架</p>
                </div>
              </biu-list-cell>
            </biu-list-wrap>
        </biu-collapse-item>
        <biu-collapse-item name="2">
            <span>REACT</span>
            <biu-list-wrap slot="content">
              <biu-list-cell type='div' mediaImg='http://www.stormfury.cn/demo/static/images/react-logo.png'>
                <div slot='left'>
                  <span class="biu-media-title">REACT</span>
                  <p class="biu-media-info">一个用于构建用户界面的 JAVASCRIPT 库</p>
                </div>
              </biu-list-cell>
            </biu-list-wrap>
        </biu-collapse-item>
      </biu-collapse>

      <h5 class="biu-remarks">手风琴模式</h5>
      <biu-collapse v-model="value2" accordion>
        <biu-collapse-item name="3">
            <span>史蒂夫·乔布斯</span>
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </biu-collapse-item>
        <biu-collapse-item name="4">
            <span>斯蒂夫·盖瑞·沃兹尼亚克</span>
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </biu-collapse-item>
        <biu-collapse-item name="5">
            <span>乔纳森·伊夫</span>
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </biu-collapse-item>
      </biu-collapse>

      <h5 class="biu-remarks">嵌套</h5>
      <biu-collapse v-model="value3">
        <biu-collapse-item name="10000">
            <span>前端框架</span>
            <div slot="content">
              <biu-collapse v-model="value1">
                <biu-collapse-item name="1">
                    <span>VUE</span>
                    <biu-list-wrap slot="content">
                      <biu-list-cell type='div' mediaImg='http://www.stormfury.cn/demo/static/images/vue-logo.png'>
                        <div slot='left'>
                          <span class="biu-media-title">VUE</span>
                          <p class="biu-media-info">一个易用、灵活、高效的JavaScript 框架</p>
                        </div>
                      </biu-list-cell>
                    </biu-list-wrap>
                </biu-collapse-item>
                <biu-collapse-item name="2">
                    <span>REACT</span>
                    <biu-list-wrap slot="content">
                      <biu-list-cell type='div' mediaImg='http://www.stormfury.cn/demo/static/images/react-logo.png'>
                        <div slot='left'>
                          <span class="biu-media-title">REACT</span>
                          <p class="biu-media-info">一个用于构建用户界面的 JAVASCRIPT 库</p>
                        </div>
                      </biu-list-cell>
                    </biu-list-wrap>
                </biu-collapse-item>
              </biu-collapse>
            </div>
        </biu-collapse-item>
      </biu-collapse>

		</biu-body>
	</biu-layout>
</template>

<script>
export default {
	data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>

<style lang="scss">
</style>