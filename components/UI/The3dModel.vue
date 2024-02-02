<script setup lang="ts">
import TheButton from "~/components/UI/TheButton.vue";
import {
  Mesh,
  PerspectiveCamera,
  Fog,
  Scene,
  WebGLRenderer,
  MeshBasicMaterial,
  AmbientLight,
  Color,
  PointLight,
  PointLightHelper,
  GridHelper,
  TextureLoader,
  DirectionalLight,
  DirectionalLightHelper,
  SpotLight,
  SpotLightHelper,
  AxesHelper,
  HemisphereLight,
  HemisphereLightHelper,
  SkeletonHelper,
  CameraHelper,
  ReinhardToneMapping,
  AnimationMixer, AnimationClip, AnimationAction, MOUSE
} from "three";
import {onMounted, watch} from 'vue'
import {useWindowSize} from "@vueuse/core";
import {OrbitControls, VertexTangentsHelper} from "three-stdlib";
import {useGLTFModel} from "~/composables/useGLTFModel";
import {ca} from "date-fns/locale";

let renderer: WebGLRenderer
let controls: OrbitControls
const experience = ref<HTMLCanvasElement | null>(null)
const {width, height} = useWindowSize()
const aspectRatio = computed(()=> width.value / height.value)
const scene = new Scene()
const camera = new PerspectiveCamera(75, aspectRatio.value, 1.2, 1000)
camera.position.set(5, 5, 5)
camera.rotation.set(-0.5,-0.5,-0.5)
scene.add(camera)


const {load} = useGLTFModel()
let {scene: model} = await load('/3d/scene.gltf')
scene.add(model)

  const bg = new Color(0x000)
scene.background = bg

const pl = new PointLight(0x3ff333, 0.9)
// pl.position.set(-50,20,50)
pl.position.set(10, 80, 40)
const al = new AmbientLight(0xffffff, 1)
al.position.set(100,1000,100)
const dl = new DirectionalLight(0xffffff, 1)
dl.position.set(100, 10, 100)
const sl = new SpotLight(0xffa95c, 4)
sl.castShadow = true
const hl = new HemisphereLight(0xffeeb1, 0x080820, 4)
scene.add(hl, sl)

const cHelper = new CameraHelper(camera)
const plHelper = new PointLightHelper(pl)
const dlHelper = new DirectionalLightHelper(dl)
const slHelper = new SpotLightHelper(sl)
const hlHelper = new HemisphereLightHelper(hl, 5)
const gridHelper = new GridHelper(200,50)
const axesHelper = new AxesHelper(500)
// scene.add(axesHelper)

function animate() {
  requestAnimationFrame(animate);
    model.rotation.y += 0.001;
}
animate()
function updateCamera() {
  camera.aspect = aspectRatio.value
  camera.updateProjectionMatrix()
  renderer.render(scene, camera)
}

function updateRender() {
  renderer.setSize(width.value, height.value)
}

function setRenderer() {
  if(experience.value) {
    renderer = new WebGLRenderer({canvas: experience.value, alpha: true})
    renderer.toneMapping = ReinhardToneMapping
    renderer.toneMappingExposure = 2.3
    controls = new OrbitControls(camera, renderer.domElement);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    controls.enableDamping = true
    // controls.autoRotate = false
    // controls.enableZoom = false
    controls.enablePan = false
    controls.dampingFactor = 0.009
    controls.maxDistance = 10;
    controls.minDistance = 7;
    controls.maxAzimuthAngle = 0.5
    controls.maxAzimuthAngle = 0.5
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.2;
    controls.zoomSpeed = 0.3
    updateRender()
  }
}

watch(aspectRatio, () => {
  updateCamera()
  updateRender()
})
onMounted(() => {
  setRenderer()
  loop()
})

const loop = () => {
  controls.update()
  renderer.render(scene, camera)
  requestAnimationFrame(loop)
}
</script>

<template>
  <canvas ref="experience"/>
</template>