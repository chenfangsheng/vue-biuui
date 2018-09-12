<template>
	<router-link :to="href" class="biu-list-cell" v-if="type == 'router' && href">
		<div class="biu-cell-left">
			<span class="biu-cell-icon" v-if="iconName || newIcon || mediaImg">
				<biu-icon v-if="iconName" :name='iconName' :color='iconColor' size='.36rem'></biu-icon>
				<i v-if="newIcon" class="biu-list-cell-icon" :class="newIcon" :style="{color: iconColor}"></i>
				<div v-if="mediaImg" class="biu-media-img" :style="{backgroundImage: 'url(' + mediaImg + ')', width: mediaWidth, height: mediaWidth}"></div>
			</span>
			<slot name="left"></slot>
		</div>
		<div class="biu-cell-right" :class="classes">
			<slot name="right"></slot>
		</div>
	</router-link>
	
	<a :href="href || 'javascript:;'" class="biu-list-cell" v-else-if="type == 'link' || (type == 'router' && !href)">
		<div class="biu-cell-left">
			<span class="biu-cell-icon" v-if="iconName || newIcon || mediaImg">
				<biu-icon v-if="iconName" :name='iconName' :color='iconColor' size='.36rem'></biu-icon>
				<i v-if="newIcon" class="biu-list-cell-icon" :class="newIcon" :style="{color: iconColor}"></i>
				<div v-if="mediaImg" class="biu-media-img" :style="{backgroundImage: 'url(' + mediaImg + ')', width: mediaWidth, height: mediaWidth}"></div>
			</span>
			<slot name="left"></slot>
		</div>
		<div class="biu-cell-right" :class="classes">
			<slot name="right"></slot>
		</div>
	</a>
	
	<div class="biu-list-cell" v-else-if="type == 'div'">
		<div class="biu-cell-left">
			<span class="biu-cell-icon" v-if="iconName || newIcon || mediaImg">
				<biu-icon v-if="iconName" :name='iconName' :color='iconColor' size='.36rem'></biu-icon>
				<i v-if="newIcon" class="biu-list-cell-icon" :class="newIcon" :style="{color: iconColor}"></i>
				<div v-if="mediaImg" class="biu-media-img" :style="{backgroundImage: 'url(' + mediaImg + ')', width: mediaWidth, height: mediaWidth}"></div>
			</span>
			<slot name="left"></slot>
		</div>
		<div class="biu-cell-right" :class="classes">
			<slot name="right"></slot>
		</div>
	</div>
	
	<label class="biu-list-cell" v-else-if="type == 'checkbox' || type == 'radio'">
		<div class="biu-cell-left">
			<span class="biu-cell-icon" v-if="iconName || newIcon || mediaImg">
				<biu-icon v-if="iconName" :name='iconName' :color='iconColor' size='.36rem'></biu-icon>
				<i v-if="newIcon" class="biu-list-cell-icon" :class="newIcon" :style="{color: iconColor}"></i>
				<div v-if="mediaImg" class="biu-media-img" :style="{backgroundImage: 'url(' + mediaImg + ')', width: mediaWidth, height: mediaWidth}"></div>
			</span>
			<slot name="left"></slot>
		</div>
		<label class="biu-cell-right" :class="classes">
			<slot name="right"></slot>
			<i v-if="type == 'checkbox'" class="biu-cell-checkbox-icon"></i>
      <i v-if="type == 'radio'" class="biu-cell-radio-icon"></i>
		</label>
	</label>
</template>

<script>
import Icon from '../icon/icon.vue';
export default {
	name: 'biu-list-cell',
	components: {
    'biu-icon': Icon
 	},
	props: {
		type: {
      validator (value) {
        return ['router', 'link', 'div', 'checkbox', 'radio'].indexOf(value) > -1;
      },
      default: 'div'
    },
		iconName: String,
		iconColor: String,
		newIcon: String,
		mediaImg: String,
		mediaWidth: {
			validator(value) {
        return /^(\.|\d+\.)?\d+(px|rem)$/.test(value);
      },
      default: ".8rem"
		},
		arrow: {
      type: Boolean,
      default: false
    },
		href: [String, Object],
		align: {
      validator (value) {
        return ['left', 'center', 'right'].indexOf(value) > -1;
      },
      default: 'right'
    }
	},
	computed: {
		classes() {
			let a = this.arrow ? 'biu-cell-arrow' : '';
			let t = ' biu-cell-text-' + this.align;
      return a + t;
		}
	}
}	
</script>