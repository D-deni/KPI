import {ref, onMounted} from "vue";
import WaveSurfer from "wavesurfer.js";
import RecordPlugin from "wavesurfer.js/dist/plugins/record";

interface IWave {
  registerPlugin: (plugin: any )=> any
  destroy: () => void
}
interface IRecord{
  isRecording: () => boolean,
  isPaused: () => boolean,
  startRecording: (options: { deviceId: any }) => Promise<void>
  stopRecording: () => void
  on: (event: string, callback: (blob: Blob) => void) => void
}

let wavesurfer: IWave
let record: IRecord
let scrollingWaveform = false
// const recordings = ref<HTMLElement | null>(null)
export default function useRecorder() {
  const createWaveSurfer = () => {
    if (wavesurfer) {
      wavesurfer.destroy()
    }
    wavesurfer = WaveSurfer.create({
      container: '#mic',
      waveColor: 'aqua',
      height: 20,
      width: 50,
      barWidth: 5,
      barRadius: 100,
      barGap: 1
    })

    record = wavesurfer.registerPlugin(RecordPlugin.create({scrollingWaveform, renderRecordedAudio: false}))
    record.on('record-end', (blob: Blob) => {
      const recordedUrl = URL.createObjectURL(blob)
      const wavesurfer = WaveSurfer.create({
        container: '#voiceMessageContainer',
        waveColor: 'rgba(0, 0, 0, 0.6)',
        progressColor: 'rgba(255, 255, 255)',
        cursorWidth: 0,
        barWidth: 10,
        height: 40,
        interact: true,
        dragToSeek: true,
        normalize: true,
        autoplay: true,
        url: recordedUrl,
      })
    })
  }
  {
    RecordPlugin.getAvailableAudioDevices().then((devices) => {
      devices.forEach((device) => {
        const option = document.createElement('option')
        option.value = device.deviceId
        option.text = device.label || device.deviceId
      })
    })
  }
  const recButton = () => {
    if (record && (record.isRecording() || record.isPaused())) {
      record.stopRecording()
      return
    }
    if(record) {
      record.startRecording({deviceId: null}).then(() => {
        return false
      })
    }
  }
  onMounted(() => {
    createWaveSurfer()
  })
  return{recButton, createWaveSurfer}
}