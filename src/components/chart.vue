<template>
	<div
		ref="chartRef"
		class="chart"
		:style="`min-height: ${props.height || '400px'}`"
	></div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref, nextTick, PropType, onUnmounted } from "vue";
import * as echarts from "echarts";
import lodash from "lodash";

const chartRef = ref();

const myCharts = reactive([]);

const props = defineProps({
	data: {} as PropType<any>,
	height: String,
});
lodash.merge(props.data, { textStyle: { fontFamily: "Yekan" } });

const initChart = () => {
	let initializedChart;
	initializedChart = echarts.init(chartRef.value, "");
	initializedChart.setOption(props.data);
	(<any>myCharts).push(initializedChart);
};
const InitEchartsResize = () => {
	nextTick(() => {
		for (let i = 0; i < myCharts.length; i++) {
			setTimeout(() => {
				(<any>myCharts[i]).resize();
			}, i * 1000);
		}
	});
};
const observer = new ResizeObserver(InitEchartsResize);
onMounted(() => {
	try {
		initChart();
		observer.observe(chartRef.value);
	} catch (error) {
		console.error(error);
	}
});
onUnmounted(() => observer.unobserve);
</script>

<style scoped>
.chart {
	width: 100%;
	overflow: hidden;
}
</style>
