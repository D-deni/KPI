<script setup lang="ts">
// import WaveSurfer from 'wavesurfer.js'
// import RecordPlugin from 'wavesurfer.js/dist/plugins/record'
//
// interface IWave {
//   registerPlugin: (plugin: any )=> any
//   destroy: () => void
// }
// interface IRecord{
//   isRecording: () => boolean,
//   isPaused: () => boolean,
//   startRecording: (options: { deviceId: any }) => Promise<void>
//   stopRecording: () => void
//   on: (event: string, callback: (blob: Blob) => void) => void
// }
//
// let wavesurfer: IWave
// let record: IRecord
// let scrollingWaveform = false
// const recordings = ref<HTMLElement | null>(null)
// const createWaveSurfer = () => {
//   if (wavesurfer) {
//     wavesurfer.destroy()
//   }
//   wavesurfer = WaveSurfer.create({
//     container: '#mic',
//     waveColor: 'rgb(200, 0, 200)',
//     progressColor: 'rgb(100, 0, 100)',
//   })
//
//   record = wavesurfer.registerPlugin(RecordPlugin.create({scrollingWaveform, renderRecordedAudio: false}))
//   record.on('record-end', (blob: Blob) => {
//     const recordedUrl = URL.createObjectURL(blob)
//     const wavesurfer = WaveSurfer.create({
//       container: '#voiceMessageContainer',
//       waveColor: 'rgb(200, 100, 0)',
//       progressColor: 'rgb(100, 50, 0)',
//       url: recordedUrl,
//     })
//   })
// }
// {
//   RecordPlugin.getAvailableAudioDevices().then((devices) => {
//     devices.forEach((device) => {
//       const option = document.createElement('option')
//       option.value = device.deviceId
//       option.text = device.label || device.deviceId
//     })
//   })
// }
// const recButton = () => {
//   if (record && (record.isRecording() || record.isPaused())) {
//     record.stopRecording()
//     return
//   }
//   if(record) {
//     record.startRecording({deviceId: null}).then(() => {
//         return false
//     })
//   }
// }
// onMounted(() => {
//   createWaveSurfer()
// })
</script>

<template>
<!--  <div>-->
<!--    <button id="record" @click="recButton">Record</button>-->
<!--    <div id="voiceMessageContainer">-->
<!--    </div>-->
<!--    <select id="mic-select">-->
<!--      <option value="" hidden>Select mic</option>-->
<!--    </select>-->
<!--    <label style="display:inline-block;"><input type="checkbox"/> Scrolling waveform</label>-->
<!--    <div id="mic" style="border: 1px solid #ddd; border-radius: 4px; margin-top: 1rem"></div>-->
<!--    <div ref="recordings" style="margin: 1rem 0"></div>-->
<!--  </div>-->
</template>

<style scoped>

</style>