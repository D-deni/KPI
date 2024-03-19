<template>
  <div class="flex justify-center flex-wrap gap-x-6 gap-y-6">
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <svg width="50px" height="50px" viewBox="0 0 91 91" id="Layer_1" xml:space="preserve"
             xmlns="http://www.w3.org/2000/svg">
            <g>
            <g>
            <path
              d="M64.292,13.277c-0.002-0.025-0.01-0.047-0.01-0.072c0-0.024,0.008-0.047,0.01-0.072V6.758h-8.936    c-1.07,0-2.053-0.606-2.525-1.567c-1.402-2.841-4.217-4.605-7.338-4.605c-3.129,0-5.941,1.764-7.346,4.604    c-0.473,0.961-1.455,1.568-2.521,1.568h-8.938v6.41c0,0.013,0.004,0.024,0.004,0.037c0,0.013-0.004,0.024-0.004,0.036v6.412    h37.604V13.277z"
              fill="#3b82f6"/>
              <path
                d="M69.923,16.021v6.448c0,1.554-1.26,2.815-2.814,2.815H23.876c-1.559,0-2.816-1.261-2.816-2.815v-6.448    H9.597v74.682h66.164c3.279,0,5.943-2.666,5.943-5.939V16.021H69.923z"
                fill="#647F94"/>
              <path
                d="M29.911,75.561h-9.264c-1.555,0-2.814-1.26-2.814-2.813c0-1.557,1.26-2.816,2.814-2.816h9.264    c1.557,0,2.814,1.26,2.814,2.816C32.726,74.301,31.468,75.561,29.911,75.561z M45.894,75.561h-6.879    c-1.553,0-2.814-1.26-2.814-2.813c0-1.557,1.262-2.816,2.814-2.816h6.879c1.553,0,2.814,1.26,2.814,2.816    C48.708,74.301,47.446,75.561,45.894,75.561z M64.046,75.561h-8.781c-1.557,0-2.818-1.26-2.818-2.813    c0-1.557,1.262-2.816,2.818-2.816h8.781c1.551,0,2.814,1.26,2.814,2.816C66.86,74.301,65.597,75.561,64.046,75.561z     M70.649,58.609H20.647c-1.555,0-2.814-1.26-2.814-2.814c0-1.557,1.26-2.816,2.814-2.816h50.002c1.557,0,2.814,1.26,2.814,2.816    C73.464,57.35,72.206,58.609,70.649,58.609z M70.649,41.666H20.647c-1.555,0-2.814-1.26-2.814-2.815    c0-1.556,1.26-2.816,2.814-2.816h50.002c1.557,0,2.814,1.261,2.814,2.816C73.464,40.406,72.206,41.666,70.649,41.666z"
                fill="#95AEC2"/>
            </g>
            </g>
          </svg>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('Общие задания') }}
      </template>
      <template v-slot:TaskReportSubtitle v-if="!taskList.get_stats?.count && taskList.get_tasks.results">
        {{ taskList.get_tasks?.count + $t(' заданий') }}
      </template>
      <template v-else v-slot:TaskSceleton>
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
    </TasksReportBlock>
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <svg width="50px" height="50px" viewBox="0 0 91 91" enable-background="new 0 0 91 91" id="Layer_1" version="1.1"
             xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
            <g>
            <path
              d="M23.932,87.037V64.561c0-10.395,10.014-20.498,22.377-20.498h0.639c12.359,0,22.371,10.104,22.371,20.498    v22.477"
              fill="#95AEC2"/>
              <path
                d="M23.932,3.638v22.48c0,10.395,10.014,20.501,22.377,20.501h0.639c12.359,0,22.371-10.106,22.371-20.501    V3.638"
                fill="#647F94"/>
              <path
                d="M75.018,6.978H16.561c-1.846,0-3.34-1.496-3.34-3.34c0-1.846,1.494-3.34,3.34-3.34h58.457    c1.842,0,3.34,1.494,3.34,3.34C78.357,5.481,76.859,6.978,75.018,6.978z"
                fill="#45596B"/>
              <path
                d="M75.018,90.377H16.561c-1.846,0-3.34-1.496-3.34-3.34s1.494-3.34,3.34-3.34h58.457    c1.842,0,3.34,1.496,3.34,3.34S76.859,90.377,75.018,90.377z"
                fill="#45596B"/>
            </g>
            </g>
          </svg>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('В процессе') }}
      </template>
      <template v-if="!taskList.get_stats[0]" v-slot:TaskSceleton>
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
      <template v-else v-slot:TaskReportSubtitle>
        {{ taskList?.get_stats[0]?.count + $t(' заданий') }}
      </template>
    </TasksReportBlock>
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <svg width="50px" height="50px" viewBox="0 0 91 91" enable-background="new 0 0 91 91" id="Layer_1" version="1.1"
             xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g>
            <g>
            <path
              d="M16.084,38.938h-0.332c-8.271,0-15.002-6.68-15.002-14.888V11.007c0-1.846,1.494-3.34,3.342-3.34h14.494    c1.844,0,3.34,1.494,3.34,3.34v23.664c0.018,0.266,0.027,0.424,0.029,0.586c0.025,1.588-1.072,2.975-2.625,3.314    C18.201,38.819,17.139,38.938,16.084,38.938z M7.432,14.347v9.703c0,4.359,3.461,7.935,7.814,8.193V14.347H7.432z"
              fill="#45596B"/>
              <path
                d="M18.615,37.769c-1.34,0-2.438-1.076-2.459-2.424c-0.02-0.334-0.029-0.502-0.029-0.674V11.007    c0-1.359,1.1-2.459,2.459-2.459c1.357,0,2.459,1.1,2.459,2.459l0.01,23.832c0.01,0.145,0.018,0.287,0.02,0.432    c0.021,1.359-1.063,2.477-2.42,2.498C18.641,37.769,18.629,37.769,18.615,37.769z"
                fill="#647F94"/>
              <path
                d="M75.32,38.938h-0.332c-1.057,0-2.121-0.119-3.25-0.367c-1.572-0.342-2.678-1.756-2.629-3.363    c0.004-0.152,0.016-0.303,0.027-0.453l0.01-23.748c0-1.846,1.494-3.34,3.34-3.34H86.98c1.844,0,3.34,1.494,3.34,3.34V24.05    C90.32,32.259,83.592,38.938,75.32,38.938z M75.826,14.347v17.896c4.352-0.258,7.814-3.833,7.814-8.193v-9.703H75.826z"
                fill="#45596B"/>
              <path
                d="M45.535,88.495c-1.844,0-3.342-1.496-3.342-3.34V58.304c0-1.842,1.498-3.34,3.342-3.34    c1.846,0,3.34,1.498,3.34,3.34v26.852C48.875,86.999,47.381,88.495,45.535,88.495z"
                fill="#45596B"/>
              <path
                d="M60.531,88.495H30.537c-1.844,0-3.34-1.496-3.34-3.34c0-1.846,1.496-3.34,3.34-3.34h29.994    c1.844,0,3.34,1.494,3.34,3.34C63.871,86.999,62.375,88.495,60.531,88.495z"
                fill="#45596B"/>
              <g>
            <path
              d="M72.486,2.498H46.66v29.195c0,1.357-1.104,2.459-2.459,2.459H30.537c-1.357,0-2.459-1.102-2.459-2.459     V2.498h-9.492c-1.359,0-2.463,1.098-2.463,2.459l0.033,30.412c0.365,14.955,12.287,25.398,29,25.398h0.756     c16.711,0,28.635-10.443,28.994-25.453l0.039-30.357C74.945,3.595,73.844,2.498,72.486,2.498z"
              fill="#647F94"/>
                <rect fill="#3b82f6" height="26.734" width="8.744" x="32.996" y="2.498"/>
            </g>
            </g>
            </g>
          </svg>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('Выполненые') }}
      </template>
      <template v-if="!taskList.get_stats[2]" v-slot:TaskSceleton>
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
      <template v-else v-slot:TaskReportSubtitle>
        {{ taskList?.get_stats[2]?.count + $t(' заданий') }}
      </template>
    </TasksReportBlock>
    <TasksReportBlock>
      <template v-slot:TaskReportSvg>
        <svg width="50px" height="50px" viewBox="0 0 91 91" enable-background="new 0 0 91 91" id="Layer_1" version="1.1"
             xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g>
          <g>
          <path d="M16.142,90.613H68.39c3.418,0,6.197-2.779,6.197-6.195V29.52l-58.445-0.002V90.613z" fill="#647F94"/>
            <path
              d="M58.431,42.701c0-1.547,1.254-2.801,2.801-2.801s2.803,1.254,2.803,2.801v37.295    c0,1.549-1.256,2.801-2.803,2.801s-2.801-1.252-2.801-2.801V42.701z M42.56,42.701c0-1.547,1.254-2.801,2.803-2.801    c1.545,0,2.799,1.254,2.799,2.801v37.295c0,1.549-1.254,2.801-2.799,2.801c-1.549,0-2.803-1.252-2.803-2.801V42.701z     M26.688,42.701c0-1.547,1.256-2.801,2.801-2.801c1.547,0,2.803,1.254,2.803,2.801v37.295c0,1.549-1.256,2.801-2.803,2.801    c-1.545,0-2.801-1.252-2.801-2.801V42.701z"
              fill="#95AEC2"/>
            <rect fill="#3b82f6" height="9.438" width="66.611" x="12.056" y="14.479"/>
            <rect fill="#647F94" height="7.887" width="18.205" x="36.259" y="0.99"/>
          </g>
          </g>
        </svg>
      </template>
      <template v-slot:TaskReportTitle>
        {{ $t('Отклоненные') }}
      </template>
      <template v-if="!taskList.get_stats[3]" v-slot:TaskSceleton>
        <TheSceleton border-radius="20px" width="100px" height="20px"></TheSceleton>
      </template>
      <template v-else v-slot:TaskReportSubtitle>
        {{ taskList?.get_stats[3]?.count + $t(' заданий') }}
      </template>
    </TasksReportBlock>
  </div>
</template>

<script setup lang="ts">
import TasksReportBlock from "~/components/Tasks/TaskUI/TasksReportBlock.vue";
import TheSceleton from "~/components/UI/TheSceleton.vue";
import {useTaskList} from "~/stores/tasks";

const taskList = useTaskList()

const props = defineProps({
  stats: {
    type: Object,
  },
  taskNumber: {
    type: Number,
    default: null
  },
})
</script>